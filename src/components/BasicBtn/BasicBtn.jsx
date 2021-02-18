import React from 'react'
import './BasicBtn.scss'

function BasicBtn({ variant = 'info', type, onClick, disabled, children }) {
	return (
		<button
			className={`basic-btn ${variant}`}
			type={type}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	)
}

export default BasicBtn
