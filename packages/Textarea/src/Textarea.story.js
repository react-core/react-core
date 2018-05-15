import React from 'react'
import { storiesOf } from '@storybook/react'
import { Textarea } from './Textarea'

storiesOf('Default', module).add('TextArea', () => (
  <Textarea placeholder={'Please enter your email'} label={'Text'} />
))
