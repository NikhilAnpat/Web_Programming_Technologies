function message()
{
    return "namaste....!"
}

function greet(msg)
{
    let guest=["nik","aks","may","abhi","vicky","vish","parshya"]

    for(let i=0;i<guest.length;i++)
    [
        console.log(msg(),guest[i])
    ]
}

// greet(message)



// greet ( function()
// {
//     return "HowD"
// })



// let j=function()
// {
//     return "BamBam bhoole..."
// }
// greet(j)


greet(()=>"hello...") //using lambda function