import './Map.scss'
import React, { useState, useEffect, useRef } from 'react'
import { MapPin, Phone, Clock, Info } from 'react-feather'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faWifi,
	faRestroom,
	faParking,
	faCalendar,
} from '@fortawesome/free-solid-svg-icons'
import BasicBtn from '../../components/BasicBtn'
import SectionHeading from '../../components/SectionHeading'
import Alert from '../../components/Alert'
import OfficeHours from '../../components/OfficeHours'
import { parking, parking_800w } from '../../assets'

function Map() {
	const [mapLoaded, setMapLoaded] = useState(false)
	const [addressCopied, setAddressCopied] = useState(false)
	const mapRef = useRef()
	const addressRef = useRef()

	useEffect(() => {
		if (window.naver) {
			setMapLoaded(true)
		} else {
			const script = document.createElement('script')
			document.body.appendChild(script)
			script.onload = () => setMapLoaded(true)
			script.type = 'text/javascript'
			script.async = true
			script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_MAP_CLIENT_ID}`

			return () => {
				document.body.removeChild(script)
			}
		}
	}, [])

	useEffect(() => {
		if (window.naver && !mapRef.current.style.background) {
			const mapOptions = {
				useStyleMap: true,
				center: new window.naver.maps.LatLng(37.482476, 126.997236),
				disableKineticPan: false,
				zoom: window.innerWidth > 600 ? 17 : 16,
				minZoom: 10,
				maxZoom: 20,
				zoomControl: true,
				zoomControlOptions: {
					style: window.naver.maps.ZoomControlStyle.SMALL,
					position: window.naver.maps.Position.TOP_RIGHT,
				},
			}
			const map = new window.naver.maps.Map(mapRef.current, mapOptions)
			const marker = new window.naver.maps.Marker({
				position: new window.naver.maps.LatLng(37.483379, 126.997003),
				map: map,
			})
		}
	}, [mapLoaded])

	useEffect(() => {
		if (addressCopied) {
			const timer = setTimeout(() => setAddressCopied(false), 3000)
			return () => {
				clearTimeout(timer)
			}
		}
	}, [addressCopied])

	const onAddressCopy = () => {
		navigator.clipboard.writeText(addressRef.current.innerText)
		setAddressCopied(true)
	}

	return (
		<article className='map'>
			{addressCopied && <Alert variant='success'>주소를 복사했습니다</Alert>}
			<section>
				<SectionHeading>오시는길</SectionHeading>
				<div className='map__header'>
					<div className='map__header__map' ref={mapRef}></div>
					<div className='map__header__address'>
						<div>
							<span>온빛정신건강의학과</span>
							<h2 ref={addressRef}>서울 서초구 효령료33길 45</h2>
						</div>
						<div className='map__header__actions'>
							<BasicBtn onClick={onAddressCopy} variant='info'>
								주소복사
							</BasicBtn>
							<BasicBtn variant='primary'>
								<a
									href='https://map.naver.com/v5/entry/address/14137240.971828233,4506699.120972658,%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EB%B0%A9%EB%B0%B0%EB%8F%99%20908-32,jibun?c=14137216.4880926,4506589.5413266,17,0,0,0,dh'
									target='__blank'
								>
									지도에서 보기
								</a>
							</BasicBtn>
						</div>
					</div>
				</div>
				<div className='map__info'>
					<div className='map__info--row'>
						<div className='map__info__title'>
							<MapPin />
							오시는길
						</div>
						<div>지하철 2호선 방배역 4번 출구에 있습니다</div>
					</div>
					<div className='map__info--row'>
						<div className='map__info__title'>
							<MapPin />
							주차안내
						</div>
						<div>
							건물 입구 옆 1시간 무료주차 가능합니다
							<div className='map__info__img'>
								<picture>
									<source
										type='image/webp'
										sizes='(max-width: 500px) 384px, (max-width: 800px) 630px, 700px'
										srcSet={parking.webp}
									/>
									<img
										sizes='(max-width: 500px) 384px, (max-width: 800px) 630px, 700px'
										srcSet={parking.jpg}
										src={parking_800w}
										alt={parking.alt}
										width='100%'
										height='100%'
									/>
								</picture>
							</div>
						</div>
					</div>
					<div className='map__info--row'>
						<div className='map__info__title'>
							<Phone />
							전화번호
						</div>
						<div>02-522-9730</div>
					</div>
					<div className='map__info--row'>
						<div className='map__info__title'>
							<Clock />
							진료시간
						</div>
						<div>
							<OfficeHours />
						</div>
					</div>
					<div className='map__info--row'>
						<div className='map__info__title'>
							<Info />
							이용안내
						</div>
						<div className='map__info__icons'>
							<div>
								<FontAwesomeIcon icon={faCalendar} size='2x' />
								예약가능
							</div>
							<div>
								<FontAwesomeIcon icon={faParking} size='2x' />
								주차공간
							</div>
							<div>
								<FontAwesomeIcon icon={faRestroom} size='2x' />
								공용화장실
							</div>
							<div>
								<FontAwesomeIcon icon={faWifi} size='2x' />
								무선인터넷
							</div>
						</div>
					</div>
				</div>
			</section>
		</article>
	)
}

export default Map
