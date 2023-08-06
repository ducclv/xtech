import '../../styles/create-space.scss';
import Banner from "../home/Banner";

const CreativeSpace = () => {
    const data = [
        {
            image: `${process.env.PUBLIC_URL}/images/creative-space/image_1.png`,
        }
    ];
    return (
        <div className='creative-space-container'>
            <Banner data={data}/>
            <div className='creative-space-slogan'>
                <h1>KHÔNG GIAN SÁNG TẠO </h1>
                <p>“xTechEdu được tạo nên để hiện thực hóa giấc mơ...”</p>
            </div>
            <div className='creative-space-content'>
                <div className='item'>
                    <img src={`${process.env.PUBLIC_URL}/images/creative-space/image_2.png`} alt=''
                         className='image-item'/>
                    <div className='content-item'>
                        <div className='title'>Trường TH Nguyễn Siêu</div>
                        <div className='sub-title'>Đ/c : Trường Tiểu học Nguyễn Siêu 33 Mạc Thái Tổ, Yên Hòa, Cầu Giấy,
                            Hà Nội
                        </div>
                        <div className='see-more'>
                            <div className='text'>Xem thêm</div>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <img src={`${process.env.PUBLIC_URL}/images/creative-space/image_3.png`} alt=''
                         className='image-item'/>
                    <div className='content-item-2'>
                        <div className='title'>Hàm Nghi</div>
                        <div className='sub-title'>Địa chỉ: Số 2 Hàm Nghi, Từ Liêm, Hà Nội</div>
                        <div className='see-more'>
                            <div className='text'>Xem thêm</div>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <img src={`${process.env.PUBLIC_URL}/images/creative-space/image_4.png`} alt=''
                         className='image-item'/>
                    <div className='content-item-3'>
                        <div className='title'>Không gian Ảo về Robotics</div>
                        <div className='sub-title'>Địa chỉ: Số Lorem ipsum dolor sit amet</div>
                        <div className='see-more'>
                            <div className='text'>Xem thêm</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CreativeSpace;
