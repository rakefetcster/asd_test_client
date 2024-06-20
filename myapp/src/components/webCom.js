import '../App.css';

import Webcam from 'react-webcam'
import { useRef, useState} from 'react';
import { useDispatch } from "react-redux";

const WebcomComponent=(props)=>{
  const dispatch = useDispatch();
  const allEmotionsWordsArr = ['Angery','Anxious','Happy','FreakedOut','Surprised'];
  const [arrid,setArrId] = useState(0);
  const [isShow,setIsShow] = useState(true);
  const [emotion,setEmotion] = useState();
  const [personal,setPersonal]= useState({age: props.age, asd: props.asd});
  const [imgSrc, setimgSrc] = useState(null); 
  const webRef = useRef(null);
  

  const capture =()=>{
    setimgSrc(webRef.current.getScreenshot());
    
  }
  const Add=()=>{
    if(arrid===4){
      setIsShow(false);
    }
    if (arrid === 5){
      setEmotion({...emotion,emotions:allEmotionsWordsArr[arrid],emotionsData:imgSrc});
      dispatch({type:'ADD',payload:emotion});
      setPersonal({age: props.age, asd: props.asd})
      dispatch({...personal,type:'ADD',payload:personal});
      props.callback(2);
    }
    else{
    setEmotion({...emotion,emotions:allEmotionsWordsArr[arrid],emotionsData:imgSrc});
    dispatch({type:'ADD',payload:emotion});
    setArrId(arrid+1);
    }
  }
  return(
    <div>
    <div className={isShow? "hideStyle":"showStyle"}><button className='continue_button2' onClick={Add}>סיום בדיקה</button></div>
    <div className={isShow? "showStyle1":"hideStyle"}>
        <Webcam audio={false} ref={webRef} screenshotFormat="image/jpeg" height={400} width={400}/>
        <button className='continue_button2' onClick={capture}>Capture photo</button>
        {imgSrc && (<img className= 'picVideo' src={imgSrc} alt='take an emotion ' height={300} width={300} />
        )}
        <button className='continue_button2' onClick={Add}>שמור</button>
        
        </div>
        </div>
  )
};
export default WebcomComponent;
