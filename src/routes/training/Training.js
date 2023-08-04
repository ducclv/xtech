import Banner from "../home/Banner";
import '../../styles/training.scss';
import ServiceContainer from "../home/ServiceContainer";
import ForKids from "./ForKids";
const Training = () => {
    const data = [
        {
            image: `${process.env.PUBLIC_URL}/images/training/training_1.png`,
        }
    ];
    return (
        <div className='training-container'>
            <Banner data={data}/>
            <div className='training-activity'>
                <div className='training-activity-title'>
                    HOẠT ĐỘNG ĐÀO TẠO
                </div>
                <div className='training-activity-subtitle'>“xTechEdu được tạo nên để hiện thực hóa giấc mơ...”</div>
            </div>
            <ServiceContainer />
            <div className='training-activity-description'>Tư duy công nghệ</div>
            <ForKids />
            <div className='training-activity-description'>Thực chiến</div>
            <ForKids />
        </div>
    );
}
export default Training;
