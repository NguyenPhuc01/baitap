import React from 'react';
import { useState } from 'react'
import { useForm } from "react-hook-form";


const Input = (props) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();
    // const [name, setName] = useState('')
    // const [age, setAge] = useState("")

    // console.log(props);
    return (
        <div>
            <input 
            type={props.type}
             placeholder={props.phaceholderText}
                value={props.typeValue}
                onChange={props.handleSubmit}
               
            />


        </div>
    );
};

export default Input;