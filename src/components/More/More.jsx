import React from 'react'
import { Link } from 'react-router-dom'
import './More.scss'

function More({ to, variant = 'primary', children }) {
	return (
		<Link to={to} className={`more ${variant}`}>
			{children}
			<span className='more--deco'>&gt;</span>
		</Link>
	)
}

export default More
