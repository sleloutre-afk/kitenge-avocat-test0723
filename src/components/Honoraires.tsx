const MODES = [
  {
    title: 'Temps passé',
    description: "Pour les dossiers de contentieux et les missions d'étendue variable. Un devis estimatif est remis en amont ; tout dépassement significatif est signalé avant d'engager de nouvelles diligences.",
  },
  {
    title: 'Forfait',
    description: "Pour les consultations et les prestations délimitées : consultation au cabinet, par vidéo ou par téléphone, rédaction d'un acte, analyse d'un contrat. Le tarif est fixé et communiqué avant toute intervention.",
  },
  {
    title: 'Aide juridictionnelle',
    description: "Maître Kitenge accepte l'aide juridictionnelle totale et partielle en matière pénale, sociale et en droit des étrangers. Les personnes éligibles peuvent bénéficier d'une prise en charge par l'État.",
  },
]

export default function Honoraires() {
  return (
    <section id="honoraires" style={{ padding: '7rem 0', background: '#f6f4f1' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>

          <div>
            <p style={{ fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#7a2d3a', marginBottom: '0.8rem' }}>
              Honoraires
            </p>
            <h2 style={{
              fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
              fontWeight: 400, color: '#1e2129', marginBottom: '1.8rem', lineHeight: 1.22,
            }}>
              Transparence et accessibilité
            </h2>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.85, color: '#666d7a', marginBottom: '2.2rem' }}>
              Une convention d'honoraires est systématiquement remise avant toute intervention. Des facilités de paiement en plusieurs fois peuvent être envisagées selon les situations.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a href="tel:+33767552218" style={{
                display: 'inline-flex', alignItems: 'center',
                background: '#7a2d3a', color: '#f6f4f1',
                padding: '0.9rem 2.2rem', textDecoration: 'none',
                fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase',
              }}>
                Appeler
              </a>
              <a href="mailto:tk@kitenge-avocat.fr" style={{
                display: 'inline-flex', alignItems: 'center',
                border: '1px solid rgba(30,33,41,0.25)', color: '#1e2129',
                padding: '0.9rem 2.2rem', textDecoration: 'none',
                fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase',
              }}>
                Écrire
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {MODES.map((m, i) => (
              <div key={i} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ width: '2px', background: '#7a2d3a', flexShrink: 0, marginTop: '4px', minHeight: '3rem', opacity: 0.5 }} />
                <div>
                  <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1rem', fontWeight: 400, color: '#1e2129', marginBottom: '0.6rem' }}>
                    {m.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', lineHeight: 1.78, color: '#666d7a' }}>
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
