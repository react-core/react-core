import React from 'react'
import { storiesOf } from '@storybook/react'
import { TabView } from './TabView'

storiesOf('Default', module).add('TabView', () => (
  <TabView
    options={[
      { name: 'ONE', content: <p>Content 1</p> },
      { name: 'TWO', content: <p>Content 2</p> },
      { name: 'THREE', content: <p>Content 3</p> }
    ]}
    initialValues={{ active: 1 }}
  />
))
