import React from 'react';
import { useState } from 'react'

const Input = (props) => {

    // const [name, setName] = useState('')
    // const [age, setAge] = useState("")

    // console.log(props);
    return (
        <div>
            <input type={props.type} placeholder={props.phaceholderText}
                value={props.typeValue} 
                onChange={props.handleOnChane}
                
            />
        </div>
    );
};

export default Input;