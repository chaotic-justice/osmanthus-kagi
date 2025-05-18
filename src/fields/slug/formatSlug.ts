import type { FieldHook } from 'payload'
import { pinyin } from 'pinyin-pro'
import * as wanakana from 'wanakana'

export const formatSlug = (val: string): string => {
  const pinyinResult = pinyin(val, {
    toneType: 'none',
    nonZh: 'consecutive',
  })
  return wanakana
    .toRomaji(pinyinResult)
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
    .toLowerCase()
}

export const formatSlugHook =
  (fallback: string): FieldHook =>
  ({ data, operation, value }) => {
    if (typeof value === 'string') {
      return formatSlug(value)
    }

    if (operation === 'create' || !data?.slug) {
      const fallbackData = data?.[fallback] || data?.[fallback]

      if (fallbackData && typeof fallbackData === 'string') {
        return formatSlug(fallbackData)
      }
    }

    return value
  }
