import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Maître Tommy Kitenge — Avocat à Bordeaux',
  description: "Avocat au Barreau de Bordeaux, spécialisé en droit des affaires et droit pénal. Conseil et contentieux pour les entreprises et les particuliers.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${playfair.variable} ${lato.variable}`} style={{ fontFamily: 'var(--font-lato), sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
