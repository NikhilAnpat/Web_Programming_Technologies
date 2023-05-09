function car(nm,price){

    this.carname=nm
    this.carprice=  //

    this.showdetails=function(){    //function is assigned to object
        console.log(this.carname,this.carprice)
    }

    

}

let obj=new car("bmw",5500000)
car()
obj.showdetails()// console.log(obj.carname,obj.carprice)