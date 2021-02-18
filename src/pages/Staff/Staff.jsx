import React, { useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import SectionHeading from '../../components/SectionHeading'
import { profile } from '../../assets'
import './Staff.scss'

function Staff() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<article className='staff'>
			<section>
				<SectionHeading>의료진소개</SectionHeading>
				<div className='staff__img'>
					<picture>
						<source type='image/webp' srcSet={profile.webp} />
						<source type='image/jpeg' srcSet={profile.jpg} />
						<img
							src={profile.jpg}
							alt={profile.alt}
							width='100%'
							height='auto'
						/>
					</picture>
				</div>
				<div className='staff__desc'>
					<Fade right cascade delay={500}>
						<h3>박노연 대표원장</h3>
					</Fade>
					<Fade bottom cascade delay={1000}>
						<ul>
							<li>정신건강의학과 전문의</li>
							<li>서울대학교병원 인턴, 전공의 수련</li>
							<li>서울대학교 의학박사</li>
							<li>서울대학교 의학전문대학원 졸업</li>
							<li>서울대학교 생명과학부 졸업</li>
						</ul>
					</Fade>
				</div>
			</section>
		</article>
	)
}

export default Staff
