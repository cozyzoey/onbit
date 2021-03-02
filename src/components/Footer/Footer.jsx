import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MessageCircle, MapPin, Printer } from 'react-feather'
import { Logo } from '../../assets'
import './Footer.scss'

function Footer() {
	return (
		<footer className='footer'>
			<div className='footer--top'>
				<div className='footer__logo'>
					<Logo />
					<span>온빛정신건강의학과의원</span>
				</div>
				<div className='footer__contents'>
					<span title='전화'>
						<Phone size={14} /> 02-522-9730
					</span>
					<span title='팩스'>
						<Printer size={14} /> 02-522-9731
					</span>
					<span title='이메일'>
						<Mail size={14} /> contact@onbitclinic.com
					</span>
					<span title='주소'>
						<MapPin size={14} /> <span>서울 서초구 효령로33길 45</span>
						&nbsp;
						<span>(KH빌딩 3층)</span>
					</span>
					<span>
						<span className='footer__contents__title'>대표자</span> 박노연
					</span>
					<span>
						<span className='footer__contents__title'>사업자등록번호</span>{' '}
						566-91-01642
					</span>
				</div>
			</div>
			<hr></hr>
			<div className='footer--bottom'>
				<span>
					Copyright &copy; {new Date().getFullYear()} by 온빛정신건강의학과의원
				</span>
				<span className='footer--bottom__policy'>
					<Link to='/policy'>개인정보 처리방침</Link>
				</span>
			</div>
		</footer>
	)
}

export default Footer
