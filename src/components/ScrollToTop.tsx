import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    console.log('ScrollToTop triggered for pathname:', pathname);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0); // 0 ms delay
  }, [pathname]);

  return null;
};

export default ScrollToTop;
