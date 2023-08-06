import {useParams} from "react-router-dom";
import '../../styles/training-detail.scss';
import ForKids from "./ForKids";

const TrainingDetail = () => {
    const {id} = useParams();
    return (
        <div className='training-detail-container'>
            <img className='training-detail-banner'
                 src={`${process.env.PUBLIC_URL}/images/training/training-detail-1.png`}
                 alt={'banner'}/>
            <div className='training-detail-title'>
                {id === '0' ? 'DÀNH CHO TRẺ EM ' : 'DÀNH CHO DOANH NGHIỆP & NGƯỜI ĐI LÀM'}
            </div>
            <ForKids/>
        </div>
    );
}

export default TrainingDetail;
