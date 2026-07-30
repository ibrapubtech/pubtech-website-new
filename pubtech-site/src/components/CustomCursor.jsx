import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const [state, setState] = useState('default'); // default | hover | click

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x, ry = y;
    let raf;
    let visible = false;

    const show = () => {
      if (visible) return;
      visible = true;
      dotRef.current && (dotRef.current.style.opacity = '1');
      ringRef.current && (ringRef.current.style.opacity = '1');
    };

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      show();
    };

    const onEnter = () => setState('hover');
    const onLeave = () => setState('default');
    const onDown  = () => setState('click');
    const onUp    = () => setState('hover');

    const bindInteractives = () => {
      document.querySelectorAll('a, button, [role="button"], input, textarea, select').forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
        el.addEventListener('mousedown',  onDown);
        el.addEventListener('mouseup',    onUp);
      });
    };

    const tick = () => {
      rx += (x - rx) * 0.1;
      ry += (y - ry) * 0.1;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px,${y}px,0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px,${ry}px,0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.body.style.cursor = 'none';
    bindInteractives();
    raf = requestAnimationFrame(tick);

    // Re-bind after any DOM mutation (SPA route changes etc.)
    const mo = new MutationObserver(bindInteractives);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      document.body.style.cursor = '';
      mo.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className={`c-cursor-dot  c-cursor-dot--${state}`}  aria-hidden="true" />
      <div ref={ringRef} className={`c-cursor-ring c-cursor-ring--${state}`} aria-hidden="true" />
    </>
  );
}
