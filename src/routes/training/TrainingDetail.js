import {useParams} from "react-router-dom";

const TrainingDetail = () =>{
    const {id} = useParams();
    console.log(id);
    return (
        <div className='training-detail-container'>

            <img src={`${process.env.PUBLIC_URL}/images/training/training-detail-1.png`} alt={'baner'}/>
        </div>
    );
}

export default TrainingDetail;
