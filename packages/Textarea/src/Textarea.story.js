import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { theme as karbon } from '@react-core/theme-karbon'
import { Textarea } from './Textarea'

const TextareaKarbon = () => (
  <Textarea
    theme={karbon}
    placeholder={text('placeholder', 'This is a placeholder')}
    label={text('label', 'Textarea label')}
  />
)

storiesOf('Karbon', module).add('Textarea', () => <TextareaKarbon />)