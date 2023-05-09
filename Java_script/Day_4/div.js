const prompt=require("prompt-sync")({sigint:true})
let num1 = prompt('Enter the first number ');


if(num1%5==0)
{
    console.log("is divisible by five : "+num1)
}
else
{
    console.log("is not divisible by five : "+num1)
}


 