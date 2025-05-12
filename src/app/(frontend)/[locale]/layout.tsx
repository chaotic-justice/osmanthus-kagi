import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import { routing } from '@/i18n/routing'
import { getServerSideURL } from '@/utilities/getURL'
import { hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { type TypedLocale } from 'payload'
import './globals.css'

type Args = {
  children: React.ReactNode
  params: Promise<{
    locale: TypedLocale
  }>
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function RootLayout({ children, params }: Args) {
  const { isEnabled } = await draftMode()
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html
      className={cn(GeistSans.variable, GeistMono.variable)}
      lang={locale}
      suppressHydrationWarning
    >
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />

          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@cdplayer',
  },
}
