import { render } from '@testing-library/react'
import { NavBar } from './NavBar'

test('Navbar component should render', () => {
	const view = render(<NavBar />)
	expect(view).toMatchSnapshot()
})
