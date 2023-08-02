import React from "react";
import Carousel from 'better-react-carousel'

function Banner() {
    const data = [
        {
            image: `${process.env.PUBLIC_URL}/images/home/banner.png`,
        }, {
            image: `${process.env.PUBLIC_URL}/images/home/banner.png`,
        }, {
            image: `${process.env.PUBLIC_URL}/images/home/banner.png`,
        }, {
            image: `${process.env.PUBLIC_URL}/images/home/banner.png`,
        },
    ];
    return (
        <div className="Banner">
            <Carousel cols={1} rows={1} gap={10} loop showDots>
                {data.map((item, index) => (
                    <Carousel.Item key={index}>
                        <img width='100%' src={item.image} alt={'a'}/>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default Banner;
