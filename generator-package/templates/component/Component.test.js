import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { <%= component_name %> } from './<%= component_name %>'
Enzyme.configure({ adapter: new Adapter() })

describe('<<%= component_name %> />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<<%= component_name %> />)
  })

  test('Should render', () => {
    expect(wrapper).toBeDefined()
  })
})
