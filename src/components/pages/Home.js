import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3002/users")
        setUsers(result.data.reverse())
    }
    const deleteUser = async id =>{
        await axios.delete(`http://localhost:3002/users/${id}`)
        loadUsers();
    }
    return (
        <div className="container">
            <div className="py-4">
                <h1 className="text-warning">Home page...</h1>
                <table class="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">index</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email Id</th>
                            <th scope="col">oparetions</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                    <td><Link className="btn btn-primary mr-2" to="/users/" to={`/users/${user.id}`}>view</Link></td>
                                    <td><Link className="btn btn-warning mr-2" to={`/users/edit/${user.id}`}>Edit</Link></td>
                                    <td><Link className="btn btn-danger mr-2 " onClick={()=> deleteUser(user.id)}>Delete</Link>
                                    </td>
                                    </td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>


            </div>


        </div>

    )
}

export default Home
