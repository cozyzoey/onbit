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
						<Mail size={14} /> onbitclinic@gmail.com
					</span>
					<span title='주소'>
						<MapPin size={14} /> 서울 서초구 효령료33길 45 301호
					</span>
					<span>
						<span>대표자</span> 박노연
					</span>
					<span>
						<span>사업자등록번호</span> 566-91-01642
					</span>
				</div>
			</div>
			<hr></hr>
			<div className='footer--bottom'>
				<span>
					Copyright &copy; {new Date().getFullYear()} by 온빛정신건강의학과의원
				</span>
				<span>
					<Link to='/policy'>개인정보 처리방침</Link>
				</span>
			</div>
		</footer>
	)
}

export default Footer
