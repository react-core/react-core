import React from 'react'
import { Button } from '@react-core/button'
import { text } from '@storybook/addon-knobs'
import { theme as karbon } from '@react-core/theme-karbon'
import { storiesOf } from '@storybook/react'
import { ToastContainer, toast } from './Toast'

const triggerToasts = type => {
  type === 'success' && toast.success(text('Message', 'Success Toast message'))
  type === 'warning' && toast.warn(text('Message', 'Warning Toast message'))
  type === 'error' && toast.error(text('Message', 'Error Toast message'))
  type === 'info' && toast.info(text('Message', 'Info Toast message'))
}

storiesOf('Karbon', module).add('Toast', () => (
  <div>
    <Button
      theme={karbon}
      type="secondary"
      label="Warning Toast"
      icon="fa-exclamation-triangle"
      onClick={() => triggerToasts('warning')}
    />
    <br />
    <Button
      theme={karbon}
      type="secondary"
      label="Success Toast"
      icon="fa-check-circle"
      onClick={() => triggerToasts('success')}
    />
    <br />
    <Button
      theme={karbon}
      type="secondary"
      label="Error Toast"
      icon="fa-times"
      onClick={() => triggerToasts('error')}
    />
    <br />
    <Button
      theme={karbon}
      type="secondary"
      label="Info Toast"
      icon="fa-info-circle"
      onClick={() => triggerToasts('info')}
    />
    <ToastContainer theme={karbon} hideProgressBar />
  </div>
))
