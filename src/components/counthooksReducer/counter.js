import React ,{useReducer}from "react";
import {defaultState,counterHooksReducer} from '../../hooksReducer/counterReducer';
import CountChriden from './countChriden';
import ReactContext from '../../hooksReactContext/index'
let   iCount=0;
function CountHooks() {
    let [state,dispatch]=useReducer(counterHooksReducer,defaultState);
    const countINC=()=>{
        dispatch({
            type:'inc',
            payload:{count:++iCount}
        })
    }
    const countDEC=()=>{
        dispatch({
            type:'dec',
            payload:{count:--iCount}
        })
    }
    return(
        <div>
            <ReactContext.Provider value={{state,dispatch}}>
                <CountChriden></CountChriden>
            </ReactContext.Provider>

            计数器：<button type='button' onClick={countINC.bind(this)}>+</button>
            {state.count} <button type='button' onClick={countDEC.bind(this)}>-</button>
        </div>
    )
}
export default CountHooks