import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from '@react-core/theme-provider'

const Button = ({ type, label, theme, icon = '', ...rest }) => (
  <Provider
    theme={theme}
    componentName={'Button'}
    render={({ style }) => (
      <div>
        <button type={type} className={`primary ${type}`} {...rest}>
          <span className={`fa ${icon}`} />
          {type === 'menu' ? '' : label}
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
