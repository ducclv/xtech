import '../../styles/history-tree.scss';

const HistoryTree = () => {
    const data = [
        {
            image: 'images/about/image2.png',
            title: '3/2023',
            description: 'Hoạt động Trải nghiệm và Khám phá Robotics đầu tiên do bà Tạ Hồng Hạnh và ông Hoàng Văn Xiêm đồng tổ chức, là ý tưởng do việc hình thành xTechEdu.'
        }, {
            image: 'images/about/image3.png',
            title: '14/7/2023 ',
            description: 'Công ty Cổ phần phát triển giáo dục xTechEdu chính thức ra đời.'
        }, {
            image: 'images/about/image4.png',
            title: '24/7/2023 ',
            description: 'Lễ ký kết hợp tác giữa Công ty Cổ phần phát triển giáo dục xTechEdu và Trường Tiểu học Nguyễn Siêu diễn ra.'
        },
    ]
    return (
        <div className='history-tree-container'>
            {data.map((e, i) => {
                return (
                    <div className='history-tree-item' key={i}>
                        <div className='image-cover'>
                            <img src={`${process.env.PUBLIC_URL}/${e.image}`} alt='image1' width={'566px'}/>
                        </div>
                        <div className='vertical-line'>
                            <img src={`${process.env.PUBLIC_URL}/images/about/red-dot.png`} alt='image1'/>
                            <div className={i === data.length - 1 ? 'line-end' : 'line'}></div>
                        </div>
                        <div className='history-tree-content'>
                            <div className='history-tree-title'>
                                {e.title}
                            </div>
                            <div className='history-tree-description'>
                                {e.description}
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    );
}
export default HistoryTree;
