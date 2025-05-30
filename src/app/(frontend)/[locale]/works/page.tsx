import type { Metadata } from 'next/types'

import { WorkingCollectionArchive } from '@/components/CollectionArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload, type TypedLocale } from 'payload'
import PageClient from './page.client'

type Args = {
  params: Promise<{
    locale: TypedLocale
  }>
}

export default async function Page({ params }: Args) {
  const { locale = 'en' } = await params
  const payload = await getPayload({ config: configPromise })

  const works = await payload.find({
    collection: 'works',
    depth: 1,
    locale,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
  })

  return (
    <div className="pt-24 pb-24">
      <PageClient />
      <WorkingCollectionArchive works={works.docs} />

      <div className="container">
        {works.totalPages > 1 && works.page && (
          <Pagination page={works.page} totalPages={works.totalPages} />
        )}
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Shukagi Portfolio Works`,
  }
}
