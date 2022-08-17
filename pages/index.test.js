import { render, screen, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'

import Home from './index'

test('The Home page should render', async () => {
	const queryClient = new QueryClient()
	const wrapper = ({ children }) => (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)

	render(<Home />, { wrapper })
	// await screen.getByTestId('loader').toBeVisible()
})
