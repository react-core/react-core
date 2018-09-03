import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import { Checkbox } from './Checkbox'
import { theme as karbon } from '@react-core/theme-karbon'

const CheckboxKarbon = () => (
  <Checkbox
    theme={karbon}
    value={boolean('checked')}
    label={text('label', 'Checkbox label')}
    disabled={boolean('disabled')}
  />
)

storiesOf('Karbon', module).add('Checkbox', () => <CheckboxKarbon />)
