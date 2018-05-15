import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from './Button'

storiesOf('Default', module).add('Button', () => (
  <Button label="Sign Up to join" />
))
