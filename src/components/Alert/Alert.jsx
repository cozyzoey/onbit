import React from 'react'
import { CheckCircle, Info } from 'react-feather'
import './Alert.scss'

function Alert({ variant, children }) {
	switch (variant) {
		case 'success':
			return (
				<div className='alert success'>
					<CheckCircle className='alert__icon' />
					{children}
				</div>
			)
		case 'info':
			return (
				<div className='alert info'>
					<Info className='alert__icon' />
					{children}
				</div>
			)
		case 'warning':
			return (
				<div className='alert warning'>
					<Info className='alert__icon' />
					{children}
				</div>
			)
		case 'error':
			return (
				<div className='alert error'>
					<Info className='alert__icon' />
					{children}
				</div>
			)
		default:
			return ''
	}
}

export default Alert
