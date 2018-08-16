import React from 'react'
import perspectiveBanner from '../../assets/img/perspective/perspective-banner.jpg'

export default () => {
  return (
    <div 
    className="banner" 
    style={{
      backgroundImage:`url(${perspectiveBanner})`,
      backgroundSize:'cover',
      backgroundAttachment: 'fixed'
      }}>
      <h1 className="banner-title">Perspective</h1>
      <h2 className="banner-subtitle">THEMES</h2>
      <p className="banner-description">Charlotte’s first love was literature. Throughout her childhood, books were not plentiful at her family’s small farm in the Fraser Valley. She couldn’t be picky about what she read, but that didn’t matter</p>
      <div className="banner-ol"></div>
    </div>
  )
}
