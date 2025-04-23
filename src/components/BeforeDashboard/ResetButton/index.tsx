'use client'

import React, { Fragment, useCallback, useState } from 'react'
import { toast } from '@payloadcms/ui'

import './index.scss'

const SuccessMessage: React.FC = () => (
  <div>
    Database resetted! You can now{' '}
    <a target="_blank" href="/">
      visit your website
    </a>
  </div>
)

export const ResetButton: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [resetted, setReseted] = useState(false)
  const [error, setError] = useState<null | string>(null)

  const handleClick = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()

      if (resetted) {
        toast.info('Database already resetted.')
        return
      }
      if (loading) {
        toast.info('Resetting already in progress.')
        return
      }
      if (error) {
        toast.error(`An error occurred, please refresh and try again.`)
        return
      }

      setLoading(true)

      try {
        toast.promise(
          new Promise((resolve, reject) => {
            try {
              fetch('/next/reset', { method: 'POST', credentials: 'include' })
                .then((res) => {
                  if (res.ok) {
                    resolve(true)
                    setReseted(true)
                  } else {
                    reject('An error occurred while resetting.')
                  }
                })
                .catch((error) => {
                  reject(error)
                })
            } catch (error) {
              reject(error)
            }
          }),
          {
            loading: 'Resetting....',
            success: <SuccessMessage />,
            error: 'An error occurred while resetiing.',
          },
        )
      } catch (err) {
        const error = err instanceof Error ? err.message : String(err)
        setError(error)
      }
    },
    [loading, resetted, error],
  )

  let message = ''
  if (loading) message = ' (resetting...)'
  if (resetted) message = ' (done!)'
  if (error) message = ` (error: ${error})`

  return (
    <Fragment>
      <button className="resetButton" onClick={handleClick}>
        Reset your database
      </button>
      {message}
    </Fragment>
  )
}
