import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from '@react-core/theme-provider'

const Button = ({ type, label, theme, icon = '', ...rest }) => (
  <Provider
    theme={theme}
    componentName={'Button'}
    render={({ style }) => (
      <div>
        <button className={`${type}`} {...rest}>
          {label}
          <span className={`fa ${icon}`} />
        </button>
        <style jsx>{style}</style>
      </div>
    )}
  />
)

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
  theme: PropTypes.object
}

Button.defaultProps = {
  type: 'primary'
}

export { Button }
