import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { forest } from '../../assets'
import './Process.scss'

function Process() {
	const [sourceLoaded, setSourceLoaded] = useState('')
	const [activeStep, setActiveStep] = useState(1)

	const onScroll = () => {
		const scroll = window.pageYOffset
		const height = window.innerHeight

		if (scroll < height * 0.5) setActiveStep(1)
		if (scroll > height * 0.5 && scroll < height * 1.5) setActiveStep(2)
		if (scroll > height * 1.5 && scroll < height * 2.5) setActiveStep(3)
		if (scroll > height * 2.5 && scroll < height * 3.5) setActiveStep(4)
		if (scroll > height * 3.5 && scroll < height * 4.5) setActiveStep(5)
	}

	useEffect(() => {
		window.scrollTo(0, 0)

		const img = new Image()
		if (window.innerWidth < 640) {
			img.src = forest.src640
			img.onload = () => setSourceLoaded(forest.src640)
		} else if (window.innerWidth < 1280) {
			img.src = forest.src1280
			img.onload = () => setSourceLoaded(forest.src1280)
		} else {
			img.src = forest.src1920
			img.onload = () => setSourceLoaded(forest.src1920)
		}

		window.addEventListener('scroll', onScroll, { passive: true })

		return () => {
			window.removeEventListener('scroll', onScroll)
		}
	}, [])

	return (
		<article className='process'>
			<Helmet>
				<title>진료과정 &ndash; 온빛정신건강의학과의원</title>
			</Helmet>
			<section
				className='process__chart'
				style={{
					backgroundImage: `url(${sourceLoaded || ''})`,
					opacity: sourceLoaded ? 1 : 0,
				}}
			>
				<ul>
					<li
						className='active'
						onClick={() =>
							window.scrollTo({
								left: 0,
								top: 0,
								behavior: 'smooth',
							})
						}
					>
						예약
					</li>
					<li
						className={activeStep >= 2 ? 'active' : ''}
						onClick={() =>
							window.scrollTo({
								left: 0,
								top: window.innerHeight,
								behavior: 'smooth',
							})
						}
					>
						초기면담
					</li>
					<li
						className={activeStep >= 3 ? 'active' : ''}
						onClick={() =>
							window.scrollTo({
								left: 0,
								top: window.innerHeight * 2,
								behavior: 'smooth',
							})
						}
					>
						치료계획
					</li>
					<li
						className={activeStep >= 4 ? 'active' : ''}
						onClick={() =>
							window.scrollTo({
								left: 0,
								top: window.innerHeight * 3,
								behavior: 'smooth',
							})
						}
					>
						치료진행
					</li>

					<li
						className={activeStep >= 5 ? 'active' : ''}
						onClick={() =>
							window.scrollTo({
								left: 0,
								top: window.innerHeight * 5,
								behavior: 'smooth',
							})
						}
					>
						종결
					</li>
				</ul>
			</section>
			<div className='process__steps'>
				<section className='process__step'>
					<div className='process__step__content'>
						<h2>예약</h2>
						<p>
							‘진료과목’ 및 ‘온빛의 특징’의 내용을 확인한 후 면담치료를 받아보고
							싶다 마음을 정하셨다면 ‘예약문의’에 안내되어 있는 전화, 채팅 상담,
							또는 병원 이메일을 통해 예약이 가능합니다. 당일예약은
							불가능합니다.
						</p>
					</div>
				</section>
				<section className='process__step'>
					<div className='process__step__content'>
						<h2>초기면담</h2>
						<p>
							초반 몇 회기 정도의 예비 면담을 통해 심리적 어려움에 대한 구체적
							이해를 하게 되며, 이를 통해 추후에 치료 목표와 계획을 상의합니다.
						</p>
					</div>
				</section>
				<section className='process__step'>
					<div className='process__step__content'>
						<h2>치료계획</h2>
						<p>
							초기면담을 통해 진단명을 포함한 환자의 전반적인 상태를 설명하며,
							약물치료나 검사도 추가적으로 필요할지에 대해서 알려드립니다.
							면담치료를 진행해도 될지, 한다면 어떠한 치료목표를 가지고 어느
							정도의 빈도와 기간 동안 치료가 필요할지에 대해 계획을 세웁니다.
						</p>
					</div>
				</section>
				<section className='process__step'>
					<div className='process__step__content'>
						<h2>치료진행</h2>
						<p>
							치료계획에 따라 회기당 45분, 주 1-3회씩 면담치료를 진행하게
							됩니다. 면담 시간 중의 대화를 통하여 치료자와 환자가 함께 환자의
							어린 시절부터 무의식 중에 형성된 행동이나 생각의 방식/패턴을
							이해해 가고, 본인에 대한 이해를 토대로 삶의 방식/패턴을 교정해가게
							됩니다.
						</p>
					</div>
				</section>
				<section className='process__step'>
					<div className='process__step__content'>
						<h2>종결</h2>
						<p>
							불편했던 증상이 소실되고 치료목표에 도달하면 종결을 논의하는
							과정을 갖습니다. 치료기간 동안 이루어진 변화와 과정을 돌아보며,
							치료를 종결한 이후에 걱정되는 부분에 대해서 충분히 논의하는 시간을
							가진 후 마음의 준비가 되었을 때 종결을 하게 됩니다.
						</p>
					</div>
				</section>
			</div>
		</article>
	)
}

export default Process
