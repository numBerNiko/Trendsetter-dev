import { regionalContent } from '../config/regionalContent';

export function useRegion() {
  // Determine region purely from the initial pathname
  // since changing regions will trigger a full page reload.
  const path = window.location.pathname;
  const isPH = path === '/ph' || path.startsWith('/ph/');
  
  const regionData = isPH ? regionalContent.ph : regionalContent.us;
  
  return {
    ...regionData,
    prefix: isPH ? '/ph' : '',
    isPH
  };
}
