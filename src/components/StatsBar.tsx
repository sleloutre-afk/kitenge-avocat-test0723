const STATS = [
  { value: '2023', label: 'Prestation de serment' },
  { value: 'FR / EN', label: 'Consultations bilingues' },
  { value: 'Affaires & Pénal', label: 'Spécialisations' },
  { value: 'AJ', label: 'Aide juridictionnelle acceptée' },
]

export default function StatsBar() {
  return (
    <div style={{ background: '#edeae5', borderTop: '1px solid #d5d0c8', borderBottom: '1px solid #d5d0c8' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {STATS.map((s, i) => (
            <div key={i} style={{
              padding: '1.8rem 1.2rem',
              borderRight: i < 3 ? '1px solid #d5d0c8' : 'none',
              textAlign: 'center',
            }}>
              <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.05rem', fontStyle: 'italic', color: '#1e2129', marginBottom: '0.3rem' }}>
                {s.value}
              </p>
              <p style={{ fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(30,33,41,0.50)' }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
