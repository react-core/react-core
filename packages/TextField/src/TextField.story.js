import React from 'react'
import { storiesOf } from '@storybook/react'
import { TextField } from './TextField'
import { theme as bootstrap } from '@react-core/theme-bootstrap'
import { theme as material } from '@react-core/theme-material'

const TextFieldBootstrap = () => (
  <TextField theme={bootstrap} placeholder={'Please enter your email'} />
)

const TextFieldMaterial = () => (
  <TextField
    theme={material}
    placeholder={'Please enter your email'}
    label={'Text'}
  />
)

storiesOf('Bootstrap', module).add('TextField', () => <TextFieldBootstrap />)
storiesOf('Material', module).add('TextField', () => <TextFieldMaterial />)
