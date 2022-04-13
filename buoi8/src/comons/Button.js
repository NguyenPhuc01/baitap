import React from 'react';

const Button = (props) => {
    return (
        <div>
                <button onClick={ props.btnOnclick}
            //         () => {
            //     if (name && age != "") {

            //         setLoad('loading....')
            //         setTimeout(() => {
            //             setAge('')
            //             setName('')
            //             setLoad('')
            //         }, 1000)
            //     } else {
            //         alert('vui lòng nhập đầy đủ ueserName and age')
            //     }
            // }}

            >{props.nameButton}</button> 
        </div>
    );
};

export default Button;