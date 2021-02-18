import React from 'react'
import Reveal from 'react-reveal/Reveal'
import Flip from 'react-reveal/Flip'
import './SectionHeading.scss'

function SectionHeading({ children }) {
	return (
		<div className='section-heading'>
			<Reveal effect='lengthen' duration={600}>
				<span className='section-heading--deco'></span>
			</Reveal>
			<Flip right cascade delay={600} duration={1400}>
				<h3>{children}</h3>
			</Flip>
		</div>
	)
}

export default SectionHeading
