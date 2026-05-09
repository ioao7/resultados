// PERFORMANCE â Scenes 4-5: VO2 alarm, OPRM1 finding

// SCENE 4: VO2 MAX ALERT 18-26s
// Major finding: VO2 max improvement only 19.6%
function PerfSceneVO2() {
  return (
    <Sprite start={18} end={26}>
      {({ localTime, duration }) => {
        const lt = localTime;
        const exit = lt > duration-0.5 ? 1-clamp((lt-(duration-0.5))/0.5,0,1) : 1;
        const headerOp = clamp(lt/0.5, 0, 1);
        const headerTy = (1-Easing.easeOutCubic(clamp(lt/0.7,0,1)))*16;
        const numProg = Easing.easeOutCubic(clamp((lt-0.8)/1.6, 0, 1));
        const num = 19.6 * numProg;
        const decisionOp = clamp((lt-2.6)/0.6, 0, 1);

        return (
          <div style={{ position: 'absolute', inset: 0, background: BLUE_900, opacity: exit }}>
            <HelixBg opacity={0.10}/>
            <div style={{ position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse at 75% 50%, rgba(200,54,74,0.35) 0%, transparent 65%)' }}/>

            <div style={{ position: 'absolute', left: 120, top: 100, opacity: headerOp, transform: `translateY(${headerTy}px)`,
              fontSize: 18, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, color: '#ff8a9c' }}>
              Hallazgo crÃ­tico Â· 03
            </div>

            <div style={{ position: 'absolute', left: 120, top: 150, opacity: headerOp, transform: `translateY(${headerTy}px)`,
              fontFamily: 'Helvetica Neue, Inter', fontWeight: 900, fontSize: 76, color: WHITE, letterSpacing: '-0.025em', lineHeight: 1 }}>
              Tu VOâ mÃ¡x<br/>
              <span style={{ color: '#ff8a9c' }}>tiene un techo bajo.</span>
            </div>

            {/* Big number */}
            <div style={{ position: 'absolute', right: 160, top: 280, textAlign: 'right',
              opacity: clamp((lt-0.6)/0.6, 0, 1) }}>
              <div style={{ fontSize: 13, letterSpacing: '0.18em', fontWeight: 700, color: '#ff8a9c', textTransform: 'uppercase', marginBottom: 8 }}>
                Capacidad de mejora
              </div>
              <div style={{ fontFamily: 'Helvetica Neue, Inter', fontWeight: 900, fontSize: 320, color: WHITE,
                letterSpacing: '-0.06em', lineHeight: 0.9, textShadow: '0 0 60px rgba(255,138,156,0.5)' }}>
                {num.toFixed(1)}<span style={{ fontSize: 120, color: '#ff8a9c' }}>%</span>
              </div>
            </div>

            <div style={{ position: 'absolute', left: 120, top: 460, width: 720, opacity: clamp((lt-1.2)/0.6, 0, 1),
              fontSize: 22, color: 'rgba(255,255,255,0.85)', lineHeight: 1.55 }}>
              <div style={{ fontSize: 26, fontWeight: 700, color: WHITE, marginBottom: 14 }}>
                Â¿QuÃ© significa?
              </div>
              Aunque entrenes resistencia, tu mejora serÃ¡ <strong style={{ color: '#ff8a9c' }}>mÃ¡s lenta y limitada</strong> que en la media.
              Tu cuerpo se adapta â pero no rÃ¡pido.
            </div>

            <div style={{ position: 'absolute', left: 120, top: 660, opacity: clamp((lt-1.6)/0.6, 0, 1), display: 'flex', gap: 12, flexWrap: 'wrap', maxWidth: 760 }}>
              {['ADRB2', 'AMPD1', 'GSTP1', 'HFE', 'HIF1A', 'PPARD', 'PPARGC1A', 'ZIC4'].map((g, i) => (
                <div key={i} style={{
                  padding: '10px 18px', background: 'rgba(255,255,255,0.06)', color: WHITE,
                  border: '1px solid rgba(255,138,156,0.4)', borderRadius: 999,
                  fontSize: 16, fontWeight: 700, fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.08em',
                  opacity: clamp((lt-1.6 - i*0.08)/0.4, 0, 1)
                }}>{g}</div>
              ))}
            </div>

            {/* Decision callout */}
            <div style={{ position: 'absolute', right: 160, bottom: 100, width: 580,
              background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)',
              border: '1px solid rgba(216,164,221,0.35)', borderRadius: 22, padding: 28,
              opacity: decisionOp, transform: `translateY(${(1-decisionOp)*20}px)` }}>
              <div style={{ fontSize: 13, letterSpacing: '0.18em', fontWeight: 700, color: '#d8a4dd', textTransform: 'uppercase', marginBottom: 10 }}>
                La estrategia
              </div>
              <div style={{ fontSize: 26, fontWeight: 700, color: WHITE, lineHeight: 1.25, letterSpacing: '-0.01em' }}>
                Constancia &gt; intensidad.<br/>
                <span style={{ color: '#d8a4dd' }}>ProgresiÃ³n paciente, sin frustrarse.</span>
              </div>
            </div>
          </div>
        );
      }}
    </Sprite>
  );
}

