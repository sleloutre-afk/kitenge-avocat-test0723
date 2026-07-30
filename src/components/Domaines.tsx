const FEATURED = {
  title: 'Droit des affaires & contentieux commercial',
  description: "Litiges entre associés, ruptures de contrats commerciaux, recouvrement de créances, concurrence déloyale, cessions de fonds de commerce et de parts sociales, droit de la consommation professionnelle. Maître Kitenge assiste entreprises et dirigeants devant les juridictions commerciales bordelaises.",
  icon: '/commercial.svg',
}

const DOMAINES = [
  { title: 'Droit des sociétés', icon: '/societes.svg' },
  { title: 'Droit pénal', icon: '/penal.svg' },
  { title: 'Droit du travail', icon: '/travail.svg' },
  { title: 'Recouvrement de créances', icon: '/recouvrement.svg' },
  { title: 'Préjudice corporel', icon: '/corporel.svg' },
  { title: 'Droit immobilier', icon: '/immobilier.svg' },
]

export default function Domaines() {
  return (
    <section id="domaines" style={{ padding: '7rem 0', background: '#edeae5' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div style={{ marginBottom: '4rem' }}>
          <p style={{ fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#7a2d3a', marginBottom: '0.8rem' }}>
            Domaines d'intervention
          </p>
          <h2 style={{
            fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
            fontWeight: 400, color: '#1e2129',
          }}>
            Affaires, pénal et au-delà
          </h2>
        </div>

        <div style={{
          background: '#282c35', padding: '3.5rem',
          display: 'flex', gap: '2.5rem', alignItems: 'flex-start',
          marginBottom: '1.5rem',
        }}>
          <img src={FEATURED.icon} alt="" aria-hidden style={{ width: '48px', height: '48px', opacity: 0.70, filter: 'brightness(0) invert(1)', flexShrink: 0 }} />
          <div>
            <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.45rem', fontWeight: 400, color: '#f6f4f1', marginBottom: '1rem' }}>
              {FEATURED.title}
            </h3>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.82, color: 'rgba(246,244,241,0.65)' }}>
              {FEATURED.description}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3" style={{ gap: '1px', background: '#d5d0c8' }}>
          {DOMAINES.map((d) => (
            <div key={d.title} className="card-hover" style={{
              background: '#f6f4f1', padding: '2.2rem 2rem',
              display: 'flex', alignItems: 'flex-start', gap: '1.2rem',
            }}>
              <img src={d.icon} alt="" aria-hidden style={{ width: '32px', height: '32px', opacity: 0.35, flexShrink: 0, marginTop: '2px' }} />
              <p style={{ fontSize: '0.88rem', color: '#1e2129', lineHeight: 1.55 }}>{d.title}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
