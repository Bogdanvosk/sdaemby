import { Breadcrumbs, Search, Title, Cards } from './components/'

import Layout from './components/Layout/Layout'
import { useEffect, useState } from 'react'

import axios from 'axios'

function App() {
	const [news, setNews] = useState([])

	useEffect(() => {
		axios
			.get('http://localhost:3000/news')
			.then(({ data }) => setNews(data))
	}, [])
	return (
		<>
			<Layout>
				<div className='news'>
					<Breadcrumbs />
					<div className='layout-head'>
						<Title size={30}>Новости</Title>
						<Search />
					</div>
					<Cards news={news} />
				</div>
			</Layout>
		</>
	)
}

export default App
