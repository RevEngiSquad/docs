'use client';

import { useEffect } from 'react';

export default function NavScrollBehavior() {
  useEffect(() => {
    const nav = document.getElementById('nd-nav');
    if (!nav) return;

    let lastY = window.scrollY;

    const update = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastY;
      const shouldHide = scrollingDown && currentY > 96;

      nav.dataset.navState = shouldHide ? 'hidden' : 'visible';
      lastY = currentY;
    };

    update();
    window.addEventListener('scroll', update, { passive: true });

    return () => {
      window.removeEventListener('scroll', update);
      delete nav.dataset.navState;
    };
  }, []);

  return null;
}
