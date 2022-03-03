import React, {useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

export default function AnimatedCount() {
    const [countData, setCountData] = useState([])

    useEffect(() => {
        fetch('https://antopolis.antapp.space/api/counts')
            .then(res => res.json())
            .then(data => setCountData(data))
    }, [])

    // const valueInt = parseInt(countData.value)
    // console.log(valueInt)

    return (
        <>
            <section className="animated-count-section">
                <Container>
                    <Row>
                        {countData.map((data, index) =>
                            <Col xs={4} md={4} key={index} className="count-align">
                            <div className="counter-wrapper">
                                <div className="number-wrapper">
                                    <div className="number">
                                        <h1>
                                            <CountUp start={0} end={parseInt(data.value)} delay={0} redraw={true}>
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start} delayedCall>
                                                        <span ref={countUpRef} />
                                                    </VisibilitySensor>
                                                )}
                                            </CountUp>
                                        </h1>
                                    </div>
                                    <div className="number">
                                        <h1>
                                            <span>+</span>
                                        </h1>
                                    </div>
                                </div>
                                <div className="text">
                                    <p>{data.parameter}</p>
                                </div>
                            </div>
                        </Col>
                        )}
                        
                    </Row>
                    
                </Container>
            </section>
        </>
    )
}
