import { StartSpinner, StopSpinner } from "../Actions/SpinnerAction";

const initialState = {
    SpinnerStarted:false,
    SpinnerStoped:false,
    winnerNAME:"",
    PeoplesArray:[],
    SoundStared:false,
}


export default (state = initialState,action)=>{
    switch(action.type){
        case StartSpinner:
            return{
                ...state,
                SpinnerStarted:true,
                SoundStared:false
            };
        case StopSpinner:
            return{
                ...state,
                SpinnerStoped:true,
                SoundStared:true
            };
            default:
                return state
    }
}
