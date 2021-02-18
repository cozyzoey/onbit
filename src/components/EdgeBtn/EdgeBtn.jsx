import React from 'react'
import './EdgeBtn.scss'

function EdgeBtn({ children, onClick, variant = '', disabled = false }) {
	return (
		<button
			className={`edge-btn ${variant}`}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	)
}

export default EdgeBtn
