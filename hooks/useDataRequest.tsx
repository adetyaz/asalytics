import { useQuery } from 'react-query'
import { request, gql } from 'graphql-request'

const endpoint = 'https://analytics-api.herokuapp.com/analytics'

export const useDataRequest = () => {
	return useQuery('asalyticsData', async () => {
		const data = await request(
			endpoint,
			gql`
				query {
					asalist {
						result {
							name
							logo
							available
							assetId
						}
					}
				}
			`
		)
		return data
	})
}
