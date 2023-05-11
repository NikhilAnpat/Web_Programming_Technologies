class getset
{
    #_month   //insatnce variable

    constructor()
    {
        this.#_month=1
    }

    get month()
    {
        console.log("It is getter method")
        return this.#_month
    }

    set month(m)
    {
        console.log("It is setter method")

        if(m>=1 && m<=12)
        {
            this.#_month=m
        }
        else
        {
            console.log("Not valid")
        }
    }
}
let d=new getset()
d.month=11
console.log("Print:",d.month)