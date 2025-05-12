'use client'

import { useLocale } from 'next-intl'
import { Link, type Locale, usePathname } from '@/i18n/navigation'

export default function PublicNavigationLocaleSwitcher() {
  return (
    <div className="flex gap-3 py-5">
      <LocaleLink locale="en" />
      <LocaleLink locale="ja" />
    </div>
  )
}

function LocaleLink({ locale }: { locale: Locale }) {
  const pathname = usePathname()
  const isActive = useLocale() === locale
  const cleanPathname = pathname.replace(/^\/(ja|en)(\/.*)?$/, '$2').replace(/^(\/)?/, '/')
  console.log('pathname', pathname, cleanPathname)

  return (
    <Link className={isActive ? 'underline' : undefined} href={cleanPathname} locale={locale}>
      {locale.toUpperCase()}
    </Link>
  )
}
