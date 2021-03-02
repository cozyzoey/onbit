import React from 'react'
import { useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet'
import { createNotice } from '../../actions/noticeActions'
import Editor from '../../components/Editor'

import './NoticeCreate.scss'

function NoticeCreate() {
	const dispatch = useDispatch()

	const onFormSubmit = (title, contents, fixed) => {
		dispatch(createNotice(title, contents, fixed))
	}

	return (
		<div className='notice-create'>
			<Helmet>
				<title>글쓰기 &ndash; 온빛정신건강의학과의원</title>
				<meta name='robots' content='noindex' />
			</Helmet>
			<Editor onFormSubmit={onFormSubmit} />
		</div>
	)
}

export default NoticeCreate
