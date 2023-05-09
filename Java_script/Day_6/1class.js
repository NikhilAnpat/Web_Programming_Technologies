class book{

constructor(name,cost)
{
    this.bookname=name
    this.bookcost=cost

}
showdetails(){
    console.log("book" , this.bookname,"whose cost is ",this.bookcost)
}

}
let obj=new book("art of living",505)

obj.showdetails()

let obj1=new book("go daddy",450)
obj1.showdetails()

