import Carousel from "better-react-carousel";
import React from "react";


const CustomerCarousel = ({data, col}) => {
    return (
        <div className='customer-carousel'>
            <Carousel cols={col} rows={1} gap={10} loop={true} showDots={true}
                      containerStyle={{alignItems: 'center', justifyContent: 'center', display: 'flex'}}
            >
                {data.map((item, index) => (
                    <Carousel.Item key={index}>
                        <img width='100%' src={item.image} alt={'a'}/>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}
export default CustomerCarousel;
