import "./ex2.css"
export default function ChildComponent({num1,num2,f1})
{
    function compute(e)
    {
        switch(e.target.value)
        {
            case "add" : let res = num1+num2;
                         f1(res)
                         break;
            case "pow" : let r =Math.pow(num1,num2);
                         f1(r)
                         break;
            case "mul"  : let m=num1*num2
                          f1(m)
                          break;
            case "div"  : let d=num1/num2
                          f1(d)
                          break;
            case "sub"  : let s=num1-num2
                          f1(s)
                          break;          
            default:break;
        }
    }

    return <div className="outline">
        <h5>Child Component</h5>
        <select onChange={compute}>
            <option>Select</option>
            <option value="add">Add</option>
            <option value="pow">Power</option>
            <option value="mul">Multiplication</option>
            <option value="div">Division</option>
            <option value="sub">Subtraction</option>
        </select>
    </div>
}