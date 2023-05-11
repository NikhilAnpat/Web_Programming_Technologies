class trial
{
     data =100  //non-static
     static data2=101  //static
     #data3=102 //private
     show()
     {
        console.log("Trail:",this.data,trial.data2,this.#data3)     
    }


    show2()
    {
       console.log("Trail:",this.data,trial.data2,this.#data3)     
   }

}

let a= new trial()
a.show()

trial.show2()
a.show2()