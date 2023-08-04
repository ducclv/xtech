import '../../styles/for-kids.scss';

const ForKids = () => {
    const data = [
        {
            image: 'images/training/training_2.png',
            teacher: 'Đỗ Ngọc Minh',
            time: '72',
            price: '1.000.000',
            title: 'Trải nghiệm & Khám phá Robot',
            description: 'Khóa học lập trình web cơ bản dành cho trẻ em'
        }, {
            image: 'images/training/training_3.png',
            teacher: 'Đỗ Ngọc Minh',
            time: '72',
            price: '1.000.000',
            title: 'Thiết kế & Xây dựng Robot 1',
            description: 'Khóa học lập trình web cơ bản dành cho trẻ em'
        }, {
            image: 'images/training/training_4.png',
            teacher: 'Đỗ Ngọc Minh',
            time: '72',
            price: '1.000.000',
            title: 'Lập trình Robot căn bản',
            description: 'Khóa học lập trình web cơ bản dành cho trẻ em'
        }, {
            image: 'images/training/training_5.png',
            teacher: 'Đỗ Ngọc Minh',
            time: '72',
            price: '1.000.000',
            title: 'Lập trình Robot thông minh ',
            description: 'Khóa học lập trình web cơ bản dành cho trẻ em'
        }, {
            image: 'images/training/training_6.png',
            teacher: 'Đỗ Ngọc Minh',
            time: '72',
            price: '1.000.000',
            title: 'Lập trình IoTs',
            description: 'Khóa học lập trình web cơ bản dành cho trẻ em'
        },
    ];

    return (
        <div className='for-kids-container'>
            {data.map((e, i) => (
                <div className='for-kids-item'>
                    <img src={`${process.env.PUBLIC_URL}/${e.image}`} alt={'cover'} className='cover'/>
                    <div className='item-title'>{e.title}</div>
                    <div className='item-content'>
                        <div className='item-content-left'>Giáo viên</div>
                        <div className='item-content-right'>{e.teacher}</div>
                    </div>
                    <div className='item-content'>
                        <div className='item-content-left'>Thời lượng</div>
                        <div className='item-content-right'>{e.time} giờ</div>
                    </div>
                    <div className='item-content'>
                        <div className='item-content-left'>Học phí</div>
                        <div className='item-content-right'>{e.price} giờ</div>
                    </div>
                    <div className='item-description'>{e.description}</div>
                    <div className='register-button'>
                        Đăng ký ngay
                    </div>
                </div>
            ))}
        </div>
    );
}
export default ForKids;
