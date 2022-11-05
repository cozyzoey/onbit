import React, { useState } from 'react'
import './LazyImg.scss'

function LazyImg({ img, width = '100%', height = '100%' }) {
  const [imgLoaded, setImgLoaded] = useState(false)

  return (
    <div
      className='lazy-img'
      style={{ width: `${width}`, height: `${height}` }}
    >
      <div className='lazy-img__wrapper'>
        <img
          src={img.thumb}
          alt={img.alt}
          className='lazy-img--thumb'
          style={{ opacity: imgLoaded ? 0 : 1 }}
        />
      </div>
      <div className='lazy-img__wrapper'>
        <img
          srcSet={img.srcSet ? img.srcSet : ''}
          src={img.src}
          alt={img.alt}
          className='lazy-img--full'
          onLoad={() => setImgLoaded(true)}
          style={{ opacity: imgLoaded ? 1 : 0 }}
        />
      </div>
    </div>
  )
}

export default LazyImg
