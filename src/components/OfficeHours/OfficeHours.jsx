import React from 'react'
import './OfficeHours.scss'

function OfficeHours() {
  return (
    <div className="office-hours">
      <div className="office-hours--row">
        <div className="office-hours__title">월 ~ 금</div>
        10:00 ~ 18:00
      </div>
      <div className="office-hours--row">
        <div className="office-hours__title">토요일</div>
        <span>10:00 ~ 14:00</span>&nbsp;<span>(점심시간 없음)</span>
      </div>
      <div className="office-hours--row">
        <div className="office-hours__title">점심시간</div>
        13:00 ~ 14:00
      </div>
      <div className="office-hours__holiday">일요일&middot;공휴일 휴진</div>
    </div>
  )
}

export default OfficeHours
