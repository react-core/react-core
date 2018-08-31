import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { theme as karbon } from '@react-core/theme-karbon'
import { TabView } from './TabView'

storiesOf('Karbon', module).add('TabView', () => (
  <TabView
    theme={karbon}
    options={[
      { name: 'ONE', content: <p>{text('Tab content', 'Tab content...')}</p> },
      { name: 'TWO', content: <p>{text('Tab content', 'Tab content...')}</p> },
      { name: 'THREE', content: <p>{text('Tab content', 'Tab content...')}</p> }
    ]}
    initialValues={{ active: 0 }}
  />
))
