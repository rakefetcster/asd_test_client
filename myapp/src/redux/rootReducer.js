const initialValue={
 emotions:[],
}

const applyCounterChanger = (state = initialValue,action)=>{
  switch(action.type){
    case 'ADD':{
      return {...state,emotions:[...state.emotions,action.payload]}
    }
    case 'DELETE':{
      return {...state,emotions:[]}
    }
    default:
      return state;
  }
}
export default applyCounterChanger;
