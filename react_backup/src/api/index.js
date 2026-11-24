const API_BASE = import.meta.env.VITE_API_BASE || 'http://127.0.0.1:8000/';

export function buildUrl(path) {
  // allow passing full URLs or relative paths
  if (!path) return API_BASE;
  if (/^https?:\/\//.test(path)) return path;
  return `${API_BASE.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}

export async function apiFetch(path, options = {}) {
  const url = buildUrl(path);
  const res = await fetch(url, options);
  return res;
}

export async function authFetch(path, token, options = {}) {
  const headers = Object.assign({}, options.headers || {});
  if (!token) {
    // let caller handle missing credentials; doing a fetch will just send no header
    // but throwing makes debugging easier
    throw new Error('No authentication token provided (user may not be logged in)');
  }

  // allow the auth scheme to be configured via env variable; default to Bearer
  // DRF TokenAuthentication expects "Token <key>"; default to that unless overridden
  const scheme = import.meta.env.VITE_AUTH_SCHEME || 'Token';
  if (typeof token === 'string') {
    if (token.startsWith('Bearer ') || token.startsWith('Token ')) {
      // token already contains a scheme prefix
      headers['Authorization'] = token;
    } else {
      headers['Authorization'] = `${scheme} ${token}`;
    }
  } else {
    headers['Authorization'] = `${scheme} ${token}`;
  }

  headers['Content-Type'] = headers['Content-Type'] || 'application/json';
  const opts = Object.assign({}, options, { headers });

  // If we're sending FormData, let the browser set the Content-Type header
  if (opts.body instanceof FormData) {
    delete opts.headers['Content-Type'];
  }
  return apiFetch(path, opts);
}

export const endpoints = {
  circular: 'api/circular/',
  gallery: 'api/gallery/',
  leaders: 'api/leaders/',
  workingCommittee: 'api/working-committee/',
  districtLeaders: 'api/district-leaders/',
  notifications: 'api/notifications/',
};

export default { buildUrl, apiFetch, authFetch, endpoints };
