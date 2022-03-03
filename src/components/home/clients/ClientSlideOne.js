import React, {useState, useEffect} from 'react'
import Slide from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function ClientSlideOne() {

    const [clientsOne, setClientsOne] = useState([])
    useEffect(() => {
        fetch('https://antopolis.antapp.space/api/clients/1')
            .then(res => res.json())
            .then(data => setClientsOne(data))
    }, [])


    // const slideData = [
    //     {
    //         id: 1,
    //         url: "#hemo",
    //         image: "assets/img/client/PRAN.png",
    //         name: "text"
    //     },
    //     {
    //         id: 2,
    //         url: "#hemo",
    //         image: "assets/img/client/PRAN.png",
    //         name: "text"
    //     }
    // ]

    // const [slideCount, setSlideCount] = useState(0)
    // useEffect(() => {
    //     if(slideData.length > 1 && slideData.length <11) {
    //         setSlideCount(slideData.length - 1)
    //     }
    //     else if (slideData.length == 1) {
    //         setSlideCount(1)
    //     }
    //    else {
    //         setSlideCount(10)
    //     }
    // }, [])

    const ssOne = {
        // slidesToShow: slideCount,
        // slidesToShow: slideData.length === 1 ? 1 : slideData.length > 1 && slideData.length <= 10 ? slideData.length - 1 : 10,
        slidesToShow: clientsOne.length === 1 ? 1 : clientsOne.length > 1 && clientsOne.length <= 10 ? clientsOne.length - 1 : 10,
        slidesToScroll: 1,
        infinte: true, 
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        marginLeft: 32,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: clientsOne.length === 1 ? 1 : clientsOne.length > 1 && clientsOne.length <= 4 ? clientsOne.length -1 : 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: clientsOne.length === 1 ? 1 : clientsOne.length > 1 && clientsOne.length <= 6 ? clientsOne.length -1 : 6,
                    slidesToScroll: 1
                }
            }
        ]
    }

    
   

    return (
        <div>
            {/* <Slide {...ssOne}>
                {slideData.map((sitem, index) =>
                
                    <div className="item" key={index}>
                        <div className="clients-logo">
                            <a href={sitem.url} className="text-decoration-none text-reset">
                                <img src={sitem.image} alt={sitem.name} className="ts" />
                            </a>
                        </div>
                    </div>
                )}
            </Slide> */}
            <Slide {...ssOne}>
                {clientsOne.map((sitem, index) =>
                
                    <div className="item" key={index}>
                        <div className="clients-logo">
                            <a href={sitem.url} className="text-decoration-none text-reset">
                                <img src={`https://antopolis.antapp.space/` + sitem.image} alt={sitem.name} className="ts" />
                            </a>
                        </div>
                    </div>
                )}
            </Slide>
        </div>
    )
}
