function product(pname,pcost,pdesc)
{
    this.productname=pname
    this.productcost=pcost
    this.productdescription=pdesc

    this.showproductdetails=function()
    {
        console.log(this.productname,this.productcost,this.productdescription)

    }
}

let obj = new product("Book",30,"baybal")
obj.showproductdetails()
