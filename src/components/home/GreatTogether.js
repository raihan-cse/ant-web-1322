import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function GreatTogether() {
    return (
        <>
            <section className="great-together-section">
                <Container>
                    <Row>
                        <Col xs={12} md={12} lg={7}>
                            <div className="great-together-wrapper ">
                                <div className="content-wrapper">
                                    <h1>Let's help you get business results through performance marketing and e-commerce!</h1>
                                    <p>Drop us a line, and we'll get in touch. We'll see if we're a match and how we can help each other.</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={12} lg={5}>
                            <div className="great-together-wrapper">
                                <div className="get-quote-wrapper">
                                    <div className="get-quote-box">
                                        <a href="https://theantopolis.com/ecommerce-1/consultation">
                                            <span>Request Consultancy Session</span>
                                            <span>
                                            <img src={process.env.PUBLIC_URL + '/assets/img/angle-right-white.svg'} alt="right-angle-white" />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
