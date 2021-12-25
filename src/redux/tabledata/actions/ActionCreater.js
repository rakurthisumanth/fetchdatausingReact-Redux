import ACTIONTYPES from "./ActionType"

export const fetchrequest=()=>{
    return{
        type:ACTIONTYPES.FETCH_REQUEST
    }
}
export const fetchsucess=(datas)=>{
    return{
        type:ACTIONTYPES.FETCH_SUCESS,
        payload:datas
    }
}
export const fetchfailure=(error)=>{
    return{
        type:ACTIONTYPES.FETCH_FAILURE,
        payload:error
    }
}
