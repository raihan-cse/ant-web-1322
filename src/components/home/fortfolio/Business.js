import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import SlickSlider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../../assets/scss/portfolio.scss'

export default function Content() {
    const baseUrl = 'https://antopolis.antapp.space/'
    
    const [crs, setCrs] = useState([]); //crs = category related service
    useEffect(() => {
        fetch('https://antopolis.antapp.space/api/category-related-services/1')
            .then(res => res.json())
            .then(data => setCrs(data))
    }, [])

    const [sname, setSname] = useState({}); //sname = service name
    useEffect(() => {
        fetch('https://antopolis.antapp.space/api/portfolio-category-by-level/1')
            .then(res => res.json())
            .then(data => setSname(data))
    }, [])


    const [pclients, setPclients] = useState([])
    useEffect(() => {
        fetch('https://antopolis.antapp.space/api/portfolio-items/1')
            .then(res => res.json())
            .then(data => setPclients(data))
    }, [])

    
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    //play / pause button toggle
    const [push, setPush] = useState(true)

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);

    }, [slider1, slider2]);

    const handlePush = () => {
        setSlider1(slider1.slickPause())
        setPush(false)
    }
    const handlePlay = () => {
        setSlider1(slider1.slickPlay())
        setPush(true)
    }

    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 3000,
        speed: 2000,
    };

    const settingsThumbs = {
        slidesToShow: pclients.length === 1 ? 1 : pclients.length > 1 && pclients.length <= 9 ? pclients.length : 9,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        centerMode: true,
        swipeToSlide: true,
        focusOnSelect: true,
        autoplaySpeed: 3000,
        speed: 2000,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: pclients.length === 1 ? 1 : pclients.length > 1 && pclients.length <= 2 ? pclients.length : 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: pclients.length === 1 ? 1 : pclients.length > 1 && pclients.length <= 4 ? pclients.length : 5,
                    slidesToScroll: 1
                }
            }
        ]
    };

   

    return (
        <>
            <section className="profile-content-section" id="business">
                <div className="profile-content-wrapper black">
                    <div className="profile-content-inner first-box">
                        <div className="first-box-inner"></div>
                    </div>

                    <div className="profile-content-inner second-box">
                        <div className="profile-left-box">
                            <div className="profile-left-contet">
                                <h3>{sname !==null ? sname.name : ""}</h3>
                                <ul>
                                    {crs !==null ? crs.map((data, index) =>
                                        <li key={index}>
                                            <div className="icon">
                                                <img className="img-fluid" src={baseUrl + data.icon} alt={data.name} />
                                            </div>
                                            <div className="text">
                                                <p>{data.name}</p>
                                            </div>
                                        </li>
                                    ) : ""}
                                </ul>
                            </div>
                            {/* <div className="full-profile">
                                <a href="#demo">
                                    <span>full profile</span>
                                    <span>
                                    <img src={process.env.PUBLIC_URL + '/assets/img/angle-right-white.svg'} alt="angle-right-white" />
                                    </span>       
                                </a>
                            </div> */}
                        </div>
                    </div>

                    <div className="profile-content-inner third-box">
                        <div className="profile-right-box">
                            <div className="slick-slider-wrapper">

                                <SlickSlider
                                    {...settingsMain}
                                    asNavFor={nav2}
                                    ref={slider => (setSlider1(slider))}
                                >
                                    {pclients.map((slide, index) =>
                                        <div className="slick-slide-content" key={index}>
                                            <img className="slick-slide-image" src={`https://antopolis.antapp.space/` + slide.image} alt={slide.title} />
                                            <div className="web-visit-box">
                                                <a href={slide.url}>
                                                    <span>live preview</span>
                                                    <span>
                                                        <img src={process.env.PUBLIC_URL + '/assets/img/angle-right-white.svg'} alt="angle-right-white" />
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="cname-ctag-wrapper">
                                                <div className="cname">
                                                    <h4>{slide.get_client === null ? "" : slide.get_client.name}</h4>
                                                </div>
                                                <div className="ctag">
                                                    <ul>
                                                        {slide.get_tag !== null ? slide.get_tag.map((tags, index) =>
                                                            <li key={index}>
                                                                <p className="text">{tags.tag}</p>
                                                            </li>
                                                        ) : ""}
                                                        {/* <li>
                                                            <p className="text">Website</p>
                                                        </li>
                                                        <li>
                                                            <p className="text">Mobile App</p>
                                                        </li> */}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                </SlickSlider>
                                <div className="slick-thumbnail-wrapper">
                                    <SlickSlider
                                        {...settingsThumbs}
                                        asNavFor={nav1}
                                        ref={slider => (setSlider2(slider))}>
                                        {pclients.map((slide, index) =>
                                            <div className="slick-slide-content" key={index}>
                                                <img className="slick-slide-image" src={`https://antopolis.antapp.space/` + slide.image} alt={slide.title} />
                                            </div>
                                        )}

                                    </SlickSlider>
                                </div>
                                <div className="play-push-box">
                                    {
                                        push ?
                                            <Button onClick={handlePush} variant="none" className="ps-btn push">
                                                <img src={process.env.PUBLIC_URL + '/assets/img/pause-white.svg'} alt="btn-push" />
                                            </Button>
                                            :
                                            <Button onClick={handlePlay} className="ps-btn play">
                                                <img src={process.env.PUBLIC_URL + '/assets/img/play-white.svg'} alt="btn-push" />
                                            </Button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
