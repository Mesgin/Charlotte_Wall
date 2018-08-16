import React from 'react'
import perspectiveBanner from '../../assets/img/perspective-banner.jpg'

export default () => {
  return (
    <div className="banner">
      <h1 className="banner-title">Perspective</h1>
      <h2 className="banner-subtitle">Theme</h2>
      <p className="banner-description">Charlotte’s first love was literature. Throughout her childhood, books were not plentiful at her family’s small farm in the Fraser Valley. She couldn’t be picky about what she read, but that didn’t matter</p>
      <img src={perspectiveBanner} />
      <div className="bg"></div>
    </div>
  )
}
