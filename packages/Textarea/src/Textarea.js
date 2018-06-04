import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from '@react-core/theme-provider'

const setValue = event => {
  const input = event.target
  const value = input.value
  input.setAttribute('value', value)
}

const Textarea = ({ label, placeholder, theme, ...rest }) => (
  <Provider
    theme={theme}
    componentName={'Textarea'}
    render={({ style }) => (
      <div>
        <textarea
          {...rest}
          placeholder={placeholder}
          onKeyUp={e => setValue(e)}
        />
        <hr />
        <label>{label}</label>
        <style jsx>{style}</style>
      </div>
    )}
  />
)

Textarea.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
    label: PropTypes.string,
    input: PropTypes.string
  }),
  placeholder: PropTypes.string,
  label: PropTypes.string,
  theme: PropTypes.object
}

Textarea.defaultProps = {
  classes: {},
  placeholder: '',
  label: ''
}

export { Textarea }
