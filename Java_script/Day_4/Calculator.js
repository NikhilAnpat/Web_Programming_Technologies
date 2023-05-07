const prompt=require("prompt-sync")({sigint:true})

var result

let n1 = prompt("Enter the 1st no:")

let n2 = prompt("Enter the 2nd no:")

console.group("1.+  2.- 3.* 4./ 5.exit")

let choice = prompt("Enter the choice")

switch(choice)
{
    case '1':    result=parseInt(n1)+parseInt(n2)
                 console.log("The addition is :"+result)
                 break;

    case '2':    result=parseInt(n1)-parseInt(n2)
                 console.log("The Subtraction is :"+result)
                 break; 

    case '3':    result=parseInt(n1)*parseInt(n2)
                 console.log("The Multiplication is :"+result)
                 break; 

    case '4':    result=parseInt(n1)/parseInt(n2)
                 console.log("The divide is : "+result)
                 break;    
                 
    case '5':    
                 console.log(" You Choose Wrong option Exit")
                 break;
                                
}