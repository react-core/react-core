import React from 'react'
import PropTypes from 'prop-types'
import Component from '@reactions/component'
import { NoTheme } from './Utils'

const Provider = ({ theme, componentName, render }) => (
  <Component
    initialState={{
      style: theme[componentName] ? theme[componentName]() : NoTheme()
    }}
    render={({ state }) => render({ style: state.style })}
  />
)

Provider.propTypes = {
  render: PropTypes.func.isRequired,
  componentName: PropTypes.string.isRequired,
  theme: PropTypes.object
}

Provider.defaultProps = {
  theme: {}
}

export { Provider }
