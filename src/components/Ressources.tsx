import Link from 'next/link'

const ARTICLES = [
  {
    slug: 'garde-a-vue-droits-et-role-avocat',
    title: 'Garde à vue : vos droits, étape par étape',
    excerpt: "La garde à vue suit des règles précises. Connaître ses droits dès les premières heures est déterminant pour la suite de la procédure pénale.",
    date: '2025',
  },
  {
    slug: 'litige-commercial-saisir-tribunal',
    title: 'Litige commercial : quand et comment saisir le tribunal ?',
    excerpt: "Un client qui ne paie pas, un contrat mal exécuté, un associé de mauvaise foi — plusieurs étapes s'imposent avant de porter l'affaire devant le juge.",
    date: '2025',
  },
  {
    slug: 'licenciement-recours-salarie',
    title: 'Licenciement : les recours du salarié',
    excerpt: "Un licenciement peut être contesté devant le Conseil de prud'hommes. Il faut identifier le bon motif et agir dans les 12 mois suivant la notification.",
    date: '2025',
  },
]

export default function Ressources() {
  return (
    <section id="ressources" style={{ padding: '7rem 0', background: '#edeae5' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p style={{ fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#7a2d3a', marginBottom: '0.8rem' }}>
              Ressources
            </p>
            <h2 style={{
              fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
              fontWeight: 400, color: '#1e2129',
            }}>
              Mieux comprendre vos droits
            </h2>
          </div>
          <Link href="/ressources" style={{
            fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            color: '#7a2d3a', textDecoration: 'none', borderBottom: '1px solid rgba(122,45,58,0.35)', paddingBottom: '2px',
          }}>
            Tous les articles
          </Link>
        </div>

        <div className="grid md:grid-cols-3" style={{ gap: '1.5rem' }}>
          {ARTICLES.map((a) => (
            <Link key={a.slug} href={`/ressources/${a.slug}`} style={{ textDecoration: 'none' }}>
              <article className="card-hover" style={{ background: '#f6f4f1', padding: '2.2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(30,33,41,0.40)', marginBottom: '1rem' }}>
                  {a.date}
                </p>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.05rem', fontWeight: 400, color: '#1e2129', lineHeight: 1.42, marginBottom: '1rem', flexGrow: 1 }}>
                  {a.title}
                </h3>
                <p style={{ fontSize: '0.82rem', lineHeight: 1.72, color: '#666d7a', marginBottom: '1.5rem' }}>
                  {a.excerpt}
                </p>
                <span style={{ fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7a2d3a', borderBottom: '1px solid rgba(122,45,58,0.35)', paddingBottom: '2px', alignSelf: 'flex-start' }}>
                  Lire
                </span>
              </article>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
