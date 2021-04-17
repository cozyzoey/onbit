import './Features.scss'
import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import Fade from 'react-reveal/Fade'
import SectionHeading from '../../components/SectionHeading'
import { sunlight, features } from '../../assets'

function Features() {
	const [sourceLoaded, setSourceLoaded] = useState(null)
	const parallaxRef = useRef()

	useEffect(() => {
		window.scrollTo(0, 0)

		// === Style parallax depending on screen aspect ratio
		const onResize = () => {
			const styleSmall = (imgSrc) => {
				parallaxRef.current.style.backgroundSize = '130vw auto'
				parallaxRef.current.style.backgroundPosition = 'center top'
			}
			const styleWide = (imgSrc) => {
				parallaxRef.current.style.backgroundSize = 'cover'
				parallaxRef.current.style.backgroundPosition = 'center bottom'
			}
			const style = (imgSrc) => {
				const img = new Image()
				img.src = imgSrc
				img.onload = () => setSourceLoaded(imgSrc)

				window.screen.width < window.screen.height
					? styleSmall(imgSrc)
					: styleWide(imgSrc)
			}

			if (window.screen.width < 640) {
				style(sunlight.src640)
			} else if (window.screen.width < 1280) {
				style(sunlight.src1280)
			} else if (window.screen.width < 1920) {
				style(sunlight.src1920)
			} else {
				style(sunlight.src1920)
			}
		}

		// Initial excecute
		onResize()

		window.addEventListener('resize', onResize)

		return () => {
			window.removeEventListener('resize', onResize)
		}
	}, [])

	const renderImg = (img) => {
		return (
			<Fade bottom duration={2000}>
				<picture>
					<source type='image/webp' srcSet={img.webp} />
					<source type='image/jpeg' srcSet={img.jpg} />
					<img
						src={img.jpg}
						alt={img.alt}
						width='100%'
						height='100%'
						loading='lazy'
					/>
				</picture>
			</Fade>
		)
	}

	return (
		<article className='features'>
			<Helmet>
				<title>온빛의특징 &ndash; 온빛정신건강의학과의원</title>
			</Helmet>
			<div
				className='features__parallax'
				ref={parallaxRef}
				style={{
					backgroundImage: `url(${sourceLoaded || ''})`,
					opacity: sourceLoaded ? 1 : 0,
				}}
			></div>
			<div className='features__intro'>
				<SectionHeading>온빛의 특징</SectionHeading>
				<Fade bottom cascade duration={2000} delay={1000}>
					<div>
						<p>
							정신과적 문제는 크게 두 부분으로 나누어 생각할 수 있습니다.&nbsp;
							<strong>겉으로 보이는 증상</strong>은 병원을 찾게 만든 나를
							괴롭히는 내용들일 것이고, 정신과적 <strong>약물치료만</strong>
							으로도 이러한 증상의 많은 부분은 조절이 가능합니다.
						</p>
						<p>
							하지만 증상 이면에 이러한 증상들이 나타날 수밖에 없도록 만든
							마음의 문제들이 남아 있어 계속해서 문제를 만들어냅니다. 이러한{' '}
							<strong>내면의 문제</strong>를 치료하는 과정을&nbsp;
							<strong>정신치료 또는 면담치료</strong>라고 합니다.
						</p>
					</div>
				</Fade>
			</div>
			<hr></hr>
			<section>
				<Fade bottom cascade>
					<div>
						<h3>면담 위주로 진료합니다</h3>
						<p>
							온빛은 면담치료를 진행하고 약물을 따로 처방하지 않습니다. 증상의
							종류나 심각도에 따라 약물치료가 우선 되는 경우가 있으며 약물치료
							없이 면담치료를 진행해도 되는 경우도 있습니다. 초기 면담 시 현재의
							상태를 파악하여 어떠한 치료가 도움이 될지 결정을 내리게 되며
							약물치료가 필요하거나 검사가 필요하다고 판단되는 경우 타병원
							내원을 안내드릴 수도 있겠습니다.
						</p>
					</div>
				</Fade>
				{renderImg(features[0])}
			</section>
			<section>
				<Fade bottom cascade>
					<div>
						<h3>꾸준한 치료가 중요합니다</h3>
						<p>
							면담치료는 회기당 45분, 주 1-3회씩 이루어집니다. 면담 시간 중의
							대화를 통하여 치료자와 환자가 함께 환자의 어린 시절부터 무의식
							중에 형성된 행동이나 생각의 방식/패턴을 이해해 가고, 본인에 대한
							이해를 토대로 삶의 방식/패턴을 교정해가게 됩니다. 상당한 작업이기
							때문에 지속적으로 집중하여 진행하는 것이 중요하며 적어도 주 1회
							꾸준히 치료하도록 권하고 있습니다.
						</p>
					</div>
				</Fade>
				{renderImg(features[1])}
			</section>
			<section>
				<Fade bottom cascade>
					<div>
						<h3>자율성을 중요시합니다</h3>
						<p>
							마음을 깊이 들여다보며 이해해가는 과정은 상당한 용기가 필요합니다.
							면담치료는 억지로 열어보이도록 강요하지 않으며 환자가 정하는
							속도에 따라 치료가 이루어집니다. 빠르게 진행하기보다는 안정감을
							느끼는 가운데 꾸준히 원하는 수준에 이를 때까지 치료를 진행하는
							것이 좋습니다. 상황에 따라 면담기간은 달라지지만 적으면 몇 달에서
							길면 몇 년에 걸쳐 치료가 이루어집니다.
						</p>
					</div>
				</Fade>
				{renderImg(features[2])}
			</section>
		</article>
	)
}

export default Features
