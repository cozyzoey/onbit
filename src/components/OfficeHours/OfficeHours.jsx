import React from 'react'
import './OfficeHours.scss'

function OfficeHours() {
	return (
		<div className='office-hours'>
			<div className='office-hours--row'>
				<div className='office-hours__title'>월 ~ 금</div>
				10:00 ~ 18:00
			</div>
			<div className='office-hours--row'>
				<div className='office-hours__title'>토요일</div>
				10:00 ~ 14:00 (점심시간 없음)
			</div>
			<div className='office-hours--row'>
				<div className='office-hours__title'>점심시간</div>
				13:00 ~ 14:00
			</div>
		</div>
	)
}

export default OfficeHours
