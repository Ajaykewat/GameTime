export const StartSpinner = "Start_Spinner";
export const StopSpinner = "Stop_Spinner";

export const SpinnerStarted =(props)=>{
    return{
        type:StartSpinner,
        payload:props
    }
}
export const SpinnerStop =(props)=>{
    return{
        type:StopSpinner,
        payload:props
    }
}