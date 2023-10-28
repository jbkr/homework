import React from 'react'
import { Col } from 'antd'

const GridCard = (props) => {

  // xs:          ~ 575px
  // sm: '576px', ~ 767px
  // md: '768px', ~ 991px
  // lg: '992px', ~ 1199px
  // xl: '1200px',~ 1599px
  // xxl: '1600px',

  if (props.landingPage) {
    // [LandingPage] 처리
    console.log('props.landingPage >> ', props.landingPage);
    // console.log('props.hi >> ', props.hi);

    return (
      <Col xs={24} sm={12} md={8} lg={6}>
        <div>
          <a href={`/movie/${props.movieId}`}>
            <img
              style={{ width: '100%' }}
              src={props.path}
              alt={props.title}
            />
          </a>
        </div>
      </Col>
    )
  } else {
    // [Detail] 처리
    return (
      <Col xs={24} sm={12} md={8} lg={6}>
        <div>
          <img
            style={{ width: '100%' }}
            src={props.path}
            alt={props.castName}
          />
        </div>
      </Col>
    )
  }


}

export default GridCard
