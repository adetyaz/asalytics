import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { NavBar } from '../components'
import { Card } from '../components/Card/Card'
import { useDataRequest } from '../hooks/useDataRequest'

const Home: NextPage = () => {
	const { data, isLoading } = useDataRequest()

	return (
		<div>
			<Head>
				<title>Asalytics</title>
				<meta
					name='description'
					content='Algorand Standard Assets on ASAlytics'
				/>
				<link rel='icon' href='/logo.png' />
			</Head>

			<main>
				<NavBar />
				<section>
					<h1>List of Algorand Standard Assets on ASAlytics</h1>
					{isLoading ? (
						<div className='loader' data-testid='loader'>
							<Image src='/infinity.gif' alt='loader' height={75} width={75} />
						</div>
					) : (
						<>
							<div>
								<Card data={data?.asalist?.result} />
							</div>
						</>
					)}
				</section>
			</main>
		</div>
	)
}

export default Home
