import React from 'react';
import { useState } from 'react';
import Input from '../../comons/Input';
import Text from '../../comons/Text';
import Button from '../../comons/Button';
const Login = () => {
    const [name, setName] = useState('')

    const [age, setAge] = useState("")
    const [load, setLoad] = useState("")

    function handClick() {
        if (name && age) {

            setLoad('loading....')
            setTimeout(() => {
                setAge('')
                setName('')
                setLoad('')
            }, 1000)
        } else {
            alert('vui lòng nhập đầy đủ ueserName and age')
        }
    }

    return (
        <div className="App">
            <Input
                type='text'
                typeValue={name}
                phaceholderText='userName'
                handleOnChane={(e) => {
                    setName(e.target.value)
                    console.log(name);
                }}
            />

            <Input
                type='number'
                typeValue={age}

                phaceholderText='age'
                handleOnChane={(e) => {
                    setAge(e.target.value)
                    console.log(age);

                }}

            />

            <Text

                text={'userName: ' + name}
            />
            <Text

                text={'age: ' + age}

            />
            <Text text={load} />

            <Button btnOnclick={handClick} nameButton='Remove' />

            {/* <h1>hello :{name}</h1>
            <h2>Age: {age}</h2>
            <h2>{load}</h2> */}
            {/* <button onClick={() => {
                if (name && age != "") {

                    setLoad('loading....')
                    setTimeout(() => {
                        setAge('')
                        setName('')
                        setLoad('')
                    }, 1000)
                } else {
                    alert('vui lòng nhập đầy đủ ueserName and age')
                }
            }}
            >Remove</button> */}
        </div>
    );
};

export default Login;