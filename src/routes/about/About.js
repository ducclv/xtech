import '../../styles/about.scss';
import SVG from "react-inlinesvg";
import {useEffect, useRef, useState} from "react";
import CustomerCarousel from "../home/CustomerCarousel";
import HistoryTree from "./HistoryTree";

const About = () => {
    const [contentHeight, setContentHeight] = useState(0);
    const contentRef = useRef(null);
    const icon2Ref = useRef(null);

    const handleResize = () => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.clientHeight);
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        // Áp dụng chiều cao của content cho icon2
        if (icon2Ref.current) {
            icon2Ref.current.style.height = `${contentHeight}px`;
        }
    }, [contentHeight]);
    const data = [
        {
            image: `${process.env.PUBLIC_URL}/images/about/image1.png`
        },{
            image: `${process.env.PUBLIC_URL}/images/about/image1.png`
        },{
            image: `${process.env.PUBLIC_URL}/images/about/image1.png`
        }, {
            image: `${process.env.PUBLIC_URL}/images/about/image1.png`
        },

    ];
    return (
        <div className='about-container'>
            <CustomerCarousel data={data} col={1}/>
            <div className='about-title'>
                <div className='title'>CÂU CHUYỆN HÌNH THÀNH</div>
                <div className='description'>“xTechEdu được tạo nên để hiện thực hóa những giấc mơ...”</div>
            </div>
            <div className='about-content'>
                <div className='icon1'>
                    <SVG src={`${process.env.PUBLIC_URL}/images/about/icon1.svg`} width="104px"/>
                </div>
                <div className='content' ref={contentRef}>
                    Ý tưởng thành lập xTechEdu xuất phát từ hoạt động trải nghiệm và khám phá Robot
                    dành cho học sinh Trường Liên cấp Everest được tổ chức vào tháng 3 năm 2023, do bà Tạ Hồng Hạnh và
                    ông Hoàng Văn Xiêm tổ chức; với mong muốn tạo cơ hội để học sinh được tiếp cận, hiểu rõ hơn về lĩnh
                    vực công nghệ Robotics và Trí tuệ nhân tạo (AI).
                </div>
                <div className='icon2' ref={icon2Ref}>
                    <SVG src={`${process.env.PUBLIC_URL}/images/about/icon2.svg`} className='icon2'/>
                </div>
            </div>
            <HistoryTree />
            <div className='educational-philosophy'>
                <div className='title'>TRIẾT LÝ GIÁO DỤC</div>
                <div className='container'>
                    <img src={`${process.env.PUBLIC_URL}/images/about/philosophy.png`} alt={'p'} className='people'/>
                </div>
            </div>
        </div>
    );
};

export default About;
