import type { Metadata } from 'next'
import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bence Tóth — Software Engineer',
  description:
    'Software engineer building data-driven applications. Creator of Podium Prophets, the free F1 prediction game with automatic scoring, private leagues, and session analysis.',
  openGraph: {
    title: 'Bence Tóth — Software Engineer',
    description:
      'Building data-driven applications at the intersection of sports and technology.',
    url: 'https://tthbnc.github.io',
    siteName: 'Bence Tóth',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Bence Tóth — Software Engineer',
    description:
      'Building data-driven applications at the intersection of sports and technology.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://tthbnc.github.io' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://tthbnc.github.io/#person',
      name: 'Bence Tóth',
      url: 'https://tthbnc.github.io',
      jobTitle: 'Software Engineer',
      sameAs: [
        'https://github.com/TthBnc',
        'https://podiumprophets.com',
      ],
      knowsAbout: [
        'TypeScript',
        'React',
        'Next.js',
        'Supabase',
        'Formula 1 Data Analysis',
        'Full-Stack Development',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://tthbnc.github.io/#website',
      name: 'Bence Tóth',
      url: 'https://tthbnc.github.io',
      author: { '@id': 'https://tthbnc.github.io/#person' },
    },
    {
      '@type': 'WebApplication',
      '@id': 'https://podiumprophets.com/#app',
      name: 'Podium Prophets',
      url: 'https://podiumprophets.com',
      description:
        'Free F1 prediction game with automatic scoring, private leagues, and built-in session analysis. Predict every qualifying and race, compete with friends, and use real data to make smarter picks.',
      applicationCategory: 'GameApplication',
      operatingSystem: 'Web',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      author: { '@id': 'https://tthbnc.github.io/#person' },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
