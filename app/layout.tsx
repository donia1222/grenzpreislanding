import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CookieBanner } from '@/components/cookie-banner'

import { LanguageProvider } from '@/contexts/LanguageContext'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-plus-jakarta'
});

export const metadata: Metadata = {
  title: 'GrenzPreis — Lohnt sich der Grenzübertritt?',
  description: 'GrenzPreis: Die kostenlose App für Schweizer, die in Deutschland oder Österreich einkaufen. Preise vergleichen, Benzin und Zoll einrechnen — deinen echten Nettogewinn berechnen. Jetzt gratis downloaden.',
  keywords: [
    'GrenzPreis', 'Grenzübertritt Schweiz', 'Einkaufen in Deutschland',
    'Einkaufen in Österreich', 'Preisvergleich Schweiz Deutschland',
    'Zollfreibetrag Schweiz', 'Grenzshoping', 'Lidl Deutschland Preise',
    'Aldi Deutschland Preise', 'Rewe Preise', 'Hofer Österreich',
    'Migros vs Lidl', 'Coop vs Aldi', 'Benzinkosten Grenzübertritt',
    'Supermarkt Preisvergleich', 'CH DE AT Preise',
    'Kostenlose App', 'Einkaufsliste Grenze',
  ],
  authors: [{ name: 'lweb.ch', url: 'https://www.lweb.ch' }],
  creator: 'lweb.ch',
  publisher: 'GrenzPreis',
  metadataBase: new URL('https://grenzpreis.app'),
  alternates: {
    canonical: '/',
    languages: {
      'de': '/',
      'fr': '/',
      'it': '/',
      'en': '/',
      'es': '/',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://grenzpreis.app',
    title: 'GrenzPreis — Lohnt sich der Grenzübertritt?',
    description: 'Preise in DE & AT vergleichen, Benzin und Zoll einrechnen — deinen echten Nettogewinn berechnen. Kostenlos. Kein Abo.',
    siteName: 'GrenzPreis',
    locale: 'de_CH',
    images: [
      {
        url: '/grenzpreis/imageslanding/icon.png',
        width: 512,
        height: 512,
        alt: 'GrenzPreis — Preisvergleich Schweiz Deutschland Österreich',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GrenzPreis — Lohnt sich der Grenzübertritt?',
    description: 'Die kostenlose App für Preisvergleiche CH vs. DE & AT — inklusive Benzin und Zoll.',
    images: ['/grenzpreis/imageslanding/icon.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'GrenzPreis',
    url: 'https://grenzpreis.app',
    description: 'Die kostenlose App für Schweizer, die in Deutschland oder Österreich einkaufen. Preise vergleichen, Benzin und Zoll einrechnen.',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'iOS, Android',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CHF',
    },
    author: {
      '@type': 'Person',
      name: 'Roberto',
      url: 'https://www.lweb.ch',
    },
    inLanguage: ['de', 'fr', 'it', 'en', 'es'],
    keywords: 'Grenzübertritt, Schweiz, Deutschland, Österreich, Preisvergleich, Zoll, Benzin, Lidl, Aldi, Rewe, Hofer',
  }

  return (
    <html lang="de" className={`${inter.variable} ${plusJakarta.variable} bg-background`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}

          <CookieBanner />
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </LanguageProvider>
      </body>
    </html>
  )
}
