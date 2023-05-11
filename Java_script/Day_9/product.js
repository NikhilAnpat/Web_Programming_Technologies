export default class product
{
    constructor(pn,pco,pbrand)
    {
        this.productName=pn
        this.productCost=pco
        this.productBrand=pbrand
    }

    show()
    {
        console.log("show: ",this.productName,this.productCost,this.productBrand)
    }
}

// let obj = new product("book",500,"nirali")
// obj.show()