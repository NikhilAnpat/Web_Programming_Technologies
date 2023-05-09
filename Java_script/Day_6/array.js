class book
{
    constructor(bname,bcost)
    {
        this.bookname=bname
        this.bookcost=bcost
    }

    showdetails()
    {
        console.log(this.bookname,this.bookcost)
    }
}

let obj = new book("java",100)

console.log(obj.bookname,obj.bookcost)


// let books=[]

// books.push(new book("b1",200))
// books.push(new book("b2",300))
// books.push(new book("b3",400))

// let total=0
// for(b of books)
// {
//     total= total  + b.bookcost
// }
// console.log(total)

// for(x in obj)
// {
//     console.log(x,"=",obj[x])
// }