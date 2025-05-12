'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Link } from '@/i18n/navigation'
import { SearchIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const t = useTranslations()

  return (
    <nav className="flex gap-3 items-center">
      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} appearance="link" />
      })}
      <Link href="/search">
        <span className="sr-only">{t('search')}</span>
        <SearchIcon className="w-5 text-primary" />
      </Link>
    </nav>
  )
}
