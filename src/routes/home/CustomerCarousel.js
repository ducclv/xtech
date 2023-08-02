import Carousel from "better-react-carousel";
import React from "react";

const CustomerCarousel = () => {
    const data = [
        {
            image: `${process.env.PUBLIC_URL}/images/home/customer/customer-1.png`,
        }, {
            image: `${process.env.PUBLIC_URL}/images/home/customer/customer-2.png`,
        }, {
            image: `${process.env.PUBLIC_URL}/images/home/customer/customer-3.png`,
        }, {
            image: `${process.env.PUBLIC_URL}/images/home/customer/customer-4.png`,
        }, {
            image: `${process.env.PUBLIC_URL}/images/home/customer/customer-5.png`,
        },

    ];
    return (
        <div className='customer-carousel'>
            <Carousel cols={5} rows={1} gap={10} loop showDots
                      containerStyle={{alignItems: 'center', justifyContent: 'center', display:'flex'}}>
                {data.map((item, index) => (
                    <Carousel.Item key={index} className='item'>
                        <img width='100%' src={item.image} alt={'a'}/>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}
export default CustomerCarousel;