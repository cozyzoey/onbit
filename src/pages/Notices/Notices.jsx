import './Notices.scss'
import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { User, Eye, Calendar } from 'react-feather'
import { nanoid } from 'nanoid'
import { ChevronsRight } from 'react-feather'
import SectionHeading from '../../components/SectionHeading'
import { fetchNotices } from '../../actions/noticeActions'

function Notices({ match }) {
	const [total, setTotal] = useState(0)
	const [smallScreen, setSmallScreen] = useState(false)
	const { notices, query } = useSelector((state) => state.fetchNotices)

	const dispatch = useDispatch()
	const per = 2 // === 10 notices per page

	useEffect(() => {
		window.scrollTo(0, 0)
		document.title = '공지사항 – 온빛정신건강의학과의원'

		// === Check initial screen width
		if (window.screen.width < 600) {
			setSmallScreen(true)
			return
		}

		// === Check screen width when resized
		const onResize = () => {
			window.screen.width > 600 ? setSmallScreen(false) : setSmallScreen(true)
		}

		window.addEventListener('resize', onResize)

		return () => {
			window.removeEventListener('resize', onResize)
		}
	}, [])

	useEffect(() => {
		!notices && dispatch(fetchNotices())
	}, [dispatch, notices])

	useEffect(() => {
		notices && setTotal(notices.filter((notice) => !notice.fixed).length)
	}, [notices?.length, query])

	const renderFixedNotices = () => {
		const fixed = notices?.filter((notice) => notice.fixed)

		const renderSmallScreen = () => {
			return fixed.map((notice, index) => (
				<div
					key={notice.id}
					className='notices__table__row--small notices__table--fixed'
				>
					<Link
						to={`/notices/${notice.id}?page=${match.params.page}`}
						className='notices__table__title'
					>
						{notice.title}
					</Link>
					<div className='notices__table__info'>
						<span>
							<User />
							{notice.name}
						</span>
						<span>
							<Calendar />
							{notice.createdAt.toDate().toLocaleDateString('ko-KR')}
						</span>
						<span>
							<Eye />
							{notice.hits}
						</span>
					</div>
				</div>
			))
		}

		const renderWideScreen = () => {
			return fixed.map((notice, index) => (
				<div
					key={notice.id}
					className='notices__table__row--wide notices__table--fixed'
				>
					<span className='notices__table__no'>공지</span>
					<Link
						to={`/notices/${notice.id}?page=${match.params.page}`}
						className='notices__table__title'
					>
						{notice.title}
					</Link>
					<span className='notices__table__name'>{notice.name}</span>
					<span className='notices__table__date'>
						{notice.createdAt.toDate().toLocaleDateString('ko-KR')}
					</span>
					<span className='hits'>{notice.hits}</span>
				</div>
			))
		}

		return smallScreen ? renderSmallScreen() : renderWideScreen()
	}

	const renderUnfixedNotices = () => {
		const page = match.params.page
		const unfixed = notices
			.filter((notice) => !notice.fixed)
			.slice((page - 1) * per, page * per)

		const renderSmallScreen = () => {
			return unfixed.map((notice, index) => (
				<div
					key={notice.id}
					className='notices__table__row--small notices__table--unfixed'
				>
					<Link
						to={`/notices/${notice.id}?page=${match.params.page}`}
						className='notices__table__title'
					>
						{notice.title}
					</Link>
					<div className='notices__table__info'>
						<span>
							<User />
							{notice.name}
						</span>
						<span>
							<Calendar />
							{notice.createdAt.toDate().toLocaleDateString('ko-KR')}
						</span>
						<span>
							<Eye />
							{notice.hits}
						</span>
					</div>
				</div>
			))
		}

		const renderWideScreen = () => {
			return unfixed.map((notice, index) => (
				<div
					key={notice.id}
					className='notices__table__row--wide notices__table--unfixed'
				>
					<span className='notices__table__no'>
						{total - (page - 1) * per - index}
					</span>
					<Link
						to={`/notices/${notice.id}?page=${match.params.page}`}
						className='notices__table__title'
					>
						{notice.title}
					</Link>
					<span className='notices__table__name'>{notice.name}</span>
					<span className='notices__table__date'>
						{notice.createdAt.toDate().toLocaleDateString('ko-KR')}
					</span>
					<span className='hits'>{notice.hits}</span>
				</div>
			))
		}

		return smallScreen ? renderSmallScreen() : renderWideScreen()
	}

	const renderPagination = () => {
		const page = match.params.page
		const pages = Math.ceil(total / per)

		return (
			<div className='notices__actions'>
				{new Array(pages).fill(0).map((item, index) => (
					<NavLink
						to={`/notices/page/${index + 1}`}
						key={nanoid(10)}
						className='notices__actions__page'
						activeClassName='notices__actions--active'
					>
						{index + 1}
					</NavLink>
				))}
				<Link
					to={`/notices/page/${pages}`}
					className='notices__actions__page'
					title='마지막'
				>
					<ChevronsRight />
				</Link>
			</div>
		)
	}

	return (
		<div className='notices'>
			<section>
				<SectionHeading>공지사항</SectionHeading>
				<div className='notices__table'>
					{!smallScreen && (
						<div className='notices__table__row--wide notices__table--header'>
							<span className='notices__table__no'>번호</span>
							<span className='notices__table__title'>제&nbsp;&nbsp;목</span>
							<span className='notices__table__name'>작성자</span>
							<span className='notices__table__date'>작성일</span>
							<span className='notices__table__hits'>조회수</span>
						</div>
					)}
					{notices && renderFixedNotices()}
					{notices && renderUnfixedNotices()}
				</div>
				{total > 0 && renderPagination()}
			</section>
		</div>
	)
}

export default Notices
