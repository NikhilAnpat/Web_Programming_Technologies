class product 
{
    constructor(pname,pcost,pdesc)
    {
        this.productname=pname
        this.productcost=pcost
        this.productdescription=pdesc
    }

    showdetails()
    {
        console.log(this.productname,this.productcost,this.productdescription)
    }
}

let obj = new product("Book",30,"register")

obj.showdetails()