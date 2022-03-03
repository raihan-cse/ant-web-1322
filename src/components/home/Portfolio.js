import React  from 'react'
import { Nav} from 'react-bootstrap'
import Content from './fortfolio/Content'
import Tech from './fortfolio/Tech'
import Business from './fortfolio/Business'

export default function Portfolio() {
    return (
        <>
        <section className={`protfolio-section`} id="scHeight">
                <div className="tab-wrapper">
                        <Nav variant="tabs" defaultActiveKey="#home">
                            <Nav.Item>
                                <Nav.Link href="#business">business</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#tech">tech</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#content">content</Nav.Link>
                            </Nav.Item>
                        </Nav>
                </div>
                <Business />
                <Tech />
                <Content />
            </section>
        </>
    )
}
