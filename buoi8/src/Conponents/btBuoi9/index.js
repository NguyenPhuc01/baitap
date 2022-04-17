import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
const BtBuoi9 = () => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://624061412aeb48a9af735b00.mockapi.io/api/v1/users')
            .then((res) => res.json())
            .then((user) => {
                setUser(user)
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    const removeAll = () => {
        const newUser = [...user]
        newUser.length = 0
        setUser(newUser)
    }
    const removeItem = (i) => {
        const newUser = [...user]
        newUser.splice(i, 1)
        setUser(newUser)
    }


    return (

        <div>
            <button className="btn btn-danger"
                onClick={removeAll}
            >deleteAll</button>
            <Table striped bordered hover>

                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((e, i) => {

                        return (
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.avatar}</td>
                                <td>{e.createdAt}</td>
                                <td><button className='btn btn-danger' onClick={removeItem}>delete</button></td>
                            </tr>

                        )
                    })}


                </tbody>
            </Table>
        </div>

    );
};

export default BtBuoi9;