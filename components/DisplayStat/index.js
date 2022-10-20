import React, { useState } from "react";
import { Col, ProgressBar, Row } from 'react-bootstrap'

const DisplayStat = ({
  homeStat,
  awayStat,
  statText,
  statMax,
  isPercentage
}) => {
  const homeStatText = isPercentage === false ? homeStat : `${homeStat}%`
  const awayStatText = isPercentage === false ? awayStat : `${awayStat}%`

  const homeVariant = homeStat < awayStat ? '' : 'dark'
  const awayVariant = homeStat > awayStat ? '' : 'dark'

  return(
    <>
      <Row className='mb-3'>
        <Col>
          <Row className="d-flex align-items-center">
            <Col style={{direction: 'rtl'}} xs={2} lg={1}>
              <p className="mb-0 statTextValue">{homeStatText}</p>
            </Col>
            <Col xs={8} lg={10}>
              <Row>
                <Col className="px-0">
                  <ProgressBar
                    style={{direction: 'rtl'}}
                    className={`customBg ${homeVariant}`}
                    now={homeStat}
                    min={0}
                    max={statMax}
                    // variant={homeVariant}
                  />
                </Col>
                <Col className="px-0">
                  <ProgressBar
                    className={`customBg ${awayVariant}`}
                    now={awayStat}
                    min={0}
                    max={statMax}
                    // variant={awayVariant}
                  />
                </Col>
              </Row>
            </Col>
            <Col xs={2} lg={1}>
              <p className="mb-0 statTextValue">{awayStatText}</p>
            </Col>
          </Row>
          <p className='text-center statTextDesc'>{statText}</p>
        </Col>
      </Row>
    </>
  )
}

export default DisplayStat