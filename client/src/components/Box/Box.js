import React from 'react'
import perspectiveBoxImage from '../../assets/img/perspective/perspective-box.jpg'

export default () => {
  return (
    <div className="box">
      <div
        className="box-img"
        style={{
          backgroundImage: `url(${perspectiveBoxImage})`,
          backgroundSize: 'cover',
        }} >
        <div className="box-img-ol"></div>
        <div className="box-large-text">
          <p >
            I examine things from a 360 angle,
            because that is how we arrive at the core of our thoughts.
          </p>
        </div>
      </div>
      <div className="box-small-text">
        <p>
          When she started her art education,
          Charlotte was instantly drawn to three dimensional media.
           “I can’t think about ideas in a one-dimensional way”, she says.
      </p>
      </div>
    </div>
  )
}
