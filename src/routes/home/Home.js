import '../../styles/home.scss';
import SVG from "react-inlinesvg";
import Banner from "./Banner";
import CustomerCarousel from "./CustomerCarousel";
import ServiceContainer from "./ServiceContainer";

const Home = () => {
    const importantNumbers = [
        {
            url: '/images/home/number-icon.svg',
            title: 'Học sinh',
            description: 'Đào tạo tại trường Tiểu học Nguyễn Siêu (2023 - 2024)'
        },
        {
            url: '/images/home/number-icon.svg',
            title: 'Đối tác ',
            description: 'Sẽ kí kết trong thời gian tới'
        },
        {
            url: '/images/home/number-icon.svg',
            title: 'Hoạt động Cộng đồng',
            description: 'Đã tổ chức từ năm 2021 - 2023'
        },
        {
            url: '/images/home/number-icon.svg',
            title: 'Hoạt động Cồng đồng',
            description: 'Sẽ đồng hành trong thời gian tới '
        },
        {
            url: '/images/home/number-icon.svg',
            title: 'Hoạt động Cộng đồng',
            description: 'Đã tổ chức từ năm 2021 - 2023'
        }];
    const customers = [
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
        <div className='home-container'>
            <div className='slogan'>
                <div className='slogan-title'>“LEARNING HOW TO LEARN”</div>
                <div className='slogan-description'>Học tập hiệu quả nhất chính là học cách học</div>
            </div>
            <Banner data={data}/>
            <div className='core-value'>
                <div className='core-value-title'>
                    GIÁ TRỊ CỐT LÕI
                </div>
                <div className='core-value-container'>
                    <div className='core-value-content'>
                        <div className='icon'>
                            <SVG src={`${process.env.PUBLIC_URL}/images/home/icon-1.svg`}/>
                        </div>
                        <div className='title'>
                            Tiên phong
                        </div>
                        <div className='description'>
                            Giáo dục thực chất
                        </div>
                        <div className='description'>
                            Bồi dưỡng kĩ năng
                        </div>
                        <div className='description'>
                            Hướng đến mục tiêu dẫn đầu
                        </div>
                        <div className='icon' style={{marginTop: '34px'}}>
                            <SVG src={`${process.env.PUBLIC_URL}/images/home/icon-2.svg`}/>
                        </div>
                        <div className='title-2'>
                            Khai phóng
                        </div>
                        <div className='description'>
                            Khai mở tiềm năng
                        </div>
                        <div className='description'>
                            Giải phóng trí tuệ
                        </div>
                        <div className='description'>
                            Khám phá chính bản thân mình
                        </div>
                        <div className='icon' style={{marginTop: '34px'}}>
                            <SVG src={`${process.env.PUBLIC_URL}/images/home/icon-3.svg`}/>
                        </div>
                        <div className='title'>
                            Sáng tạo
                        </div>
                        <div className='description'>
                            Sáng tạo là động lực phát triển
                        </div>
                        <div className='description'>
                            Mỗi ngày là một điểm xuất phát mới
                        </div>
                    </div>
                    <div className='core-value-image'>
                        <img src={`${process.env.PUBLIC_URL}/images/home/core-value.svg`} alt={'xTech'} height={710}/>
                    </div>
                </div>
                <div className='core-value-footer'>
                    <div className='icon'>
                        <SVG src={`${process.env.PUBLIC_URL}/images/home/three-dot.svg`}/>
                    </div>
                    <div className='title'>
                        Tận tâm
                    </div>
                    <div className='description'>
                        “Chúng tôi không làm giáo dục để kiếm tiền cho chính bản thân chúng tôi, mà chúng tôi kiếm tiền
                        để làm giáo dục tốt hơn mỗi ngày”
                    </div>
                </div>
            </div>
            <div className='number-important'>
                <div className='number-important-title'>
                    CON SỐ QUAN TRỌNG
                </div>
                <div className='number-important-container'>
                    {importantNumbers.map((e, i) => (
                        <div className='item' key={i}>
                            <div className='item-top'>
                                {i % 2 === 0 ?
                                    (<SVG src={`${process.env.PUBLIC_URL}/images/home/number-icon.svg`}
                                          height={200}/>)
                                    : (<div style={{height: '200px'}}></div>)}
                            </div>
                            <div className='item-content'
                                 style={i % 2 !== 0 ? {justifyContent: 'flex-end'} : {justifyContent: 'flex-start'}}>
                                <div className='title'>{e.title}</div>
                                <div className='description'>{e.description}</div>
                            </div>
                            <div className='item-bottom'>
                                {i % 2 !== 0 ?
                                    (<SVG src={`${process.env.PUBLIC_URL}/images/home/number-icon.svg`}
                                          height={200}/>)
                                    : (<div style={{height: '200px'}}></div>)}
                            </div>
                        </div>

                    ))}
                </div>
            </div>
            <div className='service'>
                <div className='service-title'>
                    DỊCH VỤ VÀ ĐÀO TẠO
                </div>
                <ServiceContainer />
            </div>
            <div className='customer-container'>
                <div className='customer-title'>
                    ĐỐI TÁC ĐỒNG HÀNH
                </div>
                <CustomerCarousel data={customers} col={5}/>
            </div>
        </div>
    );
};

export default Home;