// SCENE 5: OPRM1 â PercepciÃ³n de esfuerzo 26-32s
// "Tu cerebro siente el ejercicio mÃ¡s duro de lo que es"
function PerfSceneOPRM1() {
  return (
    <Sprite start={26} end={32}>
      {({ localTime, duration }) => {
        const lt = localTime;
        const exit = lt > duration-0.4 ? 1-clamp((lt-(duration-0.4))/0.4,0,1) : 1;
        const headerOp = clamp(lt/0.5, 0, 1);
        const realOp = clamp((lt-0.7)/0.6, 0, 1);
        const percOp = clamp((lt-1.6)/0.6, 0, 1);
        // Pulsing brain
        const pulse = 1 + 0.04*Math.sin(lt*3);

        return (
          <div style={{ position: 'absolute', inset: 0, background: WHITE, opacity: exit }}>
            <HelixBg opacity={0.04}/>

            <div style={{ position: 'absolute', left: 120, top: 90, opacity: headerOp,
              fontSize: 18, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, color: PURPLE_700 }}>
              Insight clave Â· 04
            </div>

            <div style={{ position: 'absolute', left: 120, top: 135, opacity: headerOp,
              fontFamily: 'Helvetica Neue, Inter', fontWeight: 900, fontSize: 70, color: BLUE_900, letterSpacing: '-0.025em', lineHeight: 1 }}>
              Tu cerebro<br/>
              <span style={{ background: GRAD_BRAND, WebkitBackgroundClip:'text', backgroundClip:'text', color:'transparent' }}>amplifica el esfuerzo.</span>
            </div>

            {/* Two bars: real vs perceived */}
            <div style={{ position: 'absolute', left: 120, top: 420, width: 1100 }}>
              <div style={{ fontSize: 13, letterSpacing: '0.14em', fontWeight: 700, color: INK_500, textTransform: 'uppercase', marginBottom: 14 }}>
                Esfuerzo real
              </div>
              <div style={{ height: 44, background: INK_100, borderRadius: 22, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${50*realOp}%`, background: BLUE_900, borderRadius: 22,
                  display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 22, color: WHITE, fontWeight: 700, fontSize: 18 }}>
                  {realOp > 0.6 ? '50%' : ''}
                </div>
              </div>

              <div style={{ marginTop: 36, fontSize: 13, letterSpacing: '0.14em', fontWeight: 700, color: PURPLE_700, textTransform: 'uppercase', marginBottom: 14 }}>
                Esfuerzo percibido (OPRM1 AG)
              </div>
              <div style={{ height: 44, background: INK_100, borderRadius: 22, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${85*percOp}%`,
                  background: 'linear-gradient(90deg, #8a2d92 0%, #c8364a 100%)', borderRadius: 22,
                  display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 22, color: WHITE, fontWeight: 700, fontSize: 18,
                  boxShadow: percOp>0.5 ? '0 0 28px rgba(200,54,74,0.45)' : 'none' }}>
                  {percOp > 0.6 ? '85%' : ''}
                </div>
              </div>
            </div>

            <div style={{ position: 'absolute', left: 120, top: 720, width: 900, opacity: clamp((lt-2.6)/0.5, 0, 1),
              fontSize: 26, color: INK_500, lineHeight: 1.5, fontStyle: 'italic' }}>
              Â«No es falta de capacidad, es <strong style={{ color: BLUE_900, fontStyle: 'normal' }}>percepciÃ³n del dolor</strong>.<br/>
              Por eso entrenar te cuesta mÃ¡s â pero responder, sÃ­ responde.Â»
            </div>

            {/* Right brain callout */}
            <div style={{ position: 'absolute', right: 140, top: 170, width: 480, padding: 28,
              background: GRAD_BRAND, color: WHITE, borderRadius: 22,
              opacity: clamp((lt-0.5)/0.6, 0, 1),
              transform: `scale(${pulse})`, transformOrigin: 'center',
              boxShadow: '0 24px 60px rgba(138,45,146,0.35)' }}>
              <div style={{ fontSize: 13, letterSpacing: '0.18em', fontWeight: 700, color: '#d8a4dd', textTransform: 'uppercase', marginBottom: 10 }}>
                DecisiÃ³n clÃ­nica
              </div>
              <div style={{ fontSize: 28, fontWeight: 900, lineHeight: 1.2, letterSpacing: '-0.01em' }}>
                EducaciÃ³n + progresiÃ³n gradual.
              </div>
              <div style={{ marginTop: 14, fontSize: 17, color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
                Reducir la sensaciÃ³n de esfuerzo previene el abandono â el principal riesgo a 5 aÃ±os.
              </div>
            </div>
          </div>
        );
      }}
    </Sprite>
  );
}

Object.assign(window, { PerfSceneVO2, PerfSceneOPRM1 });
