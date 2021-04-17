import './Treatment.scss'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Fade from 'react-reveal/Fade'
import SectionHeading from '../../components/SectionHeading'
import { symptoms } from '../../assets'

function Treatment() {
	useEffect(() => {
		window.scrollTo(0, 0)
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
		<article className='treatment'>
			<Helmet>
				<title>진료과목 &ndash; 온빛정신건강의학과의원</title>
			</Helmet>
			<div className='treatment__intro'>
				<p>
					해결이 어려운 마음의 문제들은 많은 경우에 해결되지 않은 채 잊혀집니다.
					무의식적으로 힘드니까 피해버리는 거죠. 하지만 그 문제들은 사라지지
					않고 남아 점점 거대해지고 어떤 방식으로든 영향을 끼치기 시작합니다.
				</p>
				<p>
					그래서 정신건강의학과는 무수히 다양한 증상들을 다룹니다. 드러난 빙산의
					일각을 넘어 숨겨진 거대한 문제들을 다루기 시작할 때 삶이 달라지기
					시작합니다. 아래와 같은 문제들로 인해 함께 문제를 해결해 보고
					싶으시다면 ‘온빛’을 찾아주세요.
				</p>
				<SectionHeading>진료과목</SectionHeading>
			</div>
			<hr></hr>

			<section>
				<Fade bottom cascade delay={1000}>
					<div className='treatment__desc'>
						<h3>부정적 감정들과 대인관계 어려움</h3>
						<p>
							내가 원하는 바가 좌절될 때 우울, 불안, 분노의 감정을 느끼게
							됩니다. 이런 불편한 감정들이 통제되지 않으면 대인관계에도 영향을
							끼치게 마련이죠. 더 가까워지고 누군가 다가오기를 바라는데 오히려
							떠나가는 경험이 반복됩니다.
						</p>
					</div>
				</Fade>
				{renderImg(symptoms[0])}
			</section>
			<section>
				<Fade cascade bottom delay={1000}>
					<div className='treatment__desc'>
						<h3>조절되지 않는 수면과 식이</h3>
						<p>
							수면과 식이는 감정과 밀접한 관련이 있습니다. 감정에 영향을 받기도
							하고 감정에 영향을 주기도 하죠. 수면과 식이가 조절되지 않으면서 내
							삶은 내가 원하지 않는 방향으로 흘러가기 시작합니다.
						</p>
					</div>
				</Fade>
				{renderImg(symptoms[1])}
			</section>
			<section>
				<Fade cascade bottom>
					<div className='treatment__desc'>
						<h3>감정을 다루기 위한 부적응적 방식들</h3>
						<p>
							불편한 감정의 원인을 찾고 해결하는 것보다 빠르게 감정을 좋아지게
							만들고 싶을 때 완벽주의적 성격으로 불안을 통제하기도 하고, 기분을
							일시적으로나마 좋아지게 하는 술/마약이나 성관계/도박/게임 등에
							중독되기도 합니다.
						</p>
					</div>
				</Fade>
				{renderImg(symptoms[2])}
			</section>
			<section>
				<Fade cascade bottom>
					<div className='treatment__desc'>
						<h3>여러가지 신체증상</h3>
						<p>
							불편한 감정들을 억누르는 방식으로 적응한 경우 감정을 느끼지
							못하기도 합니다. 하지만 억눌린 불편한 감정들은 나를 불편하게
							해서라도 관심을 갖도록 유도하게 마련입니다. 두통, 복통, 근육통,
							피로감 등으로요.
						</p>
					</div>
				</Fade>
				{renderImg(symptoms[3])}
			</section>
			<hr></hr>
			<div className='treatment__outtro'>
				<p>
					감정은 문제를 알리는 싸인과 같습니다. 감정이 불편하게 하기에 많이들
					대충 치워 두는 경향이 있습니다. 하지만 감정은 내 안에 갈등이나 좌절된
					소망과 관련이 있고 문제를 해결해달라는 표시이며 귀기울여 내면의 소리를
					들으면 누구든 본인의 문제를 해결할 수 있는 힘이 있답니다. 조금의
					도움이 필요할 뿐입니다.
				</p>
			</div>
		</article>
	)
}

export default Treatment
