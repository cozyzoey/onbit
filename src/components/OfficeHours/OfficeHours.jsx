import React from 'react'
import './OfficeHours.scss'

function OfficeHours() {
	return (
		<div className='office-hours'>
			<div className='office-hours--row'>
				<div className='office-hours__title'>월, 수, 금</div>
				10:00 ~ 17:00
			</div>
			<div className='office-hours--row'>
				<div className='office-hours__title'>화, 목</div>
				10:00 ~ 19:00
			</div>
			<div className='office-hours--row'>
				<div className='office-hours__title'>토</div>
				10:00 ~ 13:00
			</div>
			<div className='office-hours--row'>
				<div className='office-hours__title'>점심시간</div>
				13:00 ~ 14:00
			</div>
		</div>
	)
}

export default OfficeHours
