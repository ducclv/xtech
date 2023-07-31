import {Carousel} from 'react-carousel-minimal';
import {useEffect, useState} from "react";

function Banner() {
    const data = [
        {
            image: `${process.env.PUBLIC_URL}/images/home/banner.png`,
            // caption: "San Francisco"
        }
    ];
    const [widthScreen, setWidthScreen] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWidthScreen(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });
    return (
        <div className="Banner">
            <Carousel
                data={data}
                time={1000}
                width={`${widthScreen}px`}
                height="574px"
                radius="10px"
                // slideNumber={true}
                // slideNumberStyle={slideNumberStyle}
                // captionPosition="bottom"
                // automatic={true}
                dots={true}
                // pauseIconColor="white"
                // pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                // thumbnails={true}
                // thumbnailWidth="100px"
            />
        </div>
    );
}

export default Banner;
