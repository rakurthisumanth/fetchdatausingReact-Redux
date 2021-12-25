import axios from "axios"
import { fetchfailure, fetchrequest, fetchsucess } from "../actions/ActionCreater"


export const users=()=>{
   return(dispatch)=>{
       dispatch(fetchrequest())
       axios.get("https://jsonplaceholder.typicode.com/users")
       .then(res=>{
           const userdata=res.data
           dispatch(fetchsucess(userdata))
       })
       .catch(error=>{
           const usererror=error.message;
           dispatch(fetchfailure(usererror))
       })

   }
}



