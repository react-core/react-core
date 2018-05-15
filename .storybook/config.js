import 'babel-polyfill'
import React from 'react'
import base from './base.css'
import css from 'styled-jsx/css'
import fa from 'font-awesome/css/font-awesome.css'
import { withKnobs } from '@storybook/addon-knobs'
import { configure, addDecorator } from '@storybook/react'

const req = require.context('../packages/', true, /^((?![\\/]node_modules|vendor[\\/]).)*\.story.js$/)
const s = css`.story { max-width: 950px; margin: 15px auto 0; }`

export const styleDecorator = getStory => <section>
  <article className="story">
    {getStory()}
  </article>
  <style jsx>{s}</style>
  <style jsx global>{base}</style>
  <style jsx global>{fa}</style>
</section>

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

