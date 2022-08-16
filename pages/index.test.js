import { render, screen } from '@testing-library/react'

import Home from './index'

test('The Home page should render', () => {
	const view = render(<Home />)
	expect(view).toMatchSnapshot()
})
