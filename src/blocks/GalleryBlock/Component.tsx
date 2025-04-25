import type { GalleryBlock as GalleryBlockProps } from '@/payload-types'
import type { StaticImageData } from 'next/image'
import React, { Fragment } from 'react'
import { MediaBlock } from '../MediaBlock/Component'

type Props = GalleryBlockProps & {
  breakout?: boolean
  captionClassName?: string
  className?: string
  enableGutter?: boolean
  imgClassName?: string
  staticImage?: StaticImageData
  disableInnerContainer?: boolean
}

export const GalleryBlock: React.FC<Props> = (props) => {
  const { blockType, gallery } = props
  return (
    <Fragment>
      {gallery.map((media, idx) => (
        <MediaBlock
          key={idx}
          blockType={blockType}
          className="col-start-1 col-span-3"
          imgClassName="m-0"
          media={media}
          captionClassName="mx-auto max-w-[48rem]"
          enableGutter={false}
          disableInnerContainer={true}
        />
      ))}
    </Fragment>
  )
}
