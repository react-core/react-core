import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { TextField } from './TextField'
Enzyme.configure({ adapter: new Adapter() })

describe('<TextField />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<TextField placeholder={'Test'} />)
  })

  test('Should render', () => {
    expect(wrapper).toBeDefined()
  })
})
