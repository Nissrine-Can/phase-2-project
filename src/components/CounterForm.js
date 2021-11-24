import React from "react"
import {useState, useEffect } from "react";


function CounterForm() {
      const [word, setWord]  = useState("")
      const [count, setCount] = useState(0)
     
     
     function handleSubmit(e) {
         e.preventDefault()
        
        setCount(count+1)
        setWord("")
     }
     
     
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            name="word"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            ></input>
            <button type="submit">Submit</button>
        </form>
        <h2>Counter <span>{count}</span></h2>
        </>
    )

}

export default CounterForm;