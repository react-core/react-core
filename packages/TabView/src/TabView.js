import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from '@react-core/theme-provider'
import Component from '@reactions/component'

const TabView = ({ theme, options, initialValues }) => (
  <Provider
    theme={theme}
    componentName={'TabView'}
    render={({ style }) => (
      <Component
        initialState={initialValues ? initialValues : { active: 0 }}
        render={({ state, setState }) => (
          <div className="tabs-container">
            <ul>
              {options.map((option, index) => (
                <li
                  key={index}
                  onClick={() => setState({ active: index })}
                  className={
                    'nav-item ' + (index === state.active ? 'nav-active' : '')
                  }
                >
                  {option.name}
                </li>
              ))}
            </ul>

            <div className="content-container">
              {options.map((option, index) => (
                <div
                  key={index}
                  className={index === state.active ? '' : 'nav-hide'}
                >
                  {option.content}
                </div>
              ))}
            </div>
            <style jsx>{style}</style>
          </div>
        )}
      />
    )}
  />
)

TabView.propTypes = {
  theme: PropTypes.object,
  options: PropTypes.array,
  initialValues: PropTypes.object
}

TabView.defaultProps = {
  theme: {},
  options: []
}

export { TabView }
