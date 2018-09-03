import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Checkbox } from './Checkbox'
Enzyme.configure({ adapter: new Adapter() })

describe('<Checkbox />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<Checkbox placeholder={'Test'} />)
  })

  test('Should render', () => {
    expect(wrapper).toBeDefined()
  })
})
