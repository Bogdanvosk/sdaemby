import React from 'react'
import Container from '../Container/Container'
import Header from '../Header/Header'

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Header />
			<Container>{children}</Container>
			{/* <Footer /> */}
		</>
	)
}

export default Layout
