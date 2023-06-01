
export type Action = {
    type: "LANGUAGECHANGE" ,
    payload: string
  };
const initialState:string = "English";

const changeTheLanguage = (state:string=initialState,action:Action)=>{
    if(action.type==="LANGUAGECHANGE"){
        if(state!==action.payload){
            state = action.payload;
        }else{
            state = initialState
        }
    }
    return state ;
   

}
export default changeTheLanguage;