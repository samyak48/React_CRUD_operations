import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
function Edituser() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [user, setuser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const { name, username, email, phone, website } = user;
  const oninputchange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    loaduser();
  }, []);
  const onsubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/users/${id}`, user);
    navigate("/");
  };
  const loaduser = async () => {
    const result = await axios.get(`http://localhost:3001/users/${id}`);
    setuser(result.data);
  };
  return (
    <>
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Edit A User</h2>
          <form
            onSubmit={(e) => {
              onsubmit(e);
            }}
          >
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Name"
                name="name"
                value={name}
                onChange={(e) => oninputchange(e)}
              ></input>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                name="username"
                placeholder="Enter Your Username"
                value={username}
                onChange={(e) => oninputchange(e)}
              ></input>
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control form-control-lg"
                name="email"
                placeholder="Enter Your Email Adress"
                value={email}
                onChange={(e) => oninputchange(e)}
              ></input>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                name="phone"
                placeholder="Enter Your Mobile Number"
                value={phone}
                onChange={(e) => oninputchange(e)}
              ></input>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                name="website"
                placeholder="Enter Your Favourite Website Name"
                value={website}
                onChange={(e) => oninputchange(e)}
              ></input>
            </div>
            <span>
              <button className="btn btn-secondary m-2">Edit User</button>
              <button className="btn btn-danger m-2">Back To Home</button>
            </span>
          </form>
        </div>
      </div>
    </>
  );
}
export default Edituser;
