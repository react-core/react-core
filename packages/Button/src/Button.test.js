import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Button } from './Button'
Enzyme.configure({ adapter: new Adapter() })

describe('<Button />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<Button label={'Test Button'} />)
  })

  test('Should render', () => {
    expect(wrapper).toBeDefined()
  })
})
