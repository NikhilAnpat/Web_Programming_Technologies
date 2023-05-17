export default function HW4()
{

    let x,y
    function f1(e)
    {
     x=e.target.value
     console.log(x)
    }

    function f2(e)
    {
     y=e.target.value
    }

    function show(e)
    {
        if(x==="xxx" && y==="123")
        {
            console.log("Sucessfull Login")
        }
        else
        {
            console.log("Invalid ID & PAssword")
        }
    }

    return <div>
       UserName: <input type="text" onChange={f1} placeholder="UserName"/>
       <br></br>
       Password: <input type="password" onChange={f2} placeholder="Password"/>
       <br></br>
        <button  onClick={show}> Submit</button>
        
    </div>
}