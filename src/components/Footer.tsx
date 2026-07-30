import { Monogram } from './Navbar'

export default function Footer() {
  return (
    <footer style={{ background: '#1e2129', color: 'rgba(246,244,241,0.65)', padding: '4rem 0 2.5rem' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid-footer" style={{ gap: '2.5rem', marginBottom: '3.5rem' }}>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', marginBottom: '1.2rem' }}>
              <Monogram size={36} color="rgba(246,244,241,0.50)" strokeWidth={1.0} />
              <div>
                <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '0.88rem', color: 'rgba(246,244,241,0.80)', margin: 0 }}>Tommy Kitenge</p>
                <p style={{ fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(122,45,58,0.70)', margin: 0 }}>Avocat · Bordeaux</p>
              </div>
            </div>
            <p style={{ fontSize: '0.82rem', lineHeight: 1.78, color: 'rgba(246,244,241,0.42)', maxWidth: '280px' }}>
              Avocat au Barreau de Bordeaux. Droit des affaires, contentieux commercial et droit pénal.
            </p>
          </div>

          <div>
            <p style={{ fontSize: '0.58rem', letterSpacing: '0.20em', textTransform: 'uppercase', color: 'rgba(246,244,241,0.30)', marginBottom: '1.2rem' }}>
              Navigation
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {['#cabinet', '#domaines', '#honoraires', '#ressources', '#contact'].map((href) => (
                <a key={href} href={href} style={{ fontSize: '0.82rem', color: 'rgba(246,244,241,0.55)', textDecoration: 'none' }}>
                  {href.replace('#', '').charAt(0).toUpperCase() + href.replace('#', '').slice(1)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p style={{ fontSize: '0.58rem', letterSpacing: '0.20em', textTransform: 'uppercase', color: 'rgba(246,244,241,0.30)', marginBottom: '1.2rem' }}>
              Cabinet
            </p>
            <p style={{ fontSize: '0.82rem', lineHeight: 1.78, color: 'rgba(246,244,241,0.42)', marginBottom: '1rem' }}>
              16 rue Paul Louis Lande<br />33000 Bordeaux
            </p>
            <a href="tel:+33767552218" style={{ fontSize: '0.82rem', color: 'rgba(246,244,241,0.55)', textDecoration: 'none', display: 'block', marginBottom: '0.4rem' }}>07 67 55 22 18</a>
            <a href="mailto:tk@kitenge-avocat.fr" style={{ fontSize: '0.82rem', color: 'rgba(246,244,241,0.55)', textDecoration: 'none', display: 'block', marginBottom: '1.5rem' }}>tk@kitenge-avocat.fr</a>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a href="tel:+33767552218" style={{
                border: '1px solid rgba(246,244,241,0.20)', color: 'rgba(246,244,241,0.65)',
                padding: '0.55rem 1.2rem', textDecoration: 'none',
                fontSize: '0.58rem', letterSpacing: '0.12em', textTransform: 'uppercase',
              }}>
                Appeler
              </a>
              <a href="mailto:tk@kitenge-avocat.fr" style={{
                border: '1px solid rgba(246,244,241,0.20)', color: 'rgba(246,244,241,0.65)',
                padding: '0.55rem 1.2rem', textDecoration: 'none',
                fontSize: '0.58rem', letterSpacing: '0.12em', textTransform: 'uppercase',
              }}>
                Écrire
              </a>
            </div>
          </div>

        </div>

        <div style={{ borderTop: '1px solid rgba(246,244,241,0.10)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '0.68rem', color: 'rgba(246,244,241,0.28)' }}>
            &copy; {new Date().getFullYear()} Maître Tommy Kitenge — Avocat au Barreau de Bordeaux
          </p>
          <p style={{ fontSize: '0.68rem', color: 'rgba(246,244,241,0.20)' }}>
            Barreau de Bordeaux · FR / EN
          </p>
        </div>

      </div>
    </footer>
  )
}
