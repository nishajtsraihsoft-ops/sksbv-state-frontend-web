import React, { createContext, useState, useContext } from 'react';
import API from '../api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });
  const [token, setToken] = useState(() => localStorage.getItem('token'));

  const login = async (username, password) => {
    const candidates = [
      'api/login/',
      'api/auth/login/',
      'api/token/',
      'auth/login/',
      'api/dj-rest-auth/login/',
    ];

    let lastError = 'Login failed';
    for (const ep of candidates) {
      try {
        const resp = await API.apiFetch(API.buildUrl(ep), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        });
        const data = await resp.json().catch(() => ({}));
        if (!resp.ok) {
          lastError = data.error || data.detail || `HTTP ${resp.status}`;
          continue;
        }

        // extract token from common shapes
        const token = data.token || data.access || data.access_token || data.key;
        let user = data.user || data;

        // if token exists but no user object, try common profile endpoints
        if (token && (!user || !user.role)) {
          const profileCandidates = ['api/user/', 'auth/user/', 'api/profile/'];
          for (const p of profileCandidates) {
            try {
              const pr = await API.authFetch(p, token, { method: 'GET' });
              if (pr.ok) {
                const pu = await pr.json().catch(() => null);
                if (pu) {
                  user = pu;
                  break;
                }
              }
            } catch (e) {
              // ignore and try next
            }
          }
        }

        if (token) {
          setUser(user || { username });
          setToken(token);
          localStorage.setItem('user', JSON.stringify(user || { username }));
          localStorage.setItem('token', token);
          return { ok: true };
        }

        lastError = 'No token in response';
      } catch (e) {
        lastError = e.message || String(e);
      }
    }

    return { ok: false, error: lastError };
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
