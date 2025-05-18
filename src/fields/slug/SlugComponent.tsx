'use client'
import { nanoid } from 'nanoid'
import { TextFieldClientProps } from 'payload'
import React, { useEffect } from 'react'

import { FieldLabel, TextInput, useField } from '@payloadcms/ui'

import './index.scss'

type SlugComponentProps = {
  checkboxFieldPath: string
} & TextFieldClientProps

export const SlugComponent: React.FC<SlugComponentProps> = ({
  field,
  path,
  readOnly: readOnlyFromProps,
}) => {
  const { label } = field

  const { value, setValue } = useField<string>({ path: path || field.name })

  useEffect(() => {
    // Generate a slug using nanoid if the slug is empty
    if (!value) {
      setValue(nanoid())
    }
  }, [value, setValue])

  const readOnly = readOnlyFromProps

  return (
    <div className="field-type slug-field-component">
      <div className="label-wrapper">
        <FieldLabel htmlFor={`field-${path}`} label={label} />
      </div>

      <TextInput
        value={value}
        onChange={setValue}
        path={path || field.name}
        readOnly={Boolean(readOnly)}
      />
    </div>
  )
}
