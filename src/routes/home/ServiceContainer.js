import SVG from "react-inlinesvg";
import '../../styles/service-container.scss';
import {useNavigate} from "react-router-dom";
import {scrollToTop} from "../../components/ScrollToTop";

const ServiceContainer = () => {
    const navigate = useNavigate();
    return (
        <div className='service-container'>
            <div className='service-item' onClick={() => {
                navigate('/dao-tao/0');
                scrollToTop();
            }}>
                <div className='service-item-icon'>
                    <SVG src={`${process.env.PUBLIC_URL}/images/home/service-icon-1.svg`}/>
                </div>
                <div className='service-item-title'>
                    Tư duy Công nghệ
                </div>
                <div className='service-item-description'>
                    Dành cho Trẻ em
                </div>
                <div className='see-more'>
                    <div className='text'>Xem thêm</div>
                </div>
            </div>
            <div className='vertical-line'></div>
            <div className='service-item' onClick={() => {
                navigate('/dao-tao/1')
                scrollToTop();
            }}>
                <div className='service-item-icon'>
                    <SVG src={`${process.env.PUBLIC_URL}/images/home/service-icon-2.svg`}/>
                </div>
                <div className='service-item-title'>
                    Kỹ năng Thực chiến
                </div>
                <div className='service-item-description'>
                    Dành cho Người đi làm
                </div>
                <div className='see-more'>
                    <div className='text'>Xem thêm</div>
                </div>
            </div>
        </div>

    );
}
export default ServiceContainer;
