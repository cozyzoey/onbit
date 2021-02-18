import React from 'react'
import './EdgeBtn.scss'

function EdgeBtn({ children, onClick, variant = '' }) {
	return (
		<button className={`edge-btn ${variant}`} onClick={onClick}>
			{children}
		</button>
	)
}

export default EdgeBtn
