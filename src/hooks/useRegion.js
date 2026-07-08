import { useState, useEffect } from 'react';
import { regionalContent } from '../config/regionalContent';

export function useRegion() {
  const [regionData, setRegionData] = useState(regionalContent.us);

  useEffect(() => {
    // Basic hostname and port check to determine region
    const hostname = window.location.hostname;
    if (hostname.includes('ph.trendsettertextiles.com') || (hostname === 'localhost' && window.location.port === '5174')) {
      setRegionData(regionalContent.ph);
    } else {
      setRegionData(regionalContent.us);
    }
  }, []);

  return regionData;
}
