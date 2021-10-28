import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",  
    phone: "",
  
  });

  const { name, username, email, phone, website } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3002/users", user);
    history.push("/");
  };
  return (
      <>
      
    <div className="container mt-5">
      <div className="w-75 mx-auto card shadow p-5">
        <h2 className="text-center text-warning mb-4">Add A User</h2>
        <form onSubmit={e => onSubmit(e)}>
        <div className="row">
        <div className="col-md-6">
          <div className="form-group card shadow">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="First Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
              </div>
          <br/>
          <div className="col-md-6">
          <div className="form-group card shadow">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Last Name"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          </div>
          </div>
          <br/>

          <div className="row">
        <div className="col-md-6">
          <div className="form-group card shadow">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
        </div>
          <br/>
          <div className="col-md-6">
          <div className="form-group card shadow">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div></div>
            </div>
          <br/>
          <br/>
          <div className="form-group">
          <button className="btn btn-warning btn-block ">Add User</button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default AddUser;
