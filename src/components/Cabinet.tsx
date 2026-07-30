export default function Cabinet() {
  return (
    <section id="cabinet" style={{ padding: '7rem 0', background: '#f6f4f1' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>

          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', top: '-1.5rem', left: '-1.5rem',
              width: '180px', height: '180px',
              background: 'rgba(122,45,58,0.07)',
            }} />
            <img
              src="/kitenge.png"
              alt="Maître Tommy Kitenge, avocat à Bordeaux"
              style={{ position: 'relative', width: '100%', maxWidth: '460px', display: 'block', objectFit: 'cover', aspectRatio: '4/5' }}
            />
          </div>

          <div style={{ paddingTop: '1rem' }}>
            <p style={{ fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#7a2d3a', marginBottom: '1.2rem' }}>
              Le cabinet
            </p>
            <h2 style={{
              fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.9rem, 3vw, 2.6rem)',
              fontWeight: 400, color: '#1e2129', lineHeight: 1.2, marginBottom: '2rem',
            }}>
              Maître Tommy Kitenge
            </h2>

            <div style={{ width: '36px', height: '2px', background: '#7a2d3a', marginBottom: '2rem' }} />

            <p style={{ fontSize: '0.92rem', lineHeight: 1.85, color: '#666d7a', marginBottom: '1.5rem' }}>
              Avocat au Barreau de Bordeaux depuis 2023, Maître Tommy Kitenge a fondé son cabinet individuel en 2025 après une première expérience en cabinet. Titulaire d'un Master 2 en Droit des Affaires de l'Université de Rouen et du CAPA de l'École d'Avocats ALIENOR, il a construit une pratique résolument tournée vers le contentieux des affaires et la défense pénale.
            </p>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.85, color: '#666d7a', marginBottom: '1.5rem' }}>
              Son cabinet accompagne aussi bien les dirigeants et les entreprises dans leurs litiges commerciaux que les particuliers confrontés à une procédure pénale. Une approche directe, mobilisée, sans détours — en français comme en anglais.
            </p>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.85, color: '#666d7a', marginBottom: '2.4rem' }}>
              Maître Kitenge intervient en conseil préventif et en contentieux, devant les juridictions du ressort de la Cour d'Appel de Bordeaux. Il accepte l'aide juridictionnelle.
            </p>

            <div style={{ display: 'flex', gap: '3rem' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.6rem', fontStyle: 'italic', color: '#1e2129' }}>2023</p>
                <p style={{ fontSize: '0.58rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(30,33,41,0.45)', marginTop: '0.3rem' }}>Serment</p>
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.6rem', fontStyle: 'italic', color: '#1e2129' }}>Bordeaux</p>
                <p style={{ fontSize: '0.58rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(30,33,41,0.45)', marginTop: '0.3rem' }}>Gironde · 33000</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
