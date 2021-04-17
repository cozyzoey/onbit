import './Interior.scss'
import React, { useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet'
import { nanoid } from 'nanoid'
import Fade from 'react-reveal/Fade'
import { interiors } from '../../assets'


function Interior() {
	const elRef = useRef()

	useEffect(() => {
		const onWheel = (e) => {
			elRef.current.scrollLeft += e.deltaY
		}
		window.addEventListener('wheel', onWheel)
		return () => window.removeEventListener('wheel', onWheel)
	}, [])

	const renderPhotos = () => {
		return interiors.map((photo, index) => (
			<div key={nanoid(12)} className='interior__item'>
				<div className='interior__img'>
					<picture>
						<source type='image/webp' srcSet={photo.webp} />
						<source type='image/jpeg' srcSet={photo.jpg} />
						<img
							src={photo.jpg}
							alt={photo.alt}
							width='100%'
							height='100%'
							loading='lazy'
						/>
					</picture>
				</div>
				<Fade right cascade>
					<span className='interior__desc'>{photo.alt}</span>
				</Fade>
			</div>
		))
	}

	return (
		<div className='interior'>
			<Helmet>
				<title>공간소개 &ndash; 온빛정신건강의학과의원</title>
				<meta name='robots' content='noindex' />
			</Helmet>
			<div className='interior--box' ref={elRef}>
				{renderPhotos()}
			</div>
		</div>
	)
}

export default Interior
