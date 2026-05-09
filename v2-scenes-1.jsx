// V2 Clinical scenes â Intro + Patient + Core findings

const BLUE_900='#142a47', BLUE_800='#1c3a5f', BLUE_50='#f1f4f9', PURPLE_700='#8a2d92',
      PURPLE_50='#faf2fb', INK_500='#5a6478', INK_300='#a0a8b8', INK_200='#d2d7e0',
      INK_100='#ebeef3', INK_50='#f6f7fa', WHITE='#ffffff';
const GRAD_BRAND='linear-gradient(135deg, #142a47 0%, #8a2d92 100%)';

function HelixBg({ opacity = 0.06 }) {
  const t = useTime();
  return (
    <svg width="1920" height="1080" style={{ position: 'absolute', inset: 0, opacity }}>
      <defs>
        <linearGradient id="hgV2" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#142a47"/><stop offset="100%" stopColor="#8a2d92"/>
        </linearGradient>
      </defs>
      {Array.from({length: 14}).map((_,i)=>{
        const x = 80 + i*130, phase = i*0.6 + t*0.5;
        return (
          <g key={i} stroke="url(#hgV2)" strokeWidth="2" fill="none">
            <path d={`M ${x} 0 Q ${x+40*Math.sin(phase)} 540 ${x} 1080`} opacity="0.7"/>
            <path d={`M ${x} 0 Q ${x-40*Math.sin(phase)} 540 ${x} 1080`} opacity="0.5"/>
          </g>
        );
      })}
    </svg>
  );
}

// ============ SCENE 1: INTRO 0-4.5s ============
function SceneIntro() {
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
        const sty = (1-clamp((lt-1.5)/0.6,0,1))*18;

        return (
          <div style={{ position: 'absolute', inset: 0, background: GRAD_BRAND, opacity: exit }}>
            <HelixBg opacity={0.12}/>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, transparent 60%)' }}/>

            <div style={{ position: 'absolute', left: '50%', top: '38%', transform: `translate(-50%, -50%) scale(${logoScale})`, opacity: logoOp }}>
              <img src={(window.__resources && window.__resources.logoWhite) || "assets/logo-horizontal-white.png"} style={{ height: 88, filter: 'drop-shadow(0 6px 24px rgba(0,0,0,0.25))' }}/>
            </div>

            <div style={{ position: 'absolute', left: 0, right: 0, top: '46%', textAlign: 'center', color: WHITE,
              transform: `translateY(${ty}px)`, opacity: titleOp,
              fontFamily: 'Helvetica Neue, Inter', fontWeight: 900, fontSize: 92, letterSpacing: '-0.025em', lineHeight: 1.05 }}>
              AnÃ¡lisis<br/>
              <span style={{ background: 'linear-gradient(90deg, #ffffff 0%, #d8a4dd 100%)', WebkitBackgroundClip: 'text', backgroundClip:'text', color:'transparent' }}>
                clÃ­nicoâfisiopatolÃ³gico
              </span>
            </div>

            <div style={{ position: 'absolute', left: 0, right: 0, top: '74%', textAlign: 'center',
              color: 'rgba(255,255,255,0.78)', transform: `translateY(${sty}px)`, opacity: subOp,
              fontFamily: 'Helvetica Neue, Inter', fontWeight: 400, fontSize: 26, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              GenÃ©tica traducida en decisiones clÃ­nicas
            </div>

            <div style={{ position: 'absolute', left: 0, right: 0, bottom: 70, textAlign: 'center',
              opacity: eyebrowOp, color: 'rgba(255,255,255,0.55)', fontSize: 16, letterSpacing: '0.2em' }}>
              Â· INFORME GEN BE BALANCE Â· NUT24648AA Â·
            </div>
          </div>
        );
      }}
    </Sprite>
  );
}

