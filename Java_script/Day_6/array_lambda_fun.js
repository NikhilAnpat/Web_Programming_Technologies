// #1
  let arr=[12,56,3,8,5,4,32,45,77,97,34,89,23,19,439,]

// // function callBack(x){console.log(x)}
// // arr.forEach(callBack)

//                     //OR

// //  arr.forEach((x)=> console.log(x))                   

//     //square of hole array
// let sq =arr.map((e)=> e*e)   
// console.log("orignal array",arr)
// console.log("Square array",sq)

            //using filter function

// let oddnumber =arr.filter((x)=> {return x%2 !=0})            
// console.log(oddnumber)


// let evennumber=(arr.filter((x)=> {return x%2 ==0}))
// console.log(evennumber)




  //#2

  let arr2=["red","green","blue","yellow"]

//   //console.log(arr2.map((x)=>x.substring(0,2).toUpperCase()))

//   console.log(arr2.map((z)=> z.substring(0,1).toUpperCase().concat(z.substring(1).toLowerCase())))

let length_Less_than_Five=(arr2.filter((x)=> {return x.length<5}))
console.log(length_Less_than_Five)


let l=(arr2.filter((x)=> {return x.length < 5}))
console.log(l)


