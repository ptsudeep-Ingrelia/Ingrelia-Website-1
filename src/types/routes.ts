export type PageId = 'home' | 'about' | 'applications' | 'solutions' | 'careers' | 'contact';

export const PAGE_PATHS: Record<PageId, string> = {
  home: '/',
  about: '/about',
  applications: '/applications',
  solutions: '/customer-solutions',
  careers: '/careers',
  contact: '/contact',
};

export interface RouteMatch {
  page: PageId;
  shouldReplace: boolean;
  cleanPath: string;
}

export const parsePathToPage = (pathname: string, hash?: string): RouteMatch => {
  // 1. Check for legacy hash routes (e.g. #about, #/customer-solutions)
  const rawHash = (hash || '').replace(/^#\/?/, '').toLowerCase().trim();
  if (rawHash) {
    if (rawHash === 'about') return { page: 'about', shouldReplace: true, cleanPath: '/about' };
    if (rawHash === 'applications') return { page: 'applications', shouldReplace: true, cleanPath: '/applications' };
    if (rawHash === 'solutions' || rawHash === 'customer-solutions') {
      return { page: 'solutions', shouldReplace: true, cleanPath: '/customer-solutions' };
    }
    if (rawHash === 'careers') return { page: 'careers', shouldReplace: true, cleanPath: '/careers' };
    if (rawHash === 'contact') return { page: 'contact', shouldReplace: true, cleanPath: '/contact' };
    if (rawHash === 'home') return { page: 'home', shouldReplace: true, cleanPath: '/' };
  }

  // 2. Normalize pathname: remove trailing slash unless it is just '/'
  let clean = (pathname || '/').toLowerCase().trim();
  if (clean.endsWith('/') && clean.length > 1) {
    clean = clean.slice(0, -1);
  }

  // 3. Match clean pathname
  if (clean === '/about') {
    return { page: 'about', shouldReplace: false, cleanPath: '/about' };
  }
  if (clean === '/applications') {
    return { page: 'applications', shouldReplace: false, cleanPath: '/applications' };
  }
  if (clean === '/customer-solutions') {
    return { page: 'solutions', shouldReplace: false, cleanPath: '/customer-solutions' };
  }
  if (clean === '/solutions') {
    // Legacy path redirect to /customer-solutions
    return { page: 'solutions', shouldReplace: true, cleanPath: '/customer-solutions' };
  }
  if (clean === '/careers') {
    return { page: 'careers', shouldReplace: false, cleanPath: '/careers' };
  }
  if (clean === '/contact') {
    return { page: 'contact', shouldReplace: false, cleanPath: '/contact' };
  }

  // 4. Default root /
  return {
    page: 'home',
    shouldReplace: clean !== '/' && clean !== '',
    cleanPath: '/',
  };
};
