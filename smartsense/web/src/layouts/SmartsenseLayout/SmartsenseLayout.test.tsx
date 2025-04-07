import { render } from '@redwoodjs/testing/web'

import SmartsenseLayout from './SmartsenseLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SmartsenseLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SmartsenseLayout />)
    }).not.toThrow()
  })
})
