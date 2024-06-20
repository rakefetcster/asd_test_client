import './App.css';
import StartTest from './components/startTest'
import { useState} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';
import { useDispatch } from "react-redux";

const url='http://127.0.0.1:5000/asdtest/'
const App=()=> {
  const dispatch = useDispatch();
  const [age,setAge] = useState(0)
  const [isShow,setIsShow] = useState(true);
  const [asd,setAsd] = useState(0)
  const [level,setLevel] = useState(1);
  const [tocontinue,setTocontinue] = useState(0);
  const emotions = useSelector((state)=>state.emotions);
  console.log(emotions);
  const uplevel=(thisLevel)=>{
    
    if(level===2){
      setLevel(1);
    }
    else{
      setLevel(thisLevel);
    }
  }
  const Tocontinue=()=>{
    setTocontinue(1);
  }
  const NewTest=()=>{
    setLevel(1);
    setTocontinue(0);
    setAge(0);
    setAsd(0);
  }
  const endTest = async()=>{
    const {data} = await axios.post(url,emotions);
    console.log(data);
    dispatch({type:'DELETE',payload:[]})
    setIsShow(false);

  };
  return (
    <div className="App">
      
      {level === 1 ?
        <div>
        {tocontinue ?
          <div>
          <StartTest callback={uplevel} age={age} asd={asd}/>
          </div>
        :
          
        <div className='allqa'>
        <h1 className={isShow? "showStyle":"hideStyle"}> בדיקת תקשורת</h1>
            <div className='qa'>
              <label>
              <input age ="age" onChange={(e)=>setAge(e.target.value)} />
                :אנא רשום את גילך
              </label>
            </div>
            <br />
            <div className='qa' onChange={(e)=>setAsd(e.target.value)}>
              :האם אתה מאובחן עם בעית תקשורת
              <label>
              <input type="radio" name="yes" value="yes" />
              כן
              </label>
              <label>
              <input type="radio" name="no" value="no" />
              לא
              </label>
            </div>
            <br />
            <button className='continue_button' onClick={Tocontinue}>המשך</button>
        </div>
        }
        </div>
        :
        <div>
        <div className={isShow? "showStyle":"hideStyle"}>
        <h2>סיום בדיקה - תודה על השתתפותך</h2>
        <button onClick={NewTest}>בדיקה חדשה</button>
        <button onClick={endTest}>שמור נתונים וצא</button>
        </div>
        <div className={isShow ? "hideStyle":"showStyle"}>
          <h1>הנתונים נשמרו בהצלחה, תודה רבה</h1>
          </div>
      </div>
    }
      
    
      </div>
      
    
    
  );
}

export default App;
