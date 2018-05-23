import React from 'react'
import PropTypes from 'prop-types'

export const Grid = props => (
  <div>
    {props.children}
    <style jsx>{`
      div {
        display: grid;
        grid-template: ${props.template};
        grid: ${props.grid};
        grid-template-columns: ${props.columns};
        grid-template-rows: ${props.rows};
        grid-template-areas: ${props.areas};
        grid-column-gap: ${props['column-gap']};
        grid-row-gap: ${props['row-gap']};
        grid-gap: ${props['gap']};
        justify-items: ${props['justify-items']};
        align-items: ${props['align-items']};
        place-items: ${props['place-items']};
        justify-content: ${props['justify-content']};
        align-content: ${props['align-content']};
        place-content: ${props['place-content']};
        grid-auto-flow: ${props['auto-flow']};
      }
    `}</style>
  </div>
)

Grid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  display: PropTypes.oneOfType(['grid', 'inline-grid']),
  columns: PropTypes.string,
  rows: PropTypes.string,
  areas: PropTypes.string,
  template: PropTypes.string,
  'column-gap': PropTypes.string,
  'row-gap': PropTypes.string,
  gap: PropTypes.string,
  'justify-items': PropTypes.oneOf([
    'start',
    'end',
    'center',
    'stretch',
    'initial'
  ]),
  'align-items': PropTypes.oneOf([
    'start',
    'end',
    'center',
    'stretch',
    'initial'
  ]),
  'place-items': PropTypes.string,
  'justify-content': PropTypes.oneOf([
    'start' |
      'end' |
      'center' |
      'stretch' |
      'space-around' |
      'space-between' |
      'space-evenly',
    'initial'
  ]),
  'align-content': PropTypes.oneOf([
    'start' |
      'end' |
      'center' |
      'stretch' |
      'space-around' |
      'space-between' |
      'space-evenly',
    'initial'
  ]),
  'place-content': PropTypes.string,
  'auto-flow': PropTypes.oneOf([
    'row' | 'column' | 'row dense' | 'column dense',
    'initial'
  ]),
  grid: PropTypes.string
}

Grid.defaultProps = {
  display: 'grid',
  columns: 'auto',
  rows: 'auto',
  areas: 'none',
  template: 'none',
  'column-gap': 'initial',
  'row-gap': 'initial',
  gap: 'initial',
  'justify-items': 'initial',
  'align-items': 'initial',
  'place-items': 'initial',
  'justify-content': 'initial',
  'align-content': 'initial',
  'place-content': 'initial',
  'auto-flow': 'initial',
  grid: 'initial'
}
