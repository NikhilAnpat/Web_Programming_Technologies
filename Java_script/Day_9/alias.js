export default class alias
{
    constructor(sn,sno)
    {
        this.studentName=sn
        this.studentPRN=sno
    }

    show()
    {
        console.log("ALIAS name:",this.studentName,this.studentPRN)
    }
}
