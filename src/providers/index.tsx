import React from 'react'

import { NextIntlClientProvider } from 'next-intl'
import { HeaderThemeProvider } from './HeaderTheme'
import { ThemeProvider } from './Theme'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <ThemeProvider>
      <HeaderThemeProvider>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </HeaderThemeProvider>
    </ThemeProvider>
  )
}
