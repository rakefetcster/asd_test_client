import '../App.css';
import EmotionPicture from "./emotionPicture";
import Emotion from "./emotion"
import { useState} from 'react';
import WebcomComponent from "./webCom";

const StartTest=(props)=>{
  const [level,setLevel] = useState(1);
  const uplevel=(thisLevel)=>{
    setLevel(thisLevel);
    if(level===2){
      props.callback(level);
    }
}
  return (
    
    <div className="">
        <EmotionPicture />
        {level === 1 ?
        <Emotion callback={uplevel} />
        :
        <WebcomComponent callback={uplevel} age={props.age} asd={props.asd}/>
        
      }
      
    </div>
  )
}

export default StartTest;
