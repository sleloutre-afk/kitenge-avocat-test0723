import Link from 'next/link'
import { ARTICLES } from '@/lib/articles'

export default function RessourcesPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f6f4f1' }}>
      <div style={{ background: '#282c35', padding: '9rem 0 4rem' }}>
        <div className="max-w-6xl mx-auto px-6">
          <p style={{ fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(122,45,58,0.75)', marginBottom: '0.8rem' }}>
            Ressources
          </p>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#f6f4f1' }}>
            Mieux comprendre vos droits
          </h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6" style={{ padding: '5rem 1.5rem' }}>
        <div className="grid md:grid-cols-3" style={{ gap: '1.5rem' }}>
          {ARTICLES.map((a) => (
            <Link key={a.slug} href={`/ressources/${a.slug}`} style={{ textDecoration: 'none' }}>
              <article className="card-hover" style={{ background: '#edeae5', padding: '2.2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(30,33,41,0.40)', marginBottom: '1rem' }}>{a.date}</p>
                <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.05rem', fontWeight: 400, color: '#1e2129', lineHeight: 1.42, marginBottom: '1rem', flexGrow: 1 }}>{a.title}</h2>
                <p style={{ fontSize: '0.82rem', lineHeight: 1.72, color: '#666d7a', marginBottom: '1.5rem' }}>{a.excerpt}</p>
                <span style={{ fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7a2d3a', borderBottom: '1px solid rgba(122,45,58,0.35)', paddingBottom: '2px', alignSelf: 'flex-start' }}>Lire</span>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
