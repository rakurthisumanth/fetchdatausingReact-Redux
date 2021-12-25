import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import { users } from '../../redux/tabledata/middleware/Index'
import Presentation from './Presentation'


function Container(props) {
    useEffect(()=>{
        props.userdata(users())


    },[])
    // console.log(props.data)
    return (
        <div>
            <h1>Json-Data</h1>
          <Presentation data={props.data}/>
            
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        data:state.data

    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        userdata:()=>dispatch(users())

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Container)
