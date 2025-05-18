'use client'
import React, { useState, ChangeEvent } from 'react'
import { pinyin } from 'pinyin-pro'
import * as wanakana from 'wanakana'

const LanguageParserInput: React.FC = () => {
  const [inputText, setInputText] = useState('')
  const [pinyinText, setPinyinText] = useState('')
  const [romajiText, setRomajiText] = useState('')

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value
    setInputText(text)

    const pinyinResult = pinyin(text, {
      toneType: 'none',
      nonZh: 'consecutive',
    })
    setPinyinText(pinyinResult)
    setRomajiText(wanakana.toRomaji(pinyinResult))
  }

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text..."
      />
      <div>
        <p>Pinyin: {pinyinText}</p>
        <p>Romaji: {romajiText}</p>
      </div>
    </div>
  )
}

export default LanguageParserInput
