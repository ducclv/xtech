import React from 'react';
import '../styles/footer.scss';
import SVG from "react-inlinesvg";

const Footer = () => {
    return (
        <div className='footer'>
            <SVG src={process.env.PUBLIC_URL + '/images/logo.svg'} style={{ marginLeft:'100px', marginRight:'100px'}}/>
            <div className='company-name'>Công ty CP phát triển giáo dục xTechEdu</div>
            <div className='footer-content'>
                <div className='content-left'>
                    <div className='content-left-item'>
                        <div className='title'><strong>Hotline</strong> 0868088627</div>
                        <div className='title'><strong>Email</strong> info@xtechedu.com.vn</div>
                    </div>
                    <div className='content-left-item'>
                        <div className='title'><strong>Văn phòng đại diện 1:</strong> Trường Tiểu học Nguyễn Siêu, Đường
                            Mạc Thái Tổ, Quận Cầu Giấy, Hà Nội.
                        </div>
                    </div>
                    <div className='content-left-item'>
                        <div className='title'><strong>Văn phòng đại diện 2:</strong> Nhà LK20-Lô TT04, Ngõ 02 Đường Hàm
                            Nghi, Quận Nam Từ Liêm, Hà Nội.
                        </div>
                    </div>


                </div>
                <div className='content-right'>
                    <div className='content-right-first'>
                        <div className='content-right-item'>
                            <div className='title'>VỀ CHÚNG TÔI</div>
                            <div className='description'>Câu chuyện hình thành</div>
                            <div className='description'>Triết lý giáo dục</div>
                        </div>
                        <div className='content-right-item'>
                            <div className='title'>SẢN PHẨM</div>
                            <div className='description'>Sản phẩm công nghệ</div>
                        </div>
                        <div className='content-right-item'>
                            <div className='title'>ĐÀO TẠO</div>
                            <div className='description'>Giá trị cốt lõi</div>
                            <div className='description'>Con số quan trọng</div>
                        </div>
                    </div>
                    <div className='content-right-first'>
                        <div className='content-right-item'>
                            <div className='title'>KHÔNG GIAN SÁNG TẠO</div>
                            <div className='description'>Không gian TH Nguyễn Siêu</div>
                            <div className='description'>Không gian Hàm Nghi</div>
                            <div className='description'>Không gian Ảo</div>
                        </div>
                        <div className='content-right-item'>
                            <div className='title'>CỘNG ĐỒNG</div>
                            <div className='description'>Các CLB Robotics</div>
                            <div className='description'>Các họat động phát triển phong trào Robotics</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-copy-right'>
                <div className='line'></div>
                <div className='description'>© 2023 Copyright xTechEdu. All Rights reserved</div>
            </div>
        </div>
    );
};
export default Footer;
