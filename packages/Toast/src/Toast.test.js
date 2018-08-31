import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ToastContainer } from './Toast'
Enzyme.configure({ adapter: new Adapter() })

describe('<Toast />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<ToastContainer hideProgressBar />)
  })

  test('Should render', () => {
    expect(wrapper).toBeDefined()
  })
})
