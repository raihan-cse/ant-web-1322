import React, {useState, useEffect} from 'react'
import Slide from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function ClientSlideTwo() {
    const baseUrl = 'https://antopolis.antapp.space/'

    const [clientsTwo, setClientsTwo] = useState([])
    useEffect(() => {
        fetch('https://antopolis.antapp.space/api/clients/2')
            .then(res => res.json())
            .then(data => setClientsTwo(data))
    }, [])

    const ssTwo = {
        slidesToShow: clientsTwo.length === 1 ? 1 : clientsTwo.length > 1 && clientsTwo.length <= 10 ? clientsTwo.length - 1 : 10,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        rtl: true,
        autoplaySpeed: 3000,
        speed: 2000,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: clientsTwo.length === 1 ? 1 : clientsTwo.length > 1 && clientsTwo.length <= 4 ? clientsTwo.length -1 : 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: clientsTwo.length === 1 ? 1 : clientsTwo.length > 1 && clientsTwo.length <= 6 ? clientsTwo.length -1 : 6,
                    slidesToScroll: 1
                }
            }
        ]
    }



    return (
        <div>
            <Slide {...ssTwo} className="slide-rtl">
                {clientsTwo.map((sitem, index) =>
                    <div className="item" key={index}>
                        <div className="clients-logo">
                            <a href={sitem.url} className="text-decoration-none text-reset">
                                <img src={baseUrl + sitem.image} alt={sitem.name} className="ts" />
                            </a>
                        </div>
                    </div>
                )}
            </Slide>
        </div>
    )
}
