function f1()
{
    let s1=parseInt(document.getElementById("i1").value)
    let s2=parseInt(document.getElementById("i2").value)
    let choice=document.getElementById("s1").value

    let res          

    switch(choice)
    {
        case "add":   res=s1+s2
    
        document.getElementById("p1").innerText=`Addition is:${res}`
        break
        
        case "sub":   res=s1-s2
    
        document.getElementById("p1").innerText=`Subtracton is:${res}`
        break
        
        case "mul": res=s1*s2
    
        document.getElementById("p1").innerText=`Multiplication is:${res}`
        break
        
        case "div":  res=s1/s2
    
        document.getElementById("p1").innerText=`Division is:${res}`
        break
        
        
        
        
    }

}