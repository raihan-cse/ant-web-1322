import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ClientSlideOne from './ClientSlideOne'
import ClientSlideTwo from './ClientSlideTwo'
import ClientSlideThree from './ClientSlideThree'

export default function Clients() {

    return (
        <>
            <section className="home-clients-section">
                <Container>
                    <Row>
                        <Col md={12} >
                            <div className="section-title-wrapper">
                                <div className="sc-title-box">
                                    <h1 className="sc-title">Clients</h1>
                                    <p className="sc-sub-title"> we’ve worked with</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="px-0">
                    <ClientSlideOne />
                    {/* slide two start */}
                    <ClientSlideTwo />
                    {/* slide three start */}
                    <ClientSlideThree />
                </Container>
            </section>
        </>
    )
}
