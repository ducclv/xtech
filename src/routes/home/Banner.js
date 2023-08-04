import React from "react";
import Carousel from 'better-react-carousel'
import '../../styles/banner.scss';
function Banner({data}) {

    return (
        <div className="banner">
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
