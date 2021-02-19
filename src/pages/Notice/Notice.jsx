import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'
import parse from 'html-react-parser'
import history from '../../utils/history'
import { User, Eye, Calendar } from 'react-feather'
import { fetchNotice, deleteNotice } from '../../actions/noticeActions'
import Modal from '../../components/Modal'
import BasicBtn from '../../components/BasicBtn'
import SectionHeading from '../../components/SectionHeading'
import './Notice.scss'

function Notice({ match, location }) {
	const [deleteOpen, setDeleteOpen] = useState(false)
	const { notice } = useSelector((state) => state.fetchNotice)
	const { userInfo } = useSelector((state) => state.user)
	const { loading } = useSelector((state) => state.deleteNotice)

	const dispatch = useDispatch()

	const destPage = location.search ? location.search.split('=')[1] : '1'

	useEffect(() => {
		dispatch(fetchNotice(match.params.id))
	}, [dispatch, match])

	const renderNoticeBody = () => {
		const { title, name, createdAt, hits, contents } = notice
		return (
			<>
				<div className='notice__header'>
					<div className='notice__header__title'>{title}</div>
					<div className='notice__header__info'>
						<div>
							<User />
							{name}
						</div>
						<div>
							<Calendar />
							{createdAt.toDate().toLocaleDateString('ko-KR')}
						</div>
						<div>
							<Eye />
							{hits}
						</div>
					</div>
				</div>
				<hr></hr>
				<div className='notice__contents'>{parse(contents)}</div>
			</>
		)
	}

	const renderDeleteModal = () => {
		const renderActions = () => {
			return (
				<>
					<BasicBtn onClick={() => setDeleteOpen(false)} variant='secondary'>
						취소
					</BasicBtn>
					<BasicBtn
						onClick={() => dispatch(deleteNotice(notice.id))}
						variant='warning'
						disabled={loading}
					>
						삭제
					</BasicBtn>
				</>
			)
		}

		return (
			<Modal
				title='게시글 삭제'
				actions={renderActions()}
				onDismiss={() => setDeleteOpen(false)}
			>
				<div>"{notice.title}"을 삭제하시겠습니까?</div>
			</Modal>
		)
	}

	return (
		<div className='notice'>
			<Helmet>
				<title>공지사항 &ndash; 온빛정신건강의학과의원</title>
				<meta
					name='description'
					content='휴무일 안내, 병원소식 등 공지사항을 전합니다.'
				/>
				<meta name='robots' content='noindex, nofollow' />
			</Helmet>
			<section>
				<SectionHeading>공지사항</SectionHeading>
				{notice && renderNoticeBody()}
				{deleteOpen && renderDeleteModal()}
				<div className='notice__actions'>
					<BasicBtn
						variant='secondary'
						onClick={() => history.push(`/notices/page/${destPage}`)}
					>
						목록보기
					</BasicBtn>
					{userInfo && (
						<div>
							<BasicBtn
								variant='secondary'
								onClick={() => history.push(`/notices/edit/${match.params.id}`)}
							>
								수정
							</BasicBtn>
							<BasicBtn variant='warning' onClick={() => setDeleteOpen(true)}>
								삭제
							</BasicBtn>
						</div>
					)}
				</div>
			</section>
		</div>
	)
}

export default Notice
