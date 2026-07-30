import { AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

const LAUNCH_DURATION = 48;
const FLOAT_PERIOD = 72;

export const RocketHeroComp = ({ rocketSrc = '/assets/illustrations/rocket.png' }) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  // Launch: rise from below
  const launchY = interpolate(frame, [0, LAUNCH_DURATION], [height * 0.85, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const fadeIn = interpolate(frame, [0, 18], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // 3D banking illusion on launch
  const launchScaleX = interpolate(frame, [0, LAUNCH_DURATION], [0.22, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const launchBankRotate = interpolate(frame, [0, LAUNCH_DURATION], [-22, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const launchScaleY = interpolate(frame, [0, LAUNCH_DURATION * 0.4], [0.75, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  // Float: hover + live banking sway
  const floatProgress = Math.max(0, frame - LAUNCH_DURATION);
  const bankSine = Math.sin((floatProgress / FLOAT_PERIOD) * 2 * Math.PI);
  const floatY = bankSine * 22;
  const floatScaleX = 0.915 + bankSine * 0.085;
  const floatBankRotate = bankSine * 4;

  // Combine phases
  const totalY = launchY + floatY;
  const totalScaleX = frame < LAUNCH_DURATION ? launchScaleX : floatScaleX;
  const totalScaleY = frame < LAUNCH_DURATION ? launchScaleY : 1;
  const totalBankRotate = frame < LAUNCH_DURATION ? launchBankRotate : floatBankRotate;

  // Flame glow
  const flickerOpacity =
    (0.6 + Math.sin((frame / 3.5) * Math.PI) * 0.28) *
    interpolate(frame, [0, LAUNCH_DURATION], [0.2, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
  const flickerScale = 0.82 + Math.sin((frame / 2.8) * Math.PI) * 0.2;
  const flameShiftX = (1 - totalScaleX) * -60;
  const glowSize = width * 0.3;
  const glowLeft = width * 0.04 + flameShiftX;
  const glowBottom = height * 0.16;

  const coreOpacity = 0.85 + Math.sin((frame / 2) * Math.PI) * 0.15;

  return (
    <AbsoluteFill style={{ background: 'transparent' }}>
      {/* Outer flame glow */}
      <div
        style={{
          position: 'absolute',
          left: glowLeft,
          bottom: glowBottom,
          width: glowSize,
          height: glowSize,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,200,50,0.85) 0%, rgba(255,100,0,0.5) 45%, transparent 72%)',
          filter: `blur(${width * 0.028}px)`,
          opacity: flickerOpacity,
          scale: String(flickerScale * totalScaleX),
          translate: `0px ${totalY}px`,
          rotate: `${totalBankRotate}deg`,
        }}
      />

      {/* Hot engine core */}
      <div
        style={{
          position: 'absolute',
          left: glowLeft + glowSize * 0.32,
          bottom: glowBottom + glowSize * 0.28,
          width: glowSize * 0.36,
          height: glowSize * 0.36,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,200,1) 0%, rgba(255,220,80,0.8) 50%, transparent 75%)',
          filter: `blur(${width * 0.01}px)`,
          opacity: coreOpacity * flickerOpacity,
          translate: `0px ${totalY}px`,
          rotate: `${totalBankRotate}deg`,
        }}
      />

      {/* Rocket */}
      <img
        src={rocketSrc}
        alt=""
        style={{
          position: 'absolute',
          width: '78%',
          height: '78%',
          objectFit: 'contain',
          top: '11%',
          left: '11%',
          opacity: fadeIn,
          scaleX: String(totalScaleX),
          scaleY: String(totalScaleY),
          translate: `0px ${totalY}px`,
          rotate: `${totalBankRotate}deg`,
        }}
      />
    </AbsoluteFill>
  );
};
