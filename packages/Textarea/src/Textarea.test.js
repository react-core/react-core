import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Textarea } from './Textarea'
Enzyme.configure({ adapter: new Adapter() })

describe('<Textarea />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<Textarea placeholder={'Test'} />)
  })

  test('Should render', () => {
    expect(wrapper).toBeDefined()
  })
})
