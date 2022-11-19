import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='layout'>{children}</div>
	)
}

export default Layout
