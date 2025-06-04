import { Banner } from '@payloadcms/ui/elements/Banner'
import React from 'react'

import './index.scss'
import { ResetButton } from './ResetButton'

const baseClass = 'before-dashboard'

const BeforeDashboardProd: React.FC = () => {
  return (
    <div className={baseClass}>
      <Banner className={`${baseClass}__banner`} type="success">
        <h4>Welcome to your dashboard!</h4>
      </Banner>
      Here&apos;s what to do next:
      <ul className={`${baseClass}__instructions`}>
        <li>
          <ResetButton />
          {' to clear the database and start fresh. This will remove all content, so be careful! '}
        </li>
        <li>Add, update, or delete content - see Posts and Works.</li>
      </ul>
    </div>
  )
}

export default BeforeDashboardProd
