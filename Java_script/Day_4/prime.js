const prompt=require("prompt-sync")({sigint:true})
let num1 = prompt('Enter the first number ');

let coun=0
let i,j


for(j=2;j<=num1;j++)
{
    for(i=1;i<=j;i++)
    {
    if(j%i==0)
    
        coun++
    }
   
    if(coun==2)
    
    console.log(j)
    coun=0
    
    
}



