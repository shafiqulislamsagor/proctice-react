import { useState } from "react";

const StateFull = () => {
    const [name, setName] = useState(null);
    const nameHandle = (e) =>{
        const name = e.target.value;
        setName(name)
    }
    console.log(name);
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const [pass, setPass] = useState(null);
    const passHandle = (e) =>{
        const password = e.target.value;
        setPass(password)
    }
    console.log(pass);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={nameHandle} type="text" name="names" id="" /><br />
                <input onChange={passHandle} type="password" name="password" id="" /><br />
                <input type="submit" value="Done" />
            </form>
        </div>
    );
};

export default StateFull;