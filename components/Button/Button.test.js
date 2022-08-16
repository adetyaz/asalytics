import { render } from '@testing-library/react'
import { Button } from './Button'

test('The Button component should render', () => {
	const view = render(<Button />)
	expect(view).toMatchSnapshot()
})
