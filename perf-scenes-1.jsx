// PERFORMANCE V1 — Scenes 1-3: Intro, Patient, Profile

// SCENE 1: INTRO 0-4.5s
function PerfSceneIntro() {
  return (
    <Sprite start={0} end={4.5}>
      {({ localTime, duration }) => {
        const lt = localTime;
        const logoOp = clamp(lt/0.7, 0, 1);
        const logoScale = 0.85 + 0.15*Easing.easeOutCubic(clamp(lt/0.9, 0, 1));
        const titleOp = clamp((lt-0.7)/0.6, 0, 1);
        const subOp = clamp((lt-1.5)/0.6, 0, 1);
        const eyebrowOp = clamp((lt-2.4)/0.5, 0, 1);
        const exit = lt > duration-0.5 ? 1-clamp((lt-(duration-0.5))/0.5,0,1) : 1;
        const ty = (1-clamp((lt-0.7)/0.6,0,1))*24;

        return (
          <div style={{ position: 'absolute', inset: 0, background: GRAD_BRAND, opacity: exit }}>
            <HelixBg opacity={0.12}/>
            {/* speed lines */}
            <svg width="1920" height="1080" style={{ position: 'absolute', inset: 0, opacity: 0.18 }}>
              {Array.from({length: 18}).map((_,i)=>{
                const y = 80 + i*55;
                const offset = (lt*180 + i*60) % 1920;
                return <line key={i} x1={offset-300} y1={y} x2={offset} y2={y} stroke="#d8a4dd" strokeWidth="2"/>
              })}
            </svg>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, transparent 60%)' }}/>

            <div style={{ position: 'absolute', left: '50%', top: '36%', transform: `translate(-50%, -50%) scale(${logoScale})`, opacity: logoOp }}>
              <img src={(window.__resources && window.__resources.logoWhite) || "assets/logo-horizontal-white.png"} style={{ height: 78, filter: 'drop-shadow(0 6px 24px rgba(0,0,0,0.25))' }}/>
            </div>

            <div style={{ position: 'absolute', left: 0, right: 0, top: '44%', textAlign: 'center', color: WHITE,
              transform: `translateY(${ty}px)`, opacity: titleOp,
              fontFamily: 'Helvetica Neue, Inter', fontWeight: 900, fontSize: 110, letterSpacing: '-0.03em', lineHeight: 1.0 }}>
              <span style={{ background: 'linear-gradient(90deg, #ffffff 0%, #d8a4dd 100%)', WebkitBackgroundClip: 'text', backgroundClip:'text', color:'transparent' }}>
                Gen Be Performance
              </span>
            </div>

            <div style={{ position: 'absolute', left: 0, right: 0, top: '64%', textAlign: 'center', opacity: titleOp,
              color: WHITE, fontFamily: 'Helvetica Neue, Inter', fontWeight: 700, fontSize: 56, letterSpacing: '-0.02em' }}>
              Tu cuerpo, optimizado por tu ADN.
            </div>

            <div style={{ position: 'absolute', left: 0, right: 0, top: '76%', textAlign: 'center',
              color: 'rgba(255,255,255,0.78)', opacity: subOp,
              fontWeight: 400, fontSize: 24, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Análisis clínico–fisiopatológico deportivo
            </div>

            <div style={{ position: 'absolute', left: 0, right: 0, bottom: 70, textAlign: 'center',
              opacity: eyebrowOp, color: 'rgba(255,255,255,0.55)', fontSize: 16, letterSpacing: '0.2em' }}>
              · INFORME · SPR01140AA · 28 · 04 · 2026 ·
            </div>
          </div>
        );
      }}
    </Sprite>
  );
}

// SCENE 2: PATIENT 4.5-9.5s
function PerfScenePatient() {
  const fields = [
    { l: 'PACIENTE', v: 'Juan Francisco', s: 'Lopez Cazon', d: 0.5 },
    { l: 'EDAD · GÉNERO', v: '39 años · Hombre', d: 0.75 },
    { l: 'CÓDIGO · MUESTRA', v: 'SPR01140AA', s: 'Hisopo bucal · NGS', d: 1.0 },
    { l: 'MÉDICO RESPONSABLE', v: 'Dr. Eulogio M. Vera Vivas', s: 'Director Médico — Gen Be Health', d: 1.25 },
    { l: 'FECHA INFORME', v: '28 · 04 · 2026', d: 1.5 },
  ];

  return (
    <Sprite start={4.5} end={9.5}>
      {({ localTime, duration }) => {
        const lt = localTime;
        const exit = lt > duration-0.5 ? 1-clamp((lt-(duration-0.5))/0.5,0,1) : 1;
        const headerOp = clamp(lt/0.5, 0, 1);
        const headerTy = (1-Easing.easeOutCubic(clamp(lt/0.7,0,1)))*16;

        return (
          <div style={{ position: 'absolute', inset: 0, background: WHITE, opacity: exit }}>
            <HelixBg opacity={0.04}/>
            <div style={{ position: 'absolute', left: 120, top: 110, opacity: headerOp, transform: `translateY(${headerTy}px)`,
              fontSize: 18, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, color: PURPLE_700 }}>
              Identificación · 01
            </div>

            <div style={{ position: 'absolute', left: 120, top: 160, opacity: headerOp, transform: `translateY(${headerTy}px)`,
              fontFamily: 'Helvetica Neue, Inter', fontWeight: 900, fontSize: 96, color: BLUE_900, letterSpacing: '-0.025em', lineHeight: 1 }}>
              Tu rendimiento,<br/>
              <span style={{ background: GRAD_BRAND, WebkitBackgroundClip:'text', backgroundClip:'text', color:'transparent' }}>en tu ADN.</span>
            </div>

            <div style={{ position: 'absolute', left: 120, top: 410, width: 720,
              opacity: clamp((lt-0.4)/0.6, 0, 1),
              fontSize: 26, color: INK_500, lineHeight: 1.5 }}>
              Hemos analizado tus genes deportivos para definir cómo
              entrenar, cómo recuperar y dónde está tu <strong style={{color: BLUE_900}}>verdadero potencial físico</strong>.
            </div>

            <div style={{ position: 'absolute', right: 120, top: 240, width: 600, display: 'flex', flexDirection: 'column', gap: 26 }}>
              {fields.map((f, i) => {
                const op = clamp((lt-f.d)/0.45, 0, 1);
                const tx = (1-Easing.easeOutCubic(op))*32;
                return (
                  <div key={i} style={{ opacity: op, transform: `translateX(${tx}px)`, paddingBottom: 18, borderBottom: `1px solid ${INK_200}` }}>
                    <div style={{ fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, color: PURPLE_700, marginBottom: 8 }}>{f.l}</div>
                    <div style={{ fontSize: 30, fontWeight: 700, color: BLUE_900, letterSpacing: '-0.015em' }}>{f.v}</div>
                    {f.s && <div style={{ fontSize: 18, color: INK_500, marginTop: 4 }}>{f.s}</div>}
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

// SCENE 3: PROFILE — POTENCIA vs RESISTENCIA 9.5-18s
// Two big radial gauges + verdict "PERFIL MIXTO"
function PerfSceneProfile() {
  return (
    <Sprite start={9.5} end={18}>
      {({ localTime, duration }) => {
        const lt = localTime;
        const exit = lt > duration-0.5 ? 1-clamp((lt-(duration-0.5))/0.5,0,1) : 1;
        const headerOp = clamp(lt/0.5, 0, 1);
        const headerTy = (1-Easing.easeOutCubic(clamp(lt/0.7,0,1)))*16;
        const gaugeProg = Easing.easeOutCubic(clamp((lt-0.6)/2.0, 0, 1));
        const verdictOp = clamp((lt-3.2)/0.6, 0, 1);
        const verdictTy = (1-Easing.easeOutCubic(verdictOp))*40;

        return (
          <div style={{ position: 'absolute', inset: 0, background: BLUE_50, opacity: exit }}>
            <HelixBg opacity={0.04}/>

            <div style={{ position: 'absolute', left: 120, top: 90, opacity: headerOp, transform: `translateY(${headerTy}px)`,
              fontSize: 18, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, color: PURPLE_700 }}>
              Tu perfil deportivo · 02
            </div>

            <div style={{ position: 'absolute', left: 120, top: 135, opacity: headerOp, transform: `translateY(${headerTy}px)`,
              fontFamily: 'Helvetica Neue, Inter', fontWeight: 900, fontSize: 76, color: BLUE_900, letterSpacing: '-0.025em', lineHeight: 1 }}>
              Potencia <span style={{ color: PURPLE_700 }}>vs.</span> Resistencia
            </div>

            <div style={{ position: 'absolute', left: 240, top: 360 }}>
              <RadialGauge value={55.8 * gaugeProg} label="POTENCIA" sub="Anaeróbico" color={'#c8364a'}/>
            </div>
            <div style={{ position: 'absolute', right: 240, top: 360 }}>
              <RadialGauge value={55.0 * gaugeProg} label="RESISTENCIA" sub="Aeróbico" color={'#3a5e89'}/>
            </div>

            {/* Center verdict */}
            <div style={{ position: 'absolute', left: '50%', top: 510, transform: `translate(-50%, ${verdictTy}px)`,
              opacity: verdictOp, textAlign: 'center' }}>
              <div style={{ fontSize: 13, letterSpacing: '0.18em', fontWeight: 700, color: PURPLE_700, textTransform: 'uppercase' }}>Veredicto</div>
              <div style={{ marginTop: 12, padding: '20px 36px', background: GRAD_BRAND, color: WHITE,
                borderRadius: 999, fontFamily: 'Helvetica Neue, Inter', fontWeight: 900, fontSize: 38, letterSpacing: '-0.01em',
                boxShadow: '0 24px 60px rgba(138,45,146,0.38)', whiteSpace: 'nowrap' }}>
                PERFIL HÍBRIDO
              </div>
            </div>

            <div style={{ position: 'absolute', left: 120, right: 120, bottom: 100, textAlign: 'center',
              opacity: clamp((lt-3.6)/0.6, 0, 1), fontSize: 26, color: INK_500, lineHeight: 1.5, fontStyle: 'italic' }}>
              «Ni puramente fuerza, ni puramente resistencia.<br/>
              <strong style={{color: BLUE_900, fontStyle: 'normal'}}>Eres adaptable</strong> — pero sólo con un plan estructurado.»
            </div>
          </div>
        );
      }}
    </Sprite>
  );
}

function RadialGauge({ value, label, sub, color, size = 320 }) {
  const cx = size/2, cy = size/2, r = size/2 - 24, stroke = 22;
  const C = 2*Math.PI*r;
  const v = clamp(value, 0, 100);
  const dash = (v/100)*C;

  return (
    <div style={{ width: size, height: size + 90, textAlign: 'center' }}>
      <svg width={size} height={size}>
        <circle cx={cx} cy={cy} r={r} stroke={INK_200} strokeWidth={stroke} fill="none"/>
        <circle cx={cx} cy={cy} r={r} stroke={color} strokeWidth={stroke} fill="none"
          strokeDasharray={`${dash} ${C}`} strokeDashoffset={C/4}
          transform={`rotate(-90 ${cx} ${cy})`} strokeLinecap="round"
          style={{ filter: `drop-shadow(0 0 12px ${color}66)` }}/>
        <text x={cx} y={cy-4} textAnchor="middle"
          fontFamily="Helvetica Neue, Inter" fontWeight="900" fontSize="68" fill={BLUE_900} letterSpacing="-0.04em">
          {v.toFixed(1)}
        </text>
        <text x={cx} y={cy+34} textAnchor="middle"
          fontFamily="Helvetica Neue, Inter" fontWeight="700" fontSize="20" fill={INK_500}>
          %
        </text>
      </svg>
      <div style={{ marginTop: -6, fontSize: 22, fontWeight: 900, color: BLUE_900, letterSpacing: '0.08em' }}>{label}</div>
      <div style={{ fontSize: 14, color: INK_500, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: 4 }}>{sub}</div>
    </div>
  );
}

Object.assign(window, { PerfSceneIntro, PerfScenePatient, PerfSceneProfile, RadialGauge });
