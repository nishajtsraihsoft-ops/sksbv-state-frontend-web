import React, { useEffect, useState } from 'react';
import API from '../api';
import { useAuth } from '../contexts/AuthProvider';

const AdminResource = ({ label, endpoint }) => {
  const { token } = useAuth();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({});
  const [schemaFields, setSchemaFields] = useState(null); // keys from OPTIONS
  const [searchTerm, setSearchTerm] = useState('');

  const load = async () => {
    setLoading(true);
    setError('');
    try {
      const resp = await API.authFetch(endpoint, token, { method: 'GET' });
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const json = await resp.json();
      setItems(Array.isArray(json) ? json : json.results || []);
    } catch (e) {
      setError(String(e));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    // also attempt to fetch schema definition
    async function fetchSchema() {
      try {
        const resp = await API.authFetch(endpoint, token, { method: 'OPTIONS' });
        if (resp.ok) {
          const json = await resp.json();
          const fields = json.actions && json.actions.POST ? Object.keys(json.actions.POST) : null;
          setSchemaFields(fields);
        }
      } catch (e) {
        // ignore
      }
    }
    fetchSchema();
  }, [endpoint, token]);

  const detectFieldType = (key, value) => {
    const lc = key.toLowerCase();
    if (lc.includes('file') || lc.includes('image') || lc.includes('photo')) return 'file';
    if (lc.includes('date') || lc.includes('time')) return 'datetime-local';
    if (lc.includes('email')) return 'email';
    if (lc.includes('url') || lc.includes('link')) return 'url';
    if (lc.includes('password')) return 'password';
    if (typeof value === 'number') return 'number';
    if (typeof value === 'boolean') return 'checkbox';
    if (value && value.toString().length > 100) return 'textarea';
    return 'text';
  };

  const formatLabel = (key) => {
    return key
      .replace(/_/g, ' ')
      .replace(/([A-Z])/g, ' $1')
      .trim()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const getEditableFields = (item) => {
    const exclude = ['id', 'pk', 'created_at', 'updated_at', 'created', 'modified'];
    return Object.entries(item).filter(([key]) => !exclude.includes(key));
  };

  const prepareBody = () => {
    const hasFile = Object.values(formData).some(
      (v) => v instanceof File || (v && typeof v === 'object' && v.type && v.size)
    );
    if (hasFile) {
      const fd = new FormData();
      Object.entries(formData).forEach(([k, v]) => {
        if (v === '' || v === null || v === undefined) return;
        if (detectFieldType(k, v) === 'file' && typeof v === 'string') return; // keep existing
        fd.append(k, v);
      });
      return { body: fd, useForm: true };
    }
    return { body: JSON.stringify(formData), useForm: false };
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const { body } = prepareBody();
      const resp = await API.authFetch(endpoint, token, {
        method: 'POST',
        body,
      });
      if (!resp.ok) {
        let msg = `HTTP ${resp.status}`;
        try {
          const err = await resp.json();
          if (err.detail) msg += `: ${err.detail}`;
          else if (typeof err === 'object') msg += `: ${JSON.stringify(err)}`;
        } catch {}
        throw new Error(msg);
      }
      await load();
      setFormData({});
      setShowForm(false);
      setSuccess('✓ Item created successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (e) {
      setError('✗ ' + String(e));
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const { body } = prepareBody();
      const resp = await API.authFetch(`${endpoint}${editingId}/`, token, {
        method: 'PUT',
        body,
      });
      if (!resp.ok) {
        let msg = `HTTP ${resp.status}`;
        try {
          const err = await resp.json();
          if (err.detail) msg += `: ${err.detail}`;
          else if (typeof err === 'object') msg += `: ${JSON.stringify(err)}`;
        } catch {}
        throw new Error(msg);
      }
      await load();
      setEditingId(null);
      setFormData({});
      setShowForm(false);
      setSuccess('✓ Item updated successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (e) {
      setError('✗ ' + String(e));
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;
    setError('');
    setSuccess('');
    try {
      const resp = await API.authFetch(`${endpoint}${id}/`, token, { method: 'DELETE' });
      if (!resp.ok && resp.status !== 204) {
        let msg = `HTTP ${resp.status}`;
        try {
          const err = await resp.json();
          if (err.detail) msg += `: ${err.detail}`;
          else if (typeof err === 'object') msg += `: ${JSON.stringify(err)}`;
        } catch {}
        throw new Error(msg);
      }
      await load();
      setSuccess('✓ Item deleted successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (e) {
      setError('✗ ' + String(e));
    }
  };

  const startEdit = (item) => {
    setEditingId(item.id || item.pk);
    setFormData(item);
    setShowForm(true);
  };

  const cancelForm = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({});
  };

  const handleInputChange = (key, value) => {
    // if a File is passed (from file input) we store it directly
    if (value instanceof File) {
      setFormData((prev) => ({ ...prev, [key]: value }));
      return;
    }
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const getDisplayValue = (value) => {
    if (typeof value === 'boolean') return value ? '✓ Yes' : '✗ No';
    if (!value) return '—';
    if (typeof value === 'object') return JSON.stringify(value);
    return String(value).length > 50 ? String(value).substring(0, 50) + '...' : String(value);
  };

  const filteredItems = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="admin-resource">
      <div className="card border-0 shadow-sm">
        {/* Header */}
        <div className="card-header bg-white border-bottom p-4">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h5 className="mb-1 fw-bold">{label}</h5>
              <small className="text-muted">{items.length} total items</small>
            </div>
            <div className="col-md-4 text-end">
              <button
                className={`btn btn-sm ${showForm ? 'btn-secondary' : 'btn-primary'}`}
                onClick={() => {
                  setEditingId(null);
                  if (!showForm) {
                    let tmpl = {};
                    if (items[0]) {
                      getEditableFields(items[0]).forEach(([k]) => {
                        tmpl[k] = '';
                      });
                    } else if (schemaFields) {
                      tmpl = schemaFields.reduce((acc, k) => ({ ...acc, [k]: '' }), {});
                    }
                    setFormData(tmpl);
                  } else {
                    setFormData({});
                  }
                  setShowForm(!showForm);
                }}
              >
                {showForm ? '✕ Cancel' : '+ New Item'}
              </button>
            </div>
          </div>
        </div>

        {/* Alerts */}
        <div className="card-body p-4">
          {error && (
            <div className="alert alert-danger alert-dismissible fade show mb-3" role="alert">
              <strong>Error:</strong> {error}
              <button type="button" className="btn-close" onClick={() => setError('')}></button>
            </div>
          )}
          {success && (
            <div className="alert alert-success alert-dismissible fade show mb-3" role="alert">
              {success}
              <button type="button" className="btn-close" onClick={() => setSuccess('')}></button>
            </div>
          )}
        </div>

        {/* Form Section */}
        {showForm && (
          <div className="card-body bg-light border-top p-4">
            <h6 className="fw-semibold mb-4">{editingId ? 'Edit Item' : 'Create New Item'}</h6>
            <form onSubmit={editingId ? handleUpdate : handleCreate}>
              <div className="row">
                {getEditableFields(formData).map(([key, value]) => {
                  const fieldType = detectFieldType(key, value);
                  return (
                    <div className="col-lg-6 mb-3" key={key}>
                      <label className="form-label fw-500 small">{formatLabel(key)}</label>
                      {fieldType === 'textarea' ? (
                        <textarea
                          className="form-control"
                          rows={3}
                          value={value || ''}
                          onChange={(e) => handleInputChange(key, e.target.value)}
                          placeholder={`Enter ${formatLabel(key).toLowerCase()}`}
                          required={key !== 'description' && key !== 'remarks'}
                        />
                      ) : fieldType === 'checkbox' ? (
                        <div className="form-check mt-2">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={`chk_${key}`}
                            checked={value || false}
                            onChange={(e) => handleInputChange(key, e.target.checked)}
                          />
                          <label className="form-check-label" htmlFor={`chk_${key}`}>
                            {formatLabel(key)}
                          </label>
                        </div>
                      ) : fieldType === 'file' ? (
                        <>
                          {typeof value === 'string' && value && (
                            <div className="mb-2">
                              <a href={value} target="_blank" rel="noopener noreferrer">
                                Current file
                              </a>
                            </div>
                          )}
                          <input
                            type="file"
                            className="form-control"
                            onChange={(e) => handleInputChange(key, e.target.files[0])}
                          />
                        </>
                      ) : (
                        <input
                          type={fieldType}
                          className="form-control"
                          value={value || ''}
                          onChange={(e) => handleInputChange(key, e.target.value)}
                          placeholder={`Enter ${formatLabel(key).toLowerCase()}`}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="d-flex gap-2 mt-4">
                <button type="submit" className="btn btn-primary">
                  <i className={`bi ${editingId ? 'bi-download' : 'bi-plus-circle'}`}></i>
                  {editingId ? ' Save Changes' : ' Create'}
                </button>
                <button type="button" className="btn btn-outline-secondary" onClick={cancelForm}>
                  <i className="bi bi-x-circle"></i> Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Content Section */}
        <div className="card-body p-4">
          {/* Search Bar */}
          {items.length > 0 && (
            <div className="mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="🔍 Search items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          )}

          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading…</span>
              </div>
              <p className="text-muted mt-2">Loading data...</p>
            </div>
          ) : filteredItems.length === 0 && !searchTerm ? (
            <div className="text-center py-5">
              <p className="text-muted">
                <i className="bi bi-inbox"></i> No items yet. Create one to get started!
              </p>
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="text-center py-3">
              <p className="text-muted">No items match your search.</p>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th style={{ fontSize: '0.85rem', fontWeight: '600' }}>ID</th>
                    {items[0] &&
                      Object.keys(items[0])
                        .filter((k) => !['id', 'pk'].includes(k))
                        .slice(0, 3)
                        .map((key) => (
                          <th key={key} style={{ fontSize: '0.85rem', fontWeight: '600' }}>
                            {formatLabel(key)}
                          </th>
                        ))}
                    <th style={{ fontSize: '0.85rem', fontWeight: '600' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredItems.map((item) => (
                    <tr key={item.id || item.pk}>
                      <td>
                        <span className="badge bg-secondary">{item.id || item.pk}</span>
                      </td>
                      {Object.entries(item)
                        .filter(([k]) => !['id', 'pk'].includes(k))
                        .slice(0, 3)
                        .map(([key, value]) => (
                          <td key={key} style={{ fontSize: '0.85rem' }}>
                            <span title={JSON.stringify(value)}>{getDisplayValue(value)}</span>
                          </td>
                        ))}
                      <td style={{ fontSize: '0.85rem' }}>
                        <button
                          className="btn btn-sm btn-outline-primary me-2"
                          onClick={() => startEdit(item)}
                          title="Edit"
                        >
                          <i className="bi bi-pencil"></i> Edit
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleDelete(item.id || item.pk)}
                          title="Delete"
                        >
                          <i className="bi bi-trash"></i> Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="card-footer bg-light text-muted small p-3">
            Showing {filteredItems.length} of {items.length} items
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminResource;
