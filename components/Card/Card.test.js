import { render, screen } from '@testing-library/react'
import { Card } from './Card'

test('The Card component should render', () => {
	const view = render(<Card />)
	expect(view).toMatchSnapshot()
})
