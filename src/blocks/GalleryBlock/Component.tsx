'use client'

import type { GalleryBlock as GalleryBlockProps } from '@/payload-types'
import type { StaticImageData } from 'next/image'
import React from 'react'
import { MediaBlock } from '../MediaBlock/Component'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

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
  const plugin = React.useRef(Autoplay({ delay: 3250, stopOnInteraction: true }))
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="mx-auto max-w-fit">
      <Carousel plugins={[plugin.current]} setApi={setApi} className="w-full max-w-fit">
        <CarouselContent>
          {gallery.map((media, index) => (
            <CarouselItem key={index}>
              <MediaBlock
                key={index}
                blockType={blockType}
                className="col-start-1 col-span-3"
                imgClassName="m-0"
                media={media}
                captionClassName="mx-auto max-w-[48rem]"
                enableGutter={false}
                disableInnerContainer={true}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  )
}
