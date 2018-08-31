import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from '@react-core/theme-provider'

const setValue = event => {
  const input = event.target
  const value = input.value
  input.setAttribute('value', value)
}

const TextField = ({ label, placeholder, theme, ...rest }) => (
  <Provider
    theme={theme}
    componentName={'TextField'}
    render={({ style }) => (
      <div>
        <input onKeyUp={e => setValue(e)} placeholder={placeholder} {...rest} />
        <hr />
        <label>{label}</label>
        <style jsx>{style}</style>
      </div>
    )}
  />
)

TextField.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
    label: PropTypes.string,
    input: PropTypes.string
  }),
  placeholder: PropTypes.string,
  label: PropTypes.string,
  theme: PropTypes.object
}

TextField.defaultProps = {
  classes: {},
  placeholder: '',
  label: ''
}

export { TextField }
