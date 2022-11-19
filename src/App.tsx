import {
	Header,
	Breadcrumbs,
	Card,
	Search,
	Title,
	Container
} from './components/'

import newsImage from './assets/news.jpg'

function App() {
	return (
		<>
			<Header />
			<Breadcrumbs />
			<Container>
				<div className='layout-head'>
					<Title size={30}>Новости</Title>
					<Search />
				</div>
				<Card
					imgSrc={newsImage}
					date='14 Января 2008'
					title='Линия Сталина: суровый отдых в усадьбах на сутки'
					text='Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...'
				/>
			</Container>
		</>
	)
}

export default App
