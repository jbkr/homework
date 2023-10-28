import React from 'react'
import { Col, Card } from 'antd';
const { Meta } = Card;

const AntCard = (props) => {

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
      <Col xs={12} sm={12} md={6} lg={4}>
        <div>
          <a href={`/movie/${props.movieId}`}>
            <Card
              hoverable
              style={{ width: '100%' }}
              cover={<img alt={props.title} src={props.path} />}
            >
              <Meta title={props.title} />
            </Card>
          </a>
        </div>
      </Col>
    )
  } else {
    // [Detail] 처리
    return (
      <Col xs={12} sm={12} md={6} lg={4}>
        <div>
          <Card
            hoverable
            style={{ width: '100%' }}
            cover={<img alt={props.castName} src={props.path} />}
          >
            <Meta title={props.castName} />
          </Card>
        </div>
      </Col>
    )
  }


}

export default AntCard
