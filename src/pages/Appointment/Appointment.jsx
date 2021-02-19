import React, { useRef, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Phone, Mail, MessageCircle } from 'react-feather'
import SectionHeading from '../../components/SectionHeading'
import OfficeHours from '../../components/OfficeHours'
import Email from './Email'
import './Appointment.scss'

function Appointment() {
	const emailRef = useRef()

	useEffect(() => {
		window.scrollTo(0, 0)
		document.title = '예약문의 – 온빛정신건강의학과의원'
	}, [])

	const onEmailClick = () => {
		document.getElementById('email-name-field').focus()
		emailRef.current.scrollIntoView({
			behavior: 'smooth',
			block: 'center',
			inline: 'nearest',
		})
	}

	return (
		<article className='appointment'>
			<Helmet>
				<title>예약문의 &ndash; 온빛정신건강의학과의원</title>
				<meta
					name='description'
					content='전화, 채팅상담, 이메일을 통해 문의 및 예약이 가능합니다.'
				/>
				<meta name='robots' content='noindex, nofollow' />
			</Helmet>
			<section>
				<SectionHeading>예약문의</SectionHeading>
				<h3>
					<span>예약과 문의는 전화나 채팅상담, 이메일을</span>&nbsp;
					<span>이용하실 수 있습니다.</span>
				</h3>
				<div className='appointment__actions'>
					<div>
						<button
							onClick={() => document.getElementById('phone-call').click()}
						>
							<a href='tel:+82-2-522-9730' id='phone-call'>
								<Phone size={36} />
							</a>
						</button>
						<span>전화</span>
					</div>
					<div>
						<button onClick={() => window.ChannelIO('showMessenger')}>
							<MessageCircle size={36} />
						</button>
						<span>채팅상담</span>
					</div>
					<div>
						<button onClick={onEmailClick}>
							<Mail size={36} />
						</button>
						<span>이메일</span>
					</div>
				</div>
				<p>
					<span>
						피치 못한 사정이 있을 경우 예약 전일 이전에 연락주시면 예약 취소
						내지 변경이 가능합니다.
					</span>
					<span>
						당일 예약취소는 불가능하며, 이 경우 내원하지 않으셔도 진료비를
						지불하셔야 합니다.
					</span>
				</p>
				<div className='appointment__info'>
					<div className='appointment__info__contact'>
						<h5>연락처</h5>
						<span>
							<Phone size={18} /> 02-522-9730
						</span>
						<span>
							<MessageCircle size={18} /> 홈페이지 우측 하단 채널톡
						</span>
						<span>
							<Mail size={18} /> onbitclinic@gmail.com
						</span>
					</div>
					<div className='appointment__info__office-hours'>
						<h5>진료시간</h5>
						<OfficeHours />
					</div>
				</div>
				<div className='appointment__email'>
					<div>
						<p>
							<span>상담 내용을 메일로 보내주시면</span>&nbsp;
							<span>확인후 연락드리겠습니다.</span>
						</p>
						<p>
							<span>온빛의 대표 메일과 작성해주신 메일로</span>&nbsp;
							<span>함께 송부됩니다.</span>
						</p>
					</div>
					<div ref={emailRef}>
						<Email />
					</div>
				</div>
			</section>
		</article>
	)
}

export default Appointment