// ============ SCENE 2: PATIENT 4.5-9s ============
function ScenePatient() {
  const fields = [
    { l: 'PACIENTE', v: 'Juan Francisco', s: 'Lopez Cazon', d: 0.5 },
    { l: 'EDAD Â· GÃNERO', v: '39 aÃ±os Â· Hombre', d: 0.75 },
    { l: 'CÃDIGO Â· MUESTRA', v: 'NUT24648AA', s: 'Mucosa bucal Â· NGS', d: 1.0 },
    { l: 'MÃDICO RESPONSABLE', v: 'Dr. Eulogio M. Vera Vivas', s: 'Director MÃ©dico â Gen Be Health', d: 1.25 },
    { l: 'FECHA INFORME', v: '23 Â· 04 Â· 2026', d: 1.5 },
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
              IdentificaciÃ³n Â· 01
            </div>

            <div style={{ position: 'absolute', left: 120, top: 160, opacity: headerOp, transform: `translateY(${headerTy}px)`,
              fontFamily: 'Helvetica Neue, Inter', fontWeight: 900, fontSize: 96, color: BLUE_900, letterSpacing: '-0.025em', lineHeight: 1 }}>
              Hola,<br/>
              <span style={{ background: GRAD_BRAND, WebkitBackgroundClip:'text', backgroundClip:'text', color:'transparent' }}>Juan Francisco.</span>
            </div>

            <div style={{ position: 'absolute', left: 120, top: 380, width: 720,
              opacity: clamp((lt-0.4)/0.6, 0, 1),
              fontSize: 26, color: INK_500, lineHeight: 1.5 }}>
              Hemos traducido tu ADN en una <strong style={{color: BLUE_900}}>hoja de ruta clÃ­nica</strong>:
              fisiopatologÃ­a, decisiones y riesgos a 5 aÃ±os.
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

// ============ SCENE 3: DIAGNÃSTICO CENTRAL 9.5-17s ============
// "El nÃºcleo de tu informe": 6 hallazgos clave del informe final
function SceneDiagnosis() {
  const findings = [
    { n: '01', t: 'Vulnerabilidad metabÃ³lica\nalta a carbohidratos', tag: 'TCF7L2', tone: 'crit' },
    { n: '02', t: 'Baja eficiencia en\nmetabolismo de grasas', tag: 'PPARD Â· FADS1', tone: 'crit' },
    { n: '03', t: 'Eje hambreâsaciedad\ncomprometido', tag: 'LEP Â· LEPR', tone: 'warn' },
    { n: '04', t: 'Insulinorresistencia\nmedia-alta', tag: 'IRS1 Â· PPARG', tone: 'crit' },
    { n: '05', t: 'Riesgo cardiovascular\nelevado', tag: 'APOA5 Â· LDLR', tone: 'warn' },
    { n: '06', t: 'Alta respuesta\nal ejercicio', tag: 'PPARGC1A', tone: 'pos' },
  ];
  const toneColor = { crit: '#c8364a', warn: '#c98a14', pos: '#1a8f6b' };

  return (
    <Sprite start={9.5} end={17.5}>
      {({ localTime, duration }) => {
        const lt = localTime;
        const exit = lt > duration-0.5 ? 1-clamp((lt-(duration-0.5))/0.5,0,1) : 1;
        const headerOp = clamp(lt/0.5, 0, 1);
        const headerTy = (1-Easing.easeOutCubic(clamp(lt/0.7,0,1)))*16;

        return (
          <div style={{ position: 'absolute', inset: 0, background: BLUE_50, opacity: exit }}>
            <HelixBg opacity={0.05}/>

            <div style={{ position: 'absolute', left: 120, top: 90, opacity: headerOp, transform: `translateY(${headerTy}px)`,
              fontSize: 18, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, color: PURPLE_700 }}>
              Tu diagnÃ³stico Â· 02
            </div>

            <div style={{ position: 'absolute', left: 120, top: 135, opacity: headerOp, transform: `translateY(${headerTy}px)`,
              fontFamily: 'Helvetica Neue, Inter', fontWeight: 900, fontSize: 76, color: BLUE_900, letterSpacing: '-0.025em', lineHeight: 1 }}>
              Seis hallazgos<br/>
              <span style={{ background: GRAD_BRAND, WebkitBackgroundClip:'text', backgroundClip:'text', color:'transparent' }}>
                que explican tu cuerpo.
              </span>
            </div>

            <div style={{ position: 'absolute', left: 120, right: 120, top: 410,
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
              {findings.map((f, i) => {
                const start = 0.5 + i*0.22;
                const op = clamp((lt-start)/0.5, 0, 1);
                const ty = (1-Easing.easeOutCubic(op))*30;
                return (
                  <div key={i} style={{ opacity: op, transform: `translateY(${ty}px)`,
                    background: WHITE, borderRadius: 22, padding: 32,
                    border: `1px solid ${INK_200}`,
                    borderTop: `5px solid ${toneColor[f.tone]}`,
                    boxShadow: '0 8px 24px rgba(20,42,71,0.08)',
                    minHeight: 240, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontSize: 56, fontWeight: 900, color: toneColor[f.tone], letterSpacing: '-0.04em', lineHeight: 1, fontFamily: 'Helvetica Neue, Inter' }}>{f.n}</div>
                      <div style={{ fontSize: 28, fontWeight: 700, color: BLUE_900, marginTop: 16, letterSpacing: '-0.015em', lineHeight: 1.15, whiteSpace: 'pre-line' }}>{f.t}</div>
                    </div>
                    <div style={{ marginTop: 18, fontSize: 13, fontWeight: 700, letterSpacing: '0.14em', color: INK_500, fontFamily: 'JetBrains Mono, monospace' }}>{f.tag}</div>
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

Object.assign(window, { HelixBg, SceneIntro, ScenePatient, SceneDiagnosis,
  BLUE_900, BLUE_800, BLUE_50, PURPLE_700, PURPLE_50, INK_500, INK_300, INK_200, INK_100, INK_50, WHITE, GRAD_BRAND });
