import '../App.css';
import AngeryImage from './angry';
import AnxiousImage from './anxious';
import HappyImage from './happpy';
import FreakedOutImage from './freakedOut'
import SurprisedImage from './surprised'
import {useSelector} from 'react-redux';

const EmotionPicture =()=> {

  const allEmotionsArr = [<AngeryImage />,<AnxiousImage />,<HappyImage />,<FreakedOutImage/>,<SurprisedImage/>,'תעשה פרצוף עם הרגש: כעס','תעשה פרצוף עם הרגש: חרדה','תעשה פרצוף עם הרגש: שמחה','תעשה פרצוף עם הרגש: בהלה','תעשה פרצוף עם הרגש: מופתע']
  const emotions = useSelector((state)=>state.emotions);
  
  return (
    <div>
      {emotions.length%12 <= 4?
        <div>
        <div className='pic'>
        {allEmotionsArr[emotions.length%12]}
        </div>
        </div>
      :
       <div className='makeFace'>
       
        {
          (emotions.length)%12 >=5 ? 
          allEmotionsArr[(emotions.length)%12]:''
       }
        </div>
     }
      </div>
  );
}

export default EmotionPicture;
