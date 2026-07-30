import { ARTICLES, getArticle } from '@/lib/articles'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }))
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  return (
    <main style={{ minHeight: '100vh', background: '#f6f4f1' }}>
      <div style={{ background: '#282c35', padding: '9rem 0 4rem' }}>
        <div className="max-w-3xl mx-auto px-6">
          <Link href="/ressources" style={{ fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(246,244,241,0.45)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
            &larr; Ressources
          </Link>
          <p style={{ fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(122,45,58,0.75)', marginBottom: '0.8rem' }}>{article.date}</p>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.7rem, 3vw, 2.6rem)', fontWeight: 400, color: '#f6f4f1', lineHeight: 1.22 }}>{article.title}</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6" style={{ padding: '4rem 1.5rem 6rem' }}>
        <div style={{ fontSize: '0.95rem', lineHeight: 1.88, color: '#1e2129' }} dangerouslySetInnerHTML={{ __html: article.content }} />

        <div style={{ marginTop: '4rem', padding: '2.5rem', background: '#edeae5', borderLeft: '3px solid #7a2d3a' }}>
          <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1rem', color: '#1e2129', marginBottom: '0.6rem' }}>
            Une question juridique ?
          </p>
          <p style={{ fontSize: '0.85rem', color: '#666d7a', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Maître Kitenge reçoit au cabinet, par vidéo ou par téléphone. Prenez contact pour une première consultation.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a href="tel:+33767552218" style={{
              display: 'inline-flex', alignItems: 'center',
              background: '#7a2d3a', color: '#f6f4f1',
              padding: '0.8rem 2rem', textDecoration: 'none',
              fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            }}>Appeler</a>
            <a href="mailto:tk@kitenge-avocat.fr" style={{
              display: 'inline-flex', alignItems: 'center',
              border: '1px solid rgba(30,33,41,0.25)', color: '#1e2129',
              padding: '0.8rem 2rem', textDecoration: 'none',
              fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            }}>Écrire</a>
          </div>
        </div>
      </div>
    </main>
  )
}
