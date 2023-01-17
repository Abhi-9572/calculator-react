import React, { useState } from 'react'
import './calculator.css'

const Calculaor = () => {
    const[input,setInput]=useState("")

    const handleClick=(e)=>
    {
        setInput(input+e.target.value)
    }

    const calculateResult=()=>
    {
        // console.log("hi");
        // console.log(input);
        const result=eval(input)
        // console.log(result);
        setInput(result)
    }
    const resetInput=()=>
    {
        setInput("")
    }
    const handleBack=()=>
    {
        let newInput=input.slice(0,input.length-1)
        setInput(newInput)
    }
  return (
   <>
   <h1>Calculator</h1>
   <div>
    <input type="text" value={input}/>
    <button onClick={calculateResult}>Calculate</button>
    <button onClick={resetInput}>Reset</button> 
   </div>
   <div>
    <button value={7} onClick={handleClick}>7</button>
    <button value={8} onClick={handleClick}>8</button>
    <button value={9} onClick={handleClick}>9</button>
    <button value="/" onClick={handleClick}>/</button>
   </div>
   <div>
    <button value={4} onClick={handleClick}>4</button>
    <button value={5} onClick={handleClick}>5</button>
    <button value={6} onClick={handleClick}>6</button>
    <button value="+" onClick={handleClick}>+</button>
   </div>
   <div>
    <button value={1} onClick={handleClick}>1</button>
    <button value={2} onClick={handleClick}>2</button>
    <button value={3} onClick={handleClick}>3</button>
    <button value="-" onClick={handleClick}>-</button>
   </div>
   <div>
    <button value={0} onClick={handleClick}>0</button>
    <button value="." onClick={handleClick}>.</button>
    <button value="=" onClick={calculateResult}>=</button>
    <button value="*" onClick={handleClick}>*</button>
   </div>
   <div>
    <button value={0} onClick={handleBack}>Back Space</button>
    
   </div>
   </>
  )
}

export default Calculaor