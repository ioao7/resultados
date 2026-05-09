// PERFORMANCE — Scenes 6-8: Strengths/Limits, Plan, Closing

// SCENE 6: FORTALEZAS vs LIMITACIONES 32-40s
function PerfSceneStrengthsLimits() {
  const strengths = [
    { t: 'Fibras musculares rápidas', g: 'ACTN3 · CC' },
    { t: 'Soporte mitocondrial', g: 'LRPPRC · AA' },
    { t: 'Eficiencia cardiovascular', g: 'ACE · AA' },
    { t: 'Hidratación celular', g: 'AQP1 · CC' },
    { t: 'Tejido conectivo resistente', g: 'COL5A1 · TT' },
    { t: 'Tolerancia inflamatoria', g: 'IL1B · TNF-α' },
  ];
  const limits = [
    { t: 'Mejora limitada de VO₂ máx', g: 'PPARD · ZIC4' },
    { t: 'Estrés oxidativo elevado', g: 'GSTP1 · AA' },
    { t: 'Metabolismo lipídico bajo', g: 'PPARG · CC' },
    { t: 'Percepción amplificada del esfuerzo', g: 'OPRM1 · AG' },
    { t: 'HDL no responde a ejercicio', g: 'LIPC · CC' },
    { t: 'Hierro sin ventaja', g: 'HFE · GG' },
  ];

  return (
    <Sprite start={32} end={40}>
      {({ localTime, duration }) => {
        const lt = localTime;
        const exit = lt > duration-0.5 ? 1-clamp((lt-(duration-0.5))/0.5,0,1) : 1;
        const headerOp = clamp(lt/0.5, 0, 1);
        const headerTy = (1-Easing.easeOutCubic(clamp(lt/0.7,0,1)))*16;

        const renderCol = (items, baseStart, color, sign, title, sub) => (
          <div>
            <div style={{ fontSize: 16, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, color, marginBottom: 8 }}>
              {sign} {title}
            </div>
            <div style={{ fontSize: 36, fontWeight: 900, color: BLUE_900, marginBottom: 28, letterSpacing: '-0.02em' }}>{sub}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {items.map((it, i) => {
                const start = baseStart + i*0.14;
                const op = clamp((lt-start)/0.4, 0, 1);
                const tx = (1-Easing.easeOutCubic(op))*30 * (sign==='✕' ? 1 : -1);
                return (
                  <div key={i} style={{ opacity: op, transform: `translateX(${tx}px)`,
                    background: WHITE, border: `1px solid ${INK_200}`, borderLeft: `4px solid ${color}`,
                    borderRadius: 12, padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
                    <div style={{ fontSize: 19, fontWeight: 700, color: BLUE_900, letterSpacing: '-0.005em' }}>{it.t}</div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: INK_500, fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>{it.g}</div>
                  </div>
                );
              })}
            </div>
          </div>
        );

        return (
          <div style={{ position: 'absolute', inset: 0, background: BLUE_50, opacity: exit }}>
            <div style={{ position: 'absolute', left: 120, top: 90, opacity: headerOp, transform: `translateY(${headerTy}px)`,
              fontSize: 18, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, color: PURPLE_700 }}>
              Tu mapa genético deportivo · 05
            </div>

            <div style={{ position: 'absolute', left: 120, top: 135, opacity: headerOp, transform: `translateY(${headerTy}px)`,
              fontFamily: 'Helvetica Neue, Inter', fontWeight: 900, fontSize: 70, color: BLUE_900, letterSpacing: '-0.025em', lineHeight: 1 }}>
              Lo que está <span style={{color: '#1a8f6b'}}>a tu favor.</span><br/>
              Y lo que <span style={{color: '#c8364a'}}>tienes que vigilar.</span>
            </div>

            <div style={{ position: 'absolute', left: 120, right: 120, top: 360,
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }}>
              {renderCol(strengths, 0.5, '#1a8f6b', '✓', 'FORTALEZAS', 'Tu ventaja')}
              {renderCol(limits, 0.5, '#c8364a', '✕', 'LIMITACIONES', 'A intervenir')}
            </div>
          </div>
        );
      }}
    </Sprite>
  );
}

// SCENE 7: PLAN — 4 PILARES 40-48s
function PerfScenePlan() {
  const pillars = [
    { n: '01', t: 'Fuerza\nestructurada', sub: 'HIIT · sprint · pesas',
      copy: 'Tu ventaja: ACTN3 favorable. Aprovecha las fibras tipo II.', tone: 'main' },
    { n: '02', t: 'Aeróbico\nzonas 2 y 3', sub: 'Constancia &gt; intensidad',
      copy: 'VO₂ máx mejora lento. Sesiones largas, sin frustrarse.', tone: 'second' },
    { n: '03', t: 'Recuperación\nactiva', sub: 'Antioxidantes · descanso',
      copy: 'GSTP1 te hace vulnerable al estrés oxidativo. Periodiza.', tone: 'second' },
    { n: '04', t: 'Educación\ny adherencia', sub: 'Combatir la percepción',
      copy: 'OPRM1 amplifica el esfuerzo. Plan claro = no abandono.', tone: 'second' },
  ];

  return (
    <Sprite start={40} end={48}>
      {({ localTime, duration }) => {
        const lt = localTime;
        const exit = lt > duration-0.5 ? 1-clamp((lt-(duration-0.5))/0.5,0,1) : 1;
        const headerOp = clamp(lt/0.5, 0, 1);
        const headerTy = (1-Easing.easeOutCubic(clamp(lt/0.7,0,1)))*16;

        return (
          <div style={{ position: 'absolute', inset: 0, background: WHITE, opacity: exit }}>
            <HelixBg opacity={0.04}/>

            <div style={{ position: 'absolute', left: 120, top: 90, opacity: headerOp, transform: `translateY(${headerTy}px)`,
              fontSize: 18, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, color: PURPLE_700 }}>
              Tu plan · 06
            </div>

            <div style={{ position: 'absolute', left: 120, top: 135, opacity: headerOp, transform: `translateY(${headerTy}px)`,
              fontFamily: 'Helvetica Neue, Inter', fontWeight: 900, fontSize: 76, color: BLUE_900, letterSpacing: '-0.025em', lineHeight: 1 }}>
              Cuatro pilares,<br/>
              <span style={{ background: GRAD_BRAND, WebkitBackgroundClip:'text', backgroundClip:'text', color:'transparent' }}>
                un plan a tu medida.
              </span>
            </div>

            <div style={{ position: 'absolute', left: 120, right: 120, top: 360,
              display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
              {pillars.map((p, i) => {
                const start = 0.5 + i*0.22;
                const op = clamp((lt-start)/0.5, 0, 1);
                const ty = (1-Easing.easeOutCubic(op))*30;
                const main = p.tone === 'main';
                return (
                  <div key={i} style={{ opacity: op, transform: `translateY(${ty}px)`,
                    background: main ? GRAD_BRAND : WHITE,
                    color: main ? WHITE : BLUE_900,
                    borderRadius: 22, padding: 32,
                    border: main ? 'none' : `1px solid ${INK_200}`,
                    boxShadow: main ? '0 24px 60px rgba(138,45,146,0.35)' : '0 8px 24px rgba(20,42,71,0.08)',
                    minHeight: 400, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontSize: 56, fontWeight: 900, color: main ? '#d8a4dd' : PURPLE_700, letterSpacing: '-0.04em', lineHeight: 1, fontFamily: 'Helvetica Neue, Inter' }}>{p.n}</div>
                      <div style={{ fontSize: 30, fontWeight: 900, marginTop: 18, letterSpacing: '-0.02em', lineHeight: 1.1, whiteSpace: 'pre-line' }}>{p.t}</div>
                      <div dangerouslySetInnerHTML={{__html: p.sub}} style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
                        color: main ? '#d8a4dd' : PURPLE_700, marginTop: 14 }}/>
                    </div>
                    <div style={{ fontSize: 16, color: main ? 'rgba(255,255,255,0.85)' : INK_500, lineHeight: 1.5 }}>{p.copy}</div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      }}
    </Sprite>
  );
}

// SCENE 8: CLOSING 48-56s
function PerfSceneClosing() {
  return (
    <Sprite start={48} end={56}>
      {({ localTime, duration }) => {
        const lt = localTime;
        const op1 = clamp(lt/0.6, 0, 1);
        const ty1 = (1-Easing.easeOutCubic(op1))*30;
        const op2 = clamp((lt-1.0)/0.7, 0, 1);
        const op3 = clamp((lt-2.4)/0.7, 0, 1);
        const ty3 = (1-Easing.easeOutCubic(op3))*20;
        const exit = lt > duration-0.4 ? 1-clamp((lt-(duration-0.4))/0.4, 0, 1) : 1;

        return (
          <div style={{ position: 'absolute', inset: 0, background: GRAD_BRAND, opacity: exit }}>
            <HelixBg opacity={0.12}/>
            <div style={{ position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.10) 0%, transparent 70%)' }}/>

            <div style={{ position: 'absolute', left: 0, right: 0, top: 220, textAlign: 'center',
              opacity: op1, transform: `translateY(${ty1}px)`,
              fontSize: 18, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, color: '#d8a4dd' }}>
              Conclusión
            </div>

            <div style={{ position: 'absolute', left: 0, right: 0, top: 290, textAlign: 'center',
              opacity: op1, transform: `translateY(${ty1}px)`, padding: '0 200px',
              fontFamily: 'Helvetica Neue, Inter', fontWeight: 700, fontSize: 56,
              color: WHITE, letterSpacing: '-0.02em', lineHeight: 1.15, fontStyle: 'italic' }}>
              «Tu cuerpo no se entrena<br/>
              con el plan de otro.<br/>
              Se entrena con <span style={{
                background: 'linear-gradient(90deg, #ffffff 0%, #d8a4dd 100%)',
                WebkitBackgroundClip: 'text', backgroundClip:'text', color:'transparent', fontStyle: 'normal',
              }}>el tuyo</span>.»
            </div>

            <div style={{ position: 'absolute', left: 0, right: 0, top: 700, textAlign: 'center',
              opacity: op2, color: 'rgba(255,255,255,0.7)', fontSize: 22, lineHeight: 1.5, padding: '0 320px' }}>
              Constancia, periodización y recuperación activa<br/>
              determinarán tu rendimiento a 6, 12 y 24 meses.
            </div>

            <div style={{ position: 'absolute', left: 0, right: 0, bottom: 130, textAlign: 'center',
              opacity: op3, transform: `translateY(${ty3}px)` }}>
              <img src={(window.__resources && window.__resources.logoWhite) || "assets/logo-horizontal-white.png"} style={{ height: 56, opacity: 0.95 }}/>
              <div style={{ marginTop: 22, fontSize: 16, color: 'rgba(255,255,255,0.65)', letterSpacing: '0.02em', fontWeight: 500 }}>
                Elaborado por <strong style={{color: WHITE}}>Dr. Eulogio Marcelo Vera Vivas</strong>
              </div>
              <div style={{ marginTop: 4, fontSize: 14, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                Director Médico — Gen Be Health
              </div>
            </div>
          </div>
        );
      }}
    </Sprite>
  );
}

Object.assign(window, { PerfSceneStrengthsLimits, PerfScenePlan, PerfSceneClosing });
