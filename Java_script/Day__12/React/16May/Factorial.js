import {Component} from "react";

export default class Factorial extends Component
{
    constructor(props)
    {
        super(props)
        this.a=props.num1
    }

    calFact()
    {
        let fact=1
        for(var i=1;i<=this.a;i++)
        {
            fact = fact*i
        }

        return fact

    }

    
    render()
    {
        return <div>
        <p>
            factorial of {this.a} is {this.calFact()}
        </p>
        </div>
    }
}