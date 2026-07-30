import { useEffect, useRef } from 'react';

const LINES = [
  { text: 'Wir gestalten', startDelay: 0,    className: '' },
  { text: 'digitale',      startDelay: 0.18,  className: 'l2' },
  { text: 'Plattformen.',  startDelay: 0.36,  className: '' },
];

export default function KineticHeadline() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('kh-in');
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('kh-in'); io.disconnect(); } },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <h1 ref={ref} className="kh-root">
      {LINES.map(({ text, startDelay, className }) => {
        let i = 0;
        const words = text.split(' ');
        return (
          <span key={text} className={`kh-line${className ? ' ' + className : ''}`}>
            {words.map((word, wi) => (
              <span key={wi} className="kh-word">
                {word.split('').map((char) => {
                  const delay = (startDelay + i++ * 0.028).toFixed(3);
                  return (
                    <span key={char + i} className="kh-char" style={{ '--delay': `${delay}s` }}>
                      {char}
                    </span>
                  );
                })}
                {wi < words.length - 1 ? ' ' : ''}
              </span>
            ))}
          </span>
        );
      })}
    </h1>
  );
}
