import { useState } from "react"
import UnderGraduate from "./UnderGraduate";
import Graduation from "./Graduation";
import PostGraduate from "./PostGraduate";

export default function Login() {
    let [value, setvalue] = useState(0);
    // let Education = "UG"
    function showdetails(e) {
        switch (e.target.value) {
            case "UG":

                setvalue(e.target.value);
                break;
            case "GG":
                setvalue(e.target.value);
                break;
            case "PG":
                setvalue(e.target.value);
                break;
            default: break;
        }

    }
    return <div>
        Name: <input type="text" />
        <br></br>
        email: <input type="email" ></input>
        <br></br>
        <select onChange={showdetails}>
            <option></option>
            <option value="UG">Under-Graduate</option>
            <option value="GG">Graduate</option>
            <option value="PG">Post-Graduate</option>
        </select>

        {value === "UG" ? <UnderGraduate></UnderGraduate> : ""}
        {value === "GG" ? <Graduation></Graduation> : ""}
        {value === "PG" ? <PostGraduate></PostGraduate> : ""}

    </div>
}