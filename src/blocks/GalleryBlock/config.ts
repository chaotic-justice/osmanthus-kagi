import type { Block } from 'payload'

export const GalleryBlock: Block = {
  slug: 'galleryBlock',
  interfaceName: 'GalleryBlock',
  fields: [
    {
      name: 'gallery',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
      required: true,
      // maxDepth: 2,
    },
  ],
}
