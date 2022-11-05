import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateNotice } from '../../actions/noticeActions'
import Editor from '../../components/Editor'
import './NoticeUpdate.scss'

function NoticeUpdate({ match }) {
  const { notice } = useSelector((state) => state.fetchNotice)
  const dispatch = useDispatch()

  const onFormSubmit = (title, contents, fixed) => {
    dispatch(updateNotice(match.params.id, title, contents, fixed))
  }

  return (
    <div className='notice-update'>
      <Editor
        onFormSubmit={onFormSubmit}
        initials={{
          title: notice.title,
          contents: notice.contents,
          fixed: notice.fixed,
        }}
      />
    </div>
  )
}

export default NoticeUpdate
