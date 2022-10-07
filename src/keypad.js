import React from "react";

export default function Keypad(props){
    const click = props.click
    const clear = props.clear
    const equals = props.equals
    return(
        <div className='calculator--keypad'>
          <input className="one" type= "button"onClick={click} value="1"></input>
          <input type="button" className="two" value="2"onClick={click}></input>
          <input type="button" className='three' value="3" onClick={click}></input>
          <input type="button" className='four' value="4"onClick={click}></input>
          <input type="button" className='five' value="5" onClick={props.click}></input>
          <input type="button" className='six' value="6"onClick={click}></input>
          <input type="button" className='seven' value="7"onClick={props.click}></input>
          <input type="button" className='eight' value="8"onClick={props.click}></input>
          <input type="button" className='nine' value="9"onClick={props.click}></input>
          <input type="button" className='zero' value="0"onClick={props.click}></input>
          <input type="button" className='decimal' value="."onClick={props.click}></input>
          <input type="button" className='addition' value="+"onClick={props.click}></input>
          <input type="button" className='subtract' value="-"onClick={props.click}></input>
          <input type="button" className='multiply' value="*"onClick={props.click}></input>
          <input type="button" className='divide' value="/"onClick={props.click}></input>
          <input type="button" className='clear' value="CLEAR" onClick={clear}></input>
          <input type="button" className='equals' value="=" onClick={equals}></input>
        </div>
    );
}