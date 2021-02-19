import './Personal.scss'
import React, { useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import SectionHeading from '../../components/SectionHeading'
import { personal } from '../../assets'

function Personal() {
	useEffect(() => {
		window.scrollTo(0, 0)
		document.title = '개인정신치료 – 온빛정신건강의학과의원'
	}, [])

	return (
		<article className='personal'>
			<section>
				<SectionHeading>개인정신치료</SectionHeading>
				<div className='personal__desc'>
					<Fade bottom cascade delay={1200}>
						<p>
							치료자와 1:1로 회기당 45분, 주 1-3회씩 면담치료가 이루어집니다.
						</p>
						<p>
							면담 시간 중의 대화를 통하여 치료자와 환자가 함께 환자의 어린
							시절부터 무의식 중에 형성된 행동이나 생각의 방식/패턴을 이해해
							가고, 본인에 대한 이해를 토대로 삶의 방식/패턴을 교정해가게
							됩니다.
						</p>
						<p>
							환자 홀로 치료자의 집중을 받아 진행된다는 장점이 있으며 다른
							사람에 대한 경계심이 많거나 어울리기 어려운 환자들도 진행
							가능합니다.
						</p>
					</Fade>
				</div>
				<div className='personal__img'>
					<picture>
						<source type='image/webp' srcSet={personal.webp} />
						<source type='image/jpeg' srcSet={personal.jpg} />
						<img
							src={personal.jpg}
							alt={personal.alt}
							width='100%'
							height='100%'
						/>
					</picture>
				</div>
			</section>
		</article>
	)
}

export default Personal
