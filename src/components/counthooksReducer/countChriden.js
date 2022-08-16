import React,{useContext} from "react";
import ReactContext from '../../hooksReactContext/index'
function CountChriden(){
    let {state,dispatch}=useContext(ReactContext)
    const countINC=()=>{
        dispatch({
            type:'inc',
            payload:{count:++state.count}
        })
    }
    const countDEC=()=>{
        dispatch({
            type:'dec',
            payload:{count:--state.count}
        })
    }
    return(
        <div>子组件计数器:<button type='button' onClick={countINC.bind(this)}>+</button>{state.count}<button type='button' onClick={countDEC.bind(this)}>-</button></div>
    )
}
export default CountChriden
