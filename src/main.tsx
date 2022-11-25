import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />
	},
	{
		path: '/tariffs',
		element: <App />
	},
	{
		path: '/main',
		element: <App />
	}
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<RouterProvider router={router} />
)
