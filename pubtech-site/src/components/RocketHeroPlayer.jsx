import { useEffect, useRef } from 'react';

const LAUNCH_DURATION = 48;
const FLOAT_PERIOD = 72;
const FPS = 30;
const TOTAL_FRAMES = 185;

export default function RocketHeroPlayer() {
  const frameRef = useRef(0);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(null);

  const rocketRef = useRef(null);
  const glowRef = useRef(null);
  const coreRef = useRef(null);

  useEffect(() => {
    const INTERVAL = 1000 / FPS;

    function clamp(v, lo, hi) { return v < lo ? lo : v > hi ? hi : v; }

    function interpolate(frame, [f0, f1], [v0, v1], easing = (t) => t) {
      const t = clamp((frame - f0) / (f1 - f0), 0, 1);
      return v0 + (v1 - v0) * easing(t);
    }

    // Easing: cubic bezier approx for (0.16, 1, 0.3, 1) — ease-out expo
    function easeOutExpo(t) {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    }

    function tick(timestamp) {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const elapsed = timestamp - lastTimeRef.current;

      if (elapsed >= INTERVAL) {
        lastTimeRef.current = timestamp - (elapsed % INTERVAL);
        const frame = frameRef.current;

        const W = 800; const H = 800;

        // Launch
        const launchY = interpolate(frame, [0, LAUNCH_DURATION], [H * 0.85, 0], easeOutExpo);
        const fadeIn = clamp(frame / 18, 0, 1);
        const launchScaleX = interpolate(frame, [0, LAUNCH_DURATION], [0.22, 1], easeOutExpo);
        const launchBankRotate = interpolate(frame, [0, LAUNCH_DURATION], [-22, 0], easeOutExpo);
        const launchScaleY = interpolate(frame, [0, LAUNCH_DURATION * 0.4], [0.75, 1], easeOutExpo);

        // Float
        const floatProgress = Math.max(0, frame - LAUNCH_DURATION);
        const bankSine = Math.sin((floatProgress / FLOAT_PERIOD) * 2 * Math.PI);
        const floatY = bankSine * 22;
        const floatScaleX = 0.915 + bankSine * 0.085;
        const floatBankRotate = bankSine * 4;

        const totalY = launchY + floatY;
        const totalScaleX = frame < LAUNCH_DURATION ? launchScaleX : floatScaleX;
        const totalScaleY = frame < LAUNCH_DURATION ? launchScaleY : 1;
        const totalBankRotate = frame < LAUNCH_DURATION ? launchBankRotate : floatBankRotate;

        // Flame
        const launchProgress = clamp(frame / LAUNCH_DURATION, 0, 1);
        const flickerBase = 0.6 + Math.sin((frame / 3.5) * Math.PI) * 0.28;
        const flickerOpacity = flickerBase * (frame < LAUNCH_DURATION ? 0.2 + launchProgress * 0.8 : 1);
        const flickerScale = 0.82 + Math.sin((frame / 2.8) * Math.PI) * 0.2;
        const flameShiftX = (1 - totalScaleX) * -60;
        const glowSize = W * 0.3;
        const glowLeft = W * 0.04 + flameShiftX;
        const glowBottom = H * 0.16;
        const coreOpacity = (0.85 + Math.sin((frame / 2) * Math.PI) * 0.15) * flickerOpacity;

        // Apply to DOM
        if (rocketRef.current) {
          const r = rocketRef.current;
          r.style.opacity = fadeIn;
          r.style.scaleX = totalScaleX;
          r.style.scaleY = totalScaleY;
          r.style.translate = `0px ${totalY}px`;
          r.style.rotate = `${totalBankRotate}deg`;
        }
        if (glowRef.current) {
          const g = glowRef.current;
          g.style.left = `${glowLeft}px`;
          g.style.bottom = `${glowBottom}px`;
          g.style.width = `${glowSize}px`;
          g.style.height = `${glowSize}px`;
          g.style.opacity = flickerOpacity;
          g.style.scale = String(flickerScale * totalScaleX);
          g.style.translate = `0px ${totalY}px`;
          g.style.rotate = `${totalBankRotate}deg`;
        }
        if (coreRef.current) {
          const c = coreRef.current;
          c.style.left = `${glowLeft + glowSize * 0.32}px`;
          c.style.bottom = `${glowBottom + glowSize * 0.28}px`;
          c.style.width = `${glowSize * 0.36}px`;
          c.style.height = `${glowSize * 0.36}px`;
          c.style.opacity = coreOpacity;
          c.style.translate = `0px ${totalY}px`;
          c.style.rotate = `${totalBankRotate}deg`;
        }

        frameRef.current = (frame + 1) % TOTAL_FRAMES;
      }

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', overflow: 'visible' }}>
      {/* Outer flame glow */}
      <div
        ref={glowRef}
        style={{
          position: 'absolute',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,200,50,0.85) 0%, rgba(255,100,0,0.5) 45%, transparent 72%)',
          filter: 'blur(22px)',
          pointerEvents: 'none',
        }}
      />
      {/* Hot core */}
      <div
        ref={coreRef}
        style={{
          position: 'absolute',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,200,1) 0%, rgba(255,220,80,0.8) 50%, transparent 75%)',
          filter: 'blur(8px)',
          pointerEvents: 'none',
        }}
      />
      {/* Rocket */}
      <img
        ref={rocketRef}
        src="/assets/illustrations/rocket.png"
        alt=""
        style={{
          position: 'absolute',
          width: '78%',
          height: '78%',
          objectFit: 'contain',
          top: '11%',
          left: '11%',
          opacity: 0,
        }}
      />
    </div>
  );
}
