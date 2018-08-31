import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'
import { theme as karbon } from '@react-core/theme-karbon'
import { Button } from './Button'

const kindValues = ['primary', 'secondary', 'menu']

storiesOf('Karbon', module).add('Button', () => (
  <Button
    theme={karbon}
    icon={text('icon', 'fa-bars')}
    label={text('label', 'Button label')}
    type={select('type', kindValues, kindValues[0])}
  />
))
