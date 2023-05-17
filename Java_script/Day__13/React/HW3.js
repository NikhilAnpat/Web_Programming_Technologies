import { useState } from "react"
import React from 'react'
export default function HW3()
{
    

        let [sqr, Setsqr] = useState("")
        let str = ""
    
    function Handler(e)
    {
        str = e.target.value
        console.log("yor entred", str)
    }

    function f1()
    {
        console.log("UPPERCASE=>", str.toUpperCase())
        return


    }

    function f2()
    {
        console.log("LowerCase=>", str.toLowerCase())
        return
    }

    function f3()
    {
       // let ss=str.split(" ");
        // let f = ((str.charAt(0).toUpperCase()))
        // let h = ((str.substring(1).toLowerCase()))
        // console.log("Titlecase=", f + h);   

        // for(let i of ss)
        // {
        //     str+=i.charAt(0).toUpperCase()+i.substring(1).toLowerCase()+" "
        // }
        // console.log("Tittle cAse=>",str)

        for(let i=0;i<str.length;i++)
        {
            if(str==" ")
            {
                let f = ((str.charAt(0).toUpperCase()))
                let h = ((str.substring(1).toLowerCase()))
                console.log("Titlecase=", f + h);
            }
            
        }
    }


    return <div>
        <input type="text" onBlur={Handler}></input><br></br>
        Upper-Case:<input type="radio"  onClick={f1} name="same"/><br></br>
        Lowee-Case :<input type="radio" onChange={f2} name="same"/><br></br>
        Title-Case: <input type="radio" id="TitleCase" onBlur={f3} name="same"/> 
    </div>
}