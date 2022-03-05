import React, { useEffect, useRef, useState, } from 'react'
import { Col, Row } from 'react-bootstrap'

import Footer from '../footer/Footer'
import AnimatedCount from './AnimatedCount'
import ClientsWrapper from './clients/ClientsWrapper'
import GreatTogether from './GreatTogether'
import Portfolio from './Portfolio'

import HeroLogoBlack from '../../assets/logo/hero-logo-black.svg'
import HeroLogoLight from '../../assets/logo/hero-logo-light.svg'
import Logo from '../../assets/logo/logo.svg'
import ServiceImag1 from '../../assets/images/service-img-1.svg'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import './Home.scss'

export default function Home() {
    //gsap animation
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({
        toggleActions: "play none none reverse",
        markers: true
    });
    const emptySection = useRef();
    const el = useRef();
    const q = gsap.utils.selector(el);
    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: emptySection.current,
                start: "top 70%",
                end: "bottom 30%",
                onEnter: () => {
                    gsap.to(q('h1'), { color: '#242424'});
                    gsap.to(q('h2'), { opacity: '1', visibility: 'visible', transform: 'translateY(0)' });
                },
                onLeaveBack: () => {
                    gsap.to(q('h1'), { color: '#ffffff'});
                    gsap.to(q('h2'), { opacity: '0', visibility: 'hidden', transform: 'translateY(120px)' });
                }
            }
        })
    },[q]);

    //form and request button hide/show and animation
    const [formShow, setFormShow] = useState('');
    const [btnShow, setBtnShow] = useState(true);

    const handleClick = () => {
        setFormShow('show')
        setBtnShow(false)
    }


    return (
        <>
            <section className={`hero_white`}>
                <div className="hero_white_inner">
                    <img src={HeroLogoBlack} alt="hero-logo-black" className='black_image' />
                </div>
            </section>

            <section className="hero_black">
                <div className="hero_black_inner" ref={el}>
                    <img src={HeroLogoLight} alt="hero-logo-black" className='light_image' />
                    <h1>wE ARE ANTOPOLIS</h1>
                    <h2>wE EMPOwER CHANGEMAKERS </h2>
                </div>
            </section>

            <section className="empty_section" ref={emptySection}></section>

            <section className='services'>
                <div className="custom_container">
                    <div className="logo_wrapper">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className="from_services_wrapper">
                        <Row>
                            <Col xs={12} md={12} lg={6}>
                                <div className="left_content">
                                    <h3 className="title">How Can We empower You?</h3>
                                    {/* {formShow && (
                                        <form id="form">
                                            <div className="select_group">
                                                <label>Service:</label>
                                                <input type="text" className="form_control datalist fc-one" list="services" name="service_name" placeholder="Explode Your Profits Through the Magic of E-Commerce" />
                                                <datalist id="services">
                                                    <option value="one"></option>
                                                    <option value="two"></option>
                                                </datalist>
                                            </div>
                                            <div className="form_input_wepper">
                                                <input type="text" className={`form_control`} name="name" id="name" placeholder="Name" />
                                                <div className="form_group">
                                                    <input type="email" className={`form_control`} name="email" id="subscribe-email" placeholder="Email Address" />
                                                    <input type="text" className={`form_control`} name="phone" id="phone" placeholder="Phone" />
                                                </div>
                                            </div>
                                            <button type="submit" className="submit_btn"><span>Request Consultancy Session</span></button>
                                        </form>
                                    )} */}

                                    <form id="form" className={`${formShow}`}>
                                        <div className="select_group">
                                            <label>Service:</label>
                                            <input type="text" className="form_control datalist fc-one" list="services" name="service_name" placeholder="Explode Your Profits Through the Magic of E-Commerce" />
                                            <datalist id="services">
                                                <option value="one"></option>
                                                <option value="two"></option>
                                            </datalist>
                                        </div>
                                        <div className="form_input_wepper">
                                            <input type="text" className={`form_control`} name="name" id="name" placeholder="Name" />
                                            <div className="form_group">
                                                <input type="email" className={`form_control`} name="email" id="subscribe-email" placeholder="Email Address" />
                                                <input type="text" className={`form_control`} name="phone" id="phone" placeholder="Phone" />
                                            </div>
                                        </div>
                                        <button type="submit" className="submit_btn"><span>Request Consultancy Session</span></button>
                                    </form>
                                    <h2 className={`${formShow}`}>Explode Your Profits Through the Magic of E-Commerce</h2>
                                    {/* <div className={`transformation ${formShow}`}>
                                        
                                    </div> */}
                                    {btnShow && (
                                        <button type="button" className="submit_btn" onClick={handleClick}><span>Request Consultancy Session</span></button>
                                    )}
                                </div>
                            </Col>
                            <Col xs={12} md={12} lg={6}>
                                <div className="right_content">
                                    <img src={ServiceImag1} alt="service 1" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="services_tab_wrapper">
                        <ul className='tabs'>
                            <li><a href="/" className='active'>E-Commerce platform</a></li>
                            <li><a href="/">Performance marketing</a></li>
                            <li><a href="/">Company website</a></li>
                            <li><a href="/">content development</a></li>
                        </ul>
                    </div>
                </div>
            </section>
            <Portfolio />
            <ClientsWrapper />
            <AnimatedCount />
            <GreatTogether />
            <Footer />
        </>
    )
}
