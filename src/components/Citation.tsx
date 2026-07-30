export default function Citation() {
  return (
    <section style={{ padding: '7rem 0', background: '#282c35' }}>
      <div className="max-w-6xl mx-auto px-6" style={{ textAlign: 'center' }}>

        <div style={{ fontSize: '4rem', color: 'rgba(122,45,58,0.45)', lineHeight: 1, marginBottom: '1.5rem', fontFamily: 'Georgia, serif' }}>
          &ldquo;
        </div>
        <p style={{
          fontFamily: 'var(--font-playfair)',
          fontSize: 'clamp(1.05rem, 2vw, 1.4rem)',
          fontStyle: 'italic',
          fontWeight: 400,
          color: 'rgba(246,244,241,0.88)',
          lineHeight: 1.72,
          maxWidth: '680px',
          margin: '0 auto 2rem',
        }}>
          Changer des vies, défendre des droits — c'est ce qui me lève chaque matin. Que vous dirigiez une entreprise ou que vous fassiez face à une mise en cause pénale, mon rôle est le même : vous défendre avec rigueur, sans ménager mon engagement.
        </p>
        <p style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(122,45,58,0.75)' }}>
          Maître Tommy Kitenge
        </p>

      </div>
    </section>
  )
}
