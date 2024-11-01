import { getEmotionImage } from '../util/get-emotion-image';
import Button from './Button';
import './DiaryItem.css';
import { useNavigate } from 'react-router-dom';

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  const nav = useNavigate();

  return (
    <div className="DiaryItem">
      <section
        onClick={() => nav(`/diary/${id}`)}
        className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(emotionId)} alt="" />
      </section>
      <section
        onClick={() => nav(`/diary/${id}`)}
        className="info_section">
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </section>
      <section className="button_section">
        <Button
          onClick={() => nav(`/edit/${id}`)}
          text={'수정하기'}></Button>
      </section>
    </div>
  );
};

export default DiaryItem;
