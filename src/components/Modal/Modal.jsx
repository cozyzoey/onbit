import React from 'react'
import './Modal.scss'

function Modal({ onDismiss, title, children, actions }) {
	return (
		<div onClick={onDismiss} className='modal-full'>
			<div onClick={(e) => e.stopPropagation()} className='modal'>
				<div className='modal__title'>{title}</div>
				<div className='modal__content'>{children}</div>
				<div className='modal__actions'>{actions}</div>
			</div>
		</div>
	)
}

export default Modal
