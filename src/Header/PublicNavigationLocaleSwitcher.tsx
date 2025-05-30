'use client'

import { useLocale } from 'next-intl'
import { Link, type Locale, usePathname } from '@/i18n/navigation'

export default function PublicNavigationLocaleSwitcher() {
  return (
    <div className="flex gap-3 py-5">
      <LocaleLink locale="en" />
      <LocaleLink locale="ja" />
      <LocaleLink locale="zh" />
    </div>
  )
}

function LocaleLink({ locale }: { locale: Locale }) {
  const pathname = usePathname()
  const isActive = useLocale() === locale

  return (
    <Link className={isActive ? 'underline' : undefined} href={pathname} locale={locale}>
      {locale.toUpperCase()}
    </Link>
  )
}
