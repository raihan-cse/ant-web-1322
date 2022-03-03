import React, {useState, useEffect} from 'react'
import Slide from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function ClientSlideThree() {

    const [clientsThree, setClientsThree] = useState([])
    useEffect(() => {
        fetch('https://antopolis.antapp.space/api/clients/3')
            .then(res => res.json())
            .then(data => setClientsThree(data))
    }, [])

    const ssThree = {
        slidesToShow: clientsThree.length === 1 ? 1 : clientsThree.length > 1 && clientsThree.length <= 10 ? clientsThree.length - 1 : 10,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: clientsThree.length === 1 ? 1 : clientsThree.length > 1 && clientsThree.length <= 4 ? clientsThree.length -1 : 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: clientsThree.length === 1 ? 1 : clientsThree.length > 1 && clientsThree.length <= 6 ? clientsThree.length -1 : 6,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <div>
            <Slide {...ssThree}>
                {clientsThree.map((sitem, index) =>
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
