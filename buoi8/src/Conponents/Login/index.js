import React from 'react';
import { useState } from 'react';

const Login = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState("")
    const [load, setLoad] = useState("")
    return (
        <div className="App">
            <div>
                <input type="text" placeholder='useName'
                    value={name} onChange={(e) => {
                        setName(e.target.value)
                        console.log(name);
                    }}
                />
            </div>
            <div className="age">
                <input type="text" placeholder="age"
                    value={age} onChange={(e) => {
                        setAge(e.target.value)
                        console.log(age);
                    }} />
            </div>


            <h1>hello :{name}</h1>
            <h2>Age: {age}</h2>
            <h2>{load}</h2>

            <button onClick={() => {
                setLoad('loading....')
                setTimeout(() => {
                    setAge('')
                    setName('')
                    setLoad('')
                }, 5000)
            }}
            >Remove</button>
        </div>
    );
};

export default Login;