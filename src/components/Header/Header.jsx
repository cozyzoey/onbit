import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import history from '../../utils/history'
import { Phone, LogOut, Edit } from 'react-feather'
import { Link, NavLink } from 'react-router-dom'
import { fetchNotices } from '../../actions/noticeActions'
import { logout } from '../../actions/userActions'
import { Logo } from '../../assets'
import OfficeHours from '../../components/OfficeHours'

import './Header.scss'

function Header() {
  const [navFullActive, setNavFullActive] = useState(false)
  const [navBarVisible, setNavBarVisible] = useState(true)

  const { notices } = useSelector((state) => state.fetchNotices)
  const { userInfo } = useSelector((state) => state.user)

  const dispatch = useDispatch()

  useEffect(() => {
    // === Catch path change
    history.listen(() => setNavFullActive(false))

    // === Check touch screen
    if (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    ) {
      setNavBarVisible(false)
    } else {
      if (navFullActive) {
        setNavBarVisible(false)
      } else {
        setNavBarVisible(true)
      }
    }

    // === Check initial screen width
    if (window.screen.width < 700) {
      setNavBarVisible(false)
      return
    }

    // === Check screen width when resized
    const onResize = () => {
      window.screen.width > 700
        ? setNavBarVisible(true)
        : setNavBarVisible(false)
    }

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [navFullActive])

  useEffect(() => {
    !notices && dispatch(fetchNotices())
  }, [notices, dispatch])

  return (
    <header className='header'>
      <Link to='/' className='header__logo'>
        <Logo />
        정신건강의학과
      </Link>
      <nav
        className={navBarVisible ? 'header__navbar' : 'header__navbar hidden'}
      >
        <div className='header__dropdown'>
          <button className='header__dropdown__btn'>온빛소개</button>
          <div className='header__dropdown__contents'>
            <NavLink to='/features'>온빛의특징</NavLink>
            <NavLink to='/staff'>의료진소개</NavLink>
            <NavLink to='/interior'>공간소개</NavLink>
          </div>
        </div>
        <div className='header__dropdown'>
          <button className='header__dropdown__btn'>진료안내</button>
          <div className='header__dropdown__contents'>
            <NavLink to='/treatment'>진료과목</NavLink>
            <NavLink to='/process'>진료과정</NavLink>
            <NavLink to='/personal-therapy'>개인정신치료</NavLink>
            <NavLink to='/group-therapy'>그룹정신치료</NavLink>
          </div>
        </div>
        <div className='header__dropdown'>
          <button className='header__dropdown__btn'>예약안내</button>
          <div className='header__dropdown__contents'>
            <NavLink to='/appointment'>예약문의</NavLink>
            <NavLink to='/notices/page/1'>공지사항</NavLink>
            <NavLink to='/map'>오시는길</NavLink>
          </div>
        </div>
      </nav>

      <button
        className={navFullActive ? 'header__navicon active' : 'header__navicon'}
        onClick={() => setNavFullActive(!navFullActive)}
        aria-label='전체메뉴'
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
      {userInfo && (
        <div className='header__admin'>
          <div title='공지작성' onClick={() => history.push('/notices/new')}>
            <Edit />
          </div>
          <div title='로그아웃' onClick={() => dispatch(logout())}>
            <LogOut />
          </div>
        </div>
      )}
      <div
        className={navFullActive ? 'header__navfull active' : 'header__navfull'}
      >
        <div className='header__navfull--box'>
          <nav className='header__navfull__menu'>
            <div>
              <span>온빛소개</span>
              <ul>
                <li>
                  <NavLink to='/features'>온빛의특징</NavLink>
                </li>
                <li>
                  <NavLink to='/staff'>의료진소개</NavLink>
                </li>
                <li>
                  <NavLink to='/interior'>공간소개</NavLink>
                </li>
              </ul>
            </div>
            <div>
              <span>진료안내</span>
              <ul>
                <li>
                  <NavLink to='/treatment'>진료과목</NavLink>
                </li>
                <li>
                  <NavLink to='/process'>진료과정</NavLink>
                </li>
                <li>
                  <NavLink to='/personal-therapy'>개인정신치료</NavLink>
                </li>
                <li>
                  <NavLink to='/group-therapy'>그룹정신치료</NavLink>
                </li>
              </ul>
            </div>
            <div>
              <span>예약안내</span>
              <ul>
                <li>
                  <NavLink to='/appointment'>예약문의</NavLink>
                </li>
                <li>
                  <NavLink to='/notices/page/1'>공지사항</NavLink>
                </li>
                <li>
                  <NavLink to='/map'>오시는길</NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <hr></hr>
          <div className='header__navfull__contact'>
            <div className='header__navfull__contact__reminder'>
              <p>
                <span>저희 의원에 예약 없이 방문하실 경우</span>&nbsp;
                <span>대기시간이 길어지거나</span>
              </p>
              <p>진료에 어려움이 있을 수 있으니 예약 후 방문 바랍니다.</p>
            </div>
            <section>
              <div className='header__navfull__contact__info'>
                <div className='header__navfull__contact__info__hours'>
                  <h4>진료시간</h4>
                  <OfficeHours />
                </div>
                {notices && notices[0] && (
                  <div className='header__navfull__contact__info__notice'>
                    <h4>공지사항</h4>
                    <div>
                      <Link to={`/notices/${notices[0].id}`}>
                        {notices[0].title}
                      </Link>
                      <span>
                        {notices[0].createdAt
                          .toDate()
                          .toLocaleDateString('ko-KR')}
                      </span>
                    </div>
                  </div>
                )}
                <div className='header__navfull__contact__info__link'>
                  <Phone />
                  <a href='tel:02-522-9730'>02-522-9730 &nbsp;&gt;</a>
                </div>
              </div>
              <div className='header__navfull__contact__map'>
                <img
                  src={`https://naveropenapi.apigw.ntruss.com/map-static/v2/raster-cors?w=300&h=300&&markers=type:d|size:tiny|color:0xF8F8F8|pos:126.9976%2037.481&markers=type:d|size:mid|color:0xf7c3ad|pos:126.99705%2037.48335&X-NCP-APIGW-API-KEY-ID=${process.env.REACT_APP_MAP_CLIENT_ID}&format=png`}
                  alt='온빛정신건강의학과의원 네이버 지도'
                  width='300px'
                  height='300px'
                  loading='lazy'
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
