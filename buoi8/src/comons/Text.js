import React from 'react';
import { useState } from 'react'

const Text = (Props) => {
    // const [age, setAge] = useState("")

    return (
        <div>
            <h2 className={Props.classNamee}> {Props.text}</h2>

        </div>
    );
};

export default Text;