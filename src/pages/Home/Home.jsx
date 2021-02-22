import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Fade from 'react-reveal/Fade'
import More from '../../components/More'
import { sunset } from '../../assets'
import './Home.scss'

function Home() {
	const [sourceLoaded, setSourceLoaded] = useState(null)

	useEffect(() => {
		window.scrollTo(0, 0)

		// === Give different parallax img depending on screen size
		const style = (imgSrc) => {
			const img = new Image()
			img.src = imgSrc
			img.onload = () => setSourceLoaded(imgSrc)
		}
		if (window.screen.height * 1.08 < 720) {
			style(sunset.src1280)
		} else if (window.screen.height * 1.08 < 1080) {
			style(sunset.src1920)
		} else {
			style(sunset.src2400)
		}
	}, [])

	return (
		<div className='home'>
			<Helmet>
				<title>온빛정신건강의학과의원</title>
				<meta
					name='description'
					content='방배역에 위치한 온빛정신건강의학과의원입니다. 면담 위주로 진료합니다.'
				/>
				<meta name='robots' content='index, nofollow' />
			</Helmet>
			<article className='home__parallax'>
				<div
					className='home__parallax__layer home__parallax__layer--back'
					style={{
						backgroundImage: `url(${sourceLoaded || ''})`,
						opacity: sourceLoaded ? 1 : 0,
					}}
				></div>
				<div className='home__parallax__layer home__parallax__layer--base'>
					<section>
						<h4>빛</h4>
						<Fade bottom cascade duration={1200} delay={1200}>
							<div>
								<p>어두운 마음에 빛이 비추어지는 것은</p>
								<p>눈 부시고 따갑고 자극적인 불편한 경험입니다.</p>
								<p>무엇보다도 내면의 어둠 속에 숨겨져 있던 것들을</p>
								<p>누군가에게 드러낸다는 건 더욱 힘든 일이지요.</p>
							</div>
						</Fade>
					</section>
					<section>
						<h4>어둠</h4>
						<Fade bottom cascade duration={1200} delay={500}>
							<div>
								<p>하지만 어둠 속에서 정체도 모를 지독한 냄새가</p>
								<p>나의 감정, 생각, 신체, 대인관계, </p>
								<p>일 수행능력에까지 영향을 끼치고 있는데</p>
								<p>그대로 둘 수도 없는 노릇입니다.</p>
								<p>그대로 두면 고통이 계속 커지겠죠.</p>
							</div>
						</Fade>
					</section>
					<section>
						<h4>온빛</h4>
						<Fade bottom cascade duration={1200} delay={500}>
							<div>
								<p>용기 내어 빛을 쬐어볼 결심을 하셨군요.</p>
								<p>생각보다 빛을 쬐는 일이 따스하고</p>
								<p>평온하다는 것을 경험하게 될 겁니다. </p>
								<p>마음에 정체 모를 냄새는 사라지고 </p>
								<p>온기가 가득 채워집니다.</p>
							</div>
						</Fade>
					</section>
					<div className='home__btns'>
						<More to='/features' variant='light'>
							온빛의특징
						</More>
						<More to='/treatment' variant='light'>
							진료과목
						</More>
						<More to='/appointment' variant='light'>
							예약문의
						</More>
					</div>
				</div>
			</article>
		</div>
	)
}

export default Home
