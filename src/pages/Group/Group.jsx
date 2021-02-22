import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Fade from 'react-reveal/Fade'
import SectionHeading from '../../components/SectionHeading'
import { group } from '../../assets'

import './Group.scss'

function Personal() {
	const [imgLoaded, setImgLoaded] = useState(false)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<article className='group'>
			<Helmet>
				<title>그룹정신치료 &ndash; 온빛정신건강의학과의원</title>
				<meta
					name='description'
					content='10명 내외의 치료자를 포함한 그룹원들과 회기당 90분, 주 1회씩 면담치료가 이루어집니다.'
				/>
				<meta name='robots' content='index, nofollow' />
			</Helmet>
			<section>
				<SectionHeading>그룹정신치료</SectionHeading>

				<div className='group__desc'>
					<div className='group__img'>
						<picture>
							<source type='image/webp' srcSet={group.webp} />
							<source type='image/jpeg' srcSet={group.jpg} />
							<img
								src={group.jpg}
								alt={group.alt}
								width='100%'
								height='100%'
								onLoad={() => setImgLoaded(true)}
								style={{ opacity: imgLoaded ? 1 : 0 }}
							/>
						</picture>
					</div>
					<Fade bottom cascade delay={1200} duration={1600}>
						<div>
							<p>
								10명 내외의 치료자를 포함한 그룹원들과 회기당 90분, 주 1회씩
								면담치료가 이루어집니다.
							</p>
							<p>
								개인치료 때와는 다르게 다른 사람들과의 상호작용을 통해 자신이나
								타인의 행동이나 생각의 방식/패턴을 이해하게 되고 다른 사람의
								방식/패턴을 보고 배울 수 있는 기회도 주어집니다. 치료자와 단둘이
								면담치료 진행하는 것에 비해 자극이 많고 치료효과가 빠르며
								사회생활에의 적응을 보다 도울 수 있습니다.
							</p>
							<p>현재는 준비 중으로 추후에 참여 가능합니다.</p>
						</div>
					</Fade>
				</div>
			</section>
		</article>
	)
}

export default Personal
