import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { TabView } from './TabView'
Enzyme.configure({ adapter: new Adapter() })

describe('<TabView />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<TabView />)
  })

  test('Should render', () => {
    expect(wrapper).toBeDefined()
  })
})
