import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import { TextField } from './TextField'
import { theme as karbon } from '@react-core/theme-karbon'
import { theme as bootstrap } from '@react-core/theme-bootstrap'
import { theme as material } from '@react-core/theme-material'

const TextFieldKarbon = () => (
  <TextField
    theme={karbon}
    placeholder={text('placeholder', 'This is a placeholder')}
    label={text('label', 'TextField label')}
    disabled={boolean('disabled')}
  />
)

const TextFieldMaterial = () => (
  <TextField
    theme={material}
    placeholder={text('placeholder', 'This is a placeholder')}
    label={text('label', 'TextField label')}
    disabled={boolean('disabled')}
  />
)

const TextFieldBootstrap = () => (
  <TextField
    theme={bootstrap}
    placeholder={text('placeholder', 'This is a placeholder')}
    label={text('label', '')}
    disabled={boolean('disabled')}
  />
)

storiesOf('Karbon', module).add('TextField', () => <TextFieldKarbon />)
storiesOf('Material', module).add('TextField', () => <TextFieldMaterial />)
storiesOf('Bootstrap', module).add('TextField', () => <TextFieldBootstrap />)
