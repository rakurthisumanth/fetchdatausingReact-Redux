import ACTIONTYPES from "../actions/ActionType"

const initialstate={
    loading:false,
    data:[],
    error:''
}


export const TableReducer=(state=initialstate,action)=>{
    switch(action.type){
        case ACTIONTYPES.FETCH_REQUEST:return{
            ...state,
            loading:true
        }
        case ACTIONTYPES.FETCH_SUCESS:return{
            loading:false,
            data:action.payload,
            error:''
        }
        case ACTIONTYPES.FETCH_FAILURE:return{
            loading:false,
            data:[],
            error:action.payload
        }
        default : return state
    }

}