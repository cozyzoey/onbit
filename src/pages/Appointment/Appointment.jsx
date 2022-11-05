import './Appointment.scss'
import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Phone, Mail } from 'react-feather'
import SectionHeading from '../../components/SectionHeading'
import OfficeHours from '../../components/OfficeHours'
import Email from './Email'

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
      </Helmet>
      <section>
        <SectionHeading>예약문의</SectionHeading>
        <h3>
          <span>예약 및 문의는 전화나 이메일을</span>&nbsp;
          <span>이용하실 수 있습니다.</span>
        </h3>
        <div className='appointment__actions'>
          <div>
            <button
              onClick={() => document.getElementById('phone-call').click()}
            >
              <a href='tel:02-522-9730' id='phone-call'>
                <Phone size={36} />
              </a>
            </button>
            <span>전화</span>
          </div>
          <div>
            <button onClick={onEmailClick}>
              <Mail size={36} />
            </button>
            <span>이메일</span>
          </div>
        </div>
        <div className='appointment__info'>
          <div className='appointment__info__contact'>
            <h5>연락처</h5>
            <div>
              <Phone /> 02-522-9730
            </div>
            <div>
              <Mail /> contact@onbitclinic.com
            </div>
            <p>
              * 예약일 하루 전까지 예약 취소 및 변경이 가능합니다. 당일에 예약을
              취소할 경우 내원하지 않으셔도 진료비를 지불하셔야 합니다.
            </p>
          </div>
          <div className='appointment__info__office-hours'>
            <h5>진료시간</h5>
            <OfficeHours />
          </div>
        </div>
        <div className='appointment__email'>
          <div className='appointment__email__reminder'>
            <p>
              상담 내용을 메일로 보내주시면 확인후 연락드리겠습니다. 온빛의 대표
              메일과 작성해주신 메일로 함께 송부됩니다.{' '}
              <Link to='/policy'>(개인정보 처리방침)</Link>
            </p>
          </div>
          <div className='appointment__email__body' ref={emailRef}>
            <Email />
          </div>
        </div>
      </section>
    </article>
  )
}

export default Appointment
