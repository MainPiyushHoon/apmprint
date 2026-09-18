export const BASE_URL = import.meta.env.BASE_URL || '/';

/**
 * Returns the fully-qualified relative URL including the application base path.
 * e.g., getAppUrl('images/logo.svg') -> '/apmprint/images/logo.svg' (or '/images/logo.svg' if root base)
 * e.g., getAppUrl('services/') -> '/apmprint/services/'
 * e.g., getAppUrl('#contact') -> '/apmprint/#contact'
 */
export function getAppUrl(path = '') {
  if (!path) return BASE_URL;
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('mailto:') ||
    path.startsWith('tel:')
  ) {
    return path;
  }

  // Hash only
  if (path.startsWith('#')) {
    return `${BASE_URL}${path}`;
  }

  // Hash with root prefix (/#contact)
  if (path.startsWith('/#')) {
    return `${BASE_URL}${path.slice(1)}`;
  }

  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${BASE_URL}${clean}`;
}

/**
 * Strips the base path prefix to return the normalized route path.
 * e.g., '/apmprint/services/' -> '/services/'
 * e.g., '/services/' -> '/services/'
 * e.g., '/apmprint/' -> '/'
 */
export function getRoutePath(pathname) {
  if (!pathname) return '/';
  let path = pathname.trim().split('?')[0].split('#')[0];
  const baseNoTrailing = BASE_URL.replace(/\/$/, '');
  if (baseNoTrailing && path.startsWith(baseNoTrailing)) {
    path = path.slice(baseNoTrailing.length);
  }
  if (!path.startsWith('/')) {
    path = '/' + path;
  }
  if (path !== '/' && !path.endsWith('/')) {
    path += '/';
  }
  return path;
}
