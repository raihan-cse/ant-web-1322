import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Slider from 'react-slick'

import Footer from '../footer/Footer'
import AnimatedCount from './AnimatedCount'
import ClientsWrapper from './clients/ClientsWrapper'
import GreatTogether from './GreatTogether'
import Portfolio from './Portfolio'

import HeroLogoBlack from '../../assets/logo/hero-logo-black.svg'
import HeroLogoLight from '../../assets/logo/hero-logo-light.svg'
import Logo from '../../assets/logo/logo.svg'
import ServiceImag1 from '../../assets/images/service-img-1.svg'

import './Home.scss'

export default function Home() {
    const [black, setBlack] = useState('');
    const [zoomOut, setZoomOut] = useState('');
    const [color, setColor] = useState('');
    useEffect(() => {
        setTimeout(() => { setBlack('black') }, 1500);
        setTimeout(() => { setZoomOut('zoomOut') }, 3000);
        setTimeout(() => { setColor('color') }, 4000);
    }, [])

    //form and request button hide/show and animation
    const [formShow, setFormShow] = useState('');
    const [btnShow, setBtnShow] = useState(true);

    const handleClick = () => {
        setFormShow('show')
        setBtnShow(false)
    }

    const data = [
        {
            id: 1,
            img: `${ServiceImag1}`,
            title: 'test title one',
            nav: 'nav one'
        },
        {
            id: 2,
            img: `${HeroLogoLight}`,
            title: 'test title two',
            nav: 'nav two'
        },
        {
            id: 3,
            img: `${ServiceImag1}`,
            title: 'test title three',
            nav: 'nav three'
        },
        {
            id: 4,
            img: `${HeroLogoLight}`,
            title: 'test title four',
            nav: 'nav four'
        }
    ]

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);


    useEffect(() => {

        setNav1(slider1);
        setNav2(slider2);

    }, [slider1, slider2]);

    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 5000,
        speed: 2000,
    };
    const settingsThumbs = {
        slidesToShow: data.length,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        centerMode: true,
        swipeToSlide: false,
    }

    return (
        <>
            <section className={`hero_white ${black}`}>
                <div className={`hero_white_inner ${zoomOut} ${color}`}>
                    <div className="image_wrapper">
                        <img src={HeroLogoBlack} alt="hero-logo-black" className='black_image' />
                        <img src={HeroLogoLight} alt="hero-logo-black" className='light_image' />
                    </div>
                    <h1>wE ARE ANTOPOLIS</h1>
                    <h2>wE EMPOwER CHANGEMAKERS </h2>
                </div>
            </section>

            {/* <section className='services'>
                <div className="custom_container">
                    <div className="logo_wrapper">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className="from_services_wrapper">
                        <Row>
                            <Col xs={12} md={12} lg={6}>
                                <div className="left_content">
                                    <h3 className="title">How Can We empower You?</h3>
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
            </section> */}

            <section className='services'>
                <div className="custom_container">
                    <div>
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
                                        <div className={`title_slide_wrapper ${formShow}`}>
                                            <Slider
                                                {...settingsMain}
                                                asNavFor={nav2}
                                                ref={slider => (setSlider1(slider))}
                                            >
                                                {data.map((item, index) =>
                                                    <h2 key={index}>{item.title}</h2>
                                                )}
                                            </Slider>
                                            {/* <h2 className=''>Explode Your Profits Through the Magic of E-Commerce</h2> */}
                                        </div>

                                        {btnShow && (
                                            <button type="button" className="submit_btn" onClick={handleClick}><span>Request Consultancy Session</span></button>
                                        )}
                                    </div>
                                </Col>
                                <Col xs={12} md={12} lg={6}>
                                    <Slider
                                        {...settingsMain}
                                        asNavFor={nav2}
                                        ref={slider => (setSlider1(slider))}
                                    >
                                        {data.map((item, index) =>
                                            <div className="right_content" key={index}>
                                                <img src={item.img} alt="serv" />
                                            </div>
                                        )}

                                        {/* <div className="right_content">
                                            <img src={ServiceImag1} alt="serv" />
                                        </div> */}
                                    </Slider>

                                </Col>
                            </Row>
                        </div>
                        <div className="services_tab_wrapper">
                            <ul className='tabs'>
                                <Slider
                                    {...settingsThumbs}
                                    asNavFor={nav1}
                                    ref={slider => (setSlider2(slider))}
                                >
                                    {data.map((nav, index)=>
                                    <li key={index}>{nav.nav}</li>
                                    )}
                                </Slider>
                                {/* <li><a href="/" className='active'>E-Commerce platform</a></li>
                                <li><a href="/">Performance marketing</a></li>
                                <li><a href="/">Company website</a></li>
                                <li><a href="/">content development</a></li> */}
                            </ul>
                        </div>
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
