/* pub.tech Studio — Tweaks island.
   Applies live tweaks to the vanilla page via <html> attributes,
   CSS custom properties, and the PubMotion API. */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "hero": "a",
  "accent": "lime",
  "motion": "maximal",
  "grain": true
}/*EDITMODE-END*/;

const ACCENTS = {
  lime:     { head: 'var(--pub-lime-500)', acc: 'var(--pub-lime-500)', acc2: 'var(--pub-aqua-500)' },
  aqua:     { head: 'var(--pub-aqua-500)', acc: 'var(--pub-aqua-500)', acc2: 'var(--pub-lime-500)' },
  balanced: { head: 'var(--pub-lime-500)', acc: 'var(--pub-aqua-500)', acc2: 'var(--pub-aqua-500)' },
};

function StudioTweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const root = document.documentElement;

  React.useEffect(() => { root.setAttribute('data-hero', t.hero); }, [t.hero]);

  React.useEffect(() => {
    const a = ACCENTS[t.accent] || ACCENTS.lime;
    root.style.setProperty('--head', a.head);
    root.style.setProperty('--acc', a.acc);
    root.style.setProperty('--acc-2', a.acc2);
  }, [t.accent]);

  React.useEffect(() => {
    if (window.PubMotion) window.PubMotion.setLevel(t.motion);
    else root.setAttribute('data-motion', t.motion);
  }, [t.motion]);

  React.useEffect(() => {
    const g = document.querySelector('.bg-grain');
    if (g) g.style.display = t.grain ? '' : 'none';
  }, [t.grain]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Hero direction" />
      <TweakRadio
        label="Layout"
        value={t.hero}
        options={[{ value: 'a', label: 'Split' }, { value: 'b', label: 'Centered' }, { value: 'c', label: 'Editorial' }]}
        onChange={(v) => setTweak('hero', v)}
      />
      <TweakSection label="Color" />
      <TweakSection label="Color" />
      <TweakRadio
        label="Accent"
        value={t.accent}
        options={[{ value: 'lime', label: 'Lime' }, { value: 'aqua', label: 'Aqua' }, { value: 'balanced', label: 'Balanced' }]}
        onChange={(v) => setTweak('accent', v)}
      />
      <TweakToggle label="Film grain" value={t.grain} onChange={(v) => setTweak('grain', v)} />
      <TweakSection label="Motion" />
      <TweakSelect
        label="Intensity"
        value={t.motion}
        options={[
          { value: 'off', label: 'Off' },
          { value: 'restrained', label: 'Restrained' },
          { value: 'cinematic', label: 'Cinematic' },
          { value: 'maximal', label: 'Maximal' },
        ]}
        onChange={(v) => setTweak('motion', v)}
      />
    </TweaksPanel>
  );
}

(function mountTweaks() {
  const el = document.getElementById('tweaks-root');
  if (!el) return;
  ReactDOM.createRoot(el).render(<StudioTweaks />);
})();
