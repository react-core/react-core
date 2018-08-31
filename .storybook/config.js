import 'babel-polyfill'
import React from 'react'
import css from 'styled-jsx/css'
import { withKnobs } from '@storybook/addon-knobs'
import { configure, addDecorator } from '@storybook/react'
import { Provider } from '../packages/ThemeProvider/src/ThemeProvider'

import base from './base.scss'
require('./fonts/fontawesome-webfont.woff')
require('./fonts/fontawesome-webfont.woff2')
require('./fonts/fontawesome-webfont.ttf')

const req = require.context('../packages/', true, /^((?![\\/]node_modules|vendor[\\/]).)*\.story.js$/)

export const styleDecorator = getStory => (
  <div>
    <section>
      <article className="story">
        {getStory()}
      </article>
      <style jsx global>{base}</style>
    </section>
  </div>
)

const importStory = (filename) => {
  const { STORYBOOK_PACKAGE } = process.env
  if (STORYBOOK_PACKAGE) {
    if (filename.search(`${STORYBOOK_PACKAGE}.story`) !== -1) req(filename)
  } else {
    req(filename)
  }
}

function loadStories() {
  addDecorator(withKnobs)
  addDecorator(styleDecorator)
  req.keys().map(importStory)
}

configure(loadStories, module);

