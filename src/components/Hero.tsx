import { Monogram } from './Navbar'

export default function Hero() {
  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: '640px', overflow: 'hidden', background: '#1e2129' }}>
      <img
        src="/hero.png"
        alt=""
        aria-hidden
        className="ken-burns"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(30,33,41,0.95) 0%, rgba(30,33,41,0.80) 52%, rgba(30,33,41,0.45) 100%)',
      }} />

      <div className="max-w-6xl mx-auto px-6" style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: '600px' }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <div style={{ width: '28px', height: '1px', background: '#7a2d3a' }} />
            <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: 'rgba(246,244,241,0.65)', textTransform: 'uppercase' }}>
              Avocat au Barreau de Bordeaux
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.6rem', margin: '0 0 1.8rem' }}>
            <Monogram size={108} color="rgba(246,244,241,0.80)" strokeWidth={1.0} />
            <h1 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
              fontWeight: 400, color: '#f6f4f1',
              lineHeight: 1.18, margin: 0,
            }}>
              Tommy<br />Kitenge
            </h1>
          </div>

          <p style={{ fontSize: 'clamp(0.82rem, 1.4vw, 0.95rem)', color: 'rgba(246,244,241,0.65)', lineHeight: 1.78, margin: '0 0 0.6rem' }}>
            Droit des affaires · Droit pénal
          </p>
          <p style={{ fontSize: 'clamp(0.78rem, 1.2vw, 0.88rem)', color: 'rgba(246,244,241,0.42)', lineHeight: 1.78, margin: '0 0 2.8rem' }}>
            Conseil et contentieux · FR / EN
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="tel:+33767552218" style={{
              display: 'inline-flex', alignItems: 'center',
              background: '#7a2d3a', color: '#f6f4f1',
              padding: '1rem 2.4rem', textDecoration: 'none',
              fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            }}>
              Appeler
            </a>
            <a href="mailto:tk@kitenge-avocat.fr" style={{
              display: 'inline-flex', alignItems: 'center',
              border: '1px solid rgba(246,244,241,0.30)', color: 'rgba(246,244,241,0.75)',
              padding: '1rem 2.4rem', textDecoration: 'none',
              fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            }}>
              Écrire
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
