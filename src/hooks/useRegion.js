import { useState, useEffect } from 'react';
import { regionalContent } from '../config/regionalContent';

export function useRegion() {
  const [regionData, setRegionData] = useState(regionalContent.us);

  useEffect(() => {
    // Basic hostname check to determine region
    const hostname = window.location.hostname;
    if (hostname.includes('ph.trendsettertextiles.com')) {
      setRegionData(regionalContent.ph);
    } else {
      // Default to US
      setRegionData(regionalContent.us);
    }
  }, []);

  return regionData;
}
