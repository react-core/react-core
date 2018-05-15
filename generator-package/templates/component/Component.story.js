import React from 'react'
import { storiesOf } from '@storybook/react'
import { <%= component_name %> } from './<%= component_name %>'

storiesOf('<%= component_name %>', module)
  .add('default view', () => <<%= component_name %> key={1} />)
