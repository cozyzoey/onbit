import React from 'react'
import { useDispatch } from 'react-redux'
import { createNotice } from '../../actions/noticeActions'
import Editor from '../../components/Editor'

import './NoticeCreate.scss'

function NoticeCreate() {
	const dispatch = useDispatch()

	const onFormSubmit = (title, contents, tags, fixed) => {
		dispatch(createNotice(title, contents, tags, fixed))
	}

	return (
		<div className='notice-create'>
			<Editor onFormSubmit={onFormSubmit} />
		</div>
	)
}

export default NoticeCreate
