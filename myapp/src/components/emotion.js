import '../App.css';
import { useDispatch } from "react-redux";
import { useState} from 'react';

const Emotion=(props)=>{
  const dispatch = useDispatch();
  const [thisId,setThisId] = useState(0);
  const [thisId1,setThisId1] = useState(0);
  const [emotion,useEmotion] = useState({});
  const real_emotion = ['Angery','Anxious','Happy','FreakedOut',  'Surprised'];
  const [selectedOption, setSelectedOption] = useState('');
  
  
  const OnChangeValue=(e)=>{
    setThisId1(e.target.id);
    setSelectedOption(e.target.value);
    
  }
  
  const Add=()=>{
    useEmotion({ ...emotion, real_emotion:real_emotion[thisId],emotions:selectedOption});
    setThisId(thisId+1);
    document.getElementById(thisId1).checked = false;
    dispatch({type:'ADD',payload:emotion})
    
    if (thisId === 4){
      setThisId(thisId-1);
      props.callback(2);
    }
  }
    
  
  
  return(
    <div>
    <h1 className='h11' > בחר/י לפי התמונה את הרגש המתאים</h1>
    <div className="radio">
        <div className='radioButton'><input checked={selectedOption === "happy"} type="radio" value="happy" name="happy" id= "happy" onChange={OnChangeValue} /> <label className='label1'>שמחה</label></div>
        <div className='radioButton'><input  checked={selectedOption === "angry"} type="radio" value="angry" name="angry" id= "angry" onChange={OnChangeValue}/> <label className='label1' >כעס </label> </div>
        <div className='radioButton'><input checked={selectedOption === "anxious"} type="radio" value="anxious" name="anxious" id= "anxious" onChange={OnChangeValue} / > <label className='label1' >חרדה</label></div>
        <div className='radioButton'><input  checked={selectedOption === "freakedOut"} type="radio" value="freakedOut" name="freakedOut" id= "freakedOut" onChange={OnChangeValue}/> <label className='label1'>בהלה</label></div>
        <div className='radioButton'><input checked={selectedOption === "surprised"} type="radio" value="surprised" name="surprised" id= "surprised" onChange={OnChangeValue}/><label className='label1'>מופתע</label> </div>
        <br />
        <button className='continue_button1' onClick={Add}>הבא</button>
        </div>
      </div>
  );
}
export default Emotion;
