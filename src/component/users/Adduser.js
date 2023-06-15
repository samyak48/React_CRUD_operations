import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Adduser() {
  const [user, setuser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const { name, username, email, phone, website } = user;
  const oninputchange = (e) => {
    console.log(e.target.value);
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const onsubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/users", user);

    navigate("/");
  };
  const navigate2 = useNavigate();
  const home = () => {
    navigate2("/");
  };
  return (
    <>
      <>
        <div className="container">
          <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Add A User</h2>
            <form
              onSubmit={(e) => {
                onsubmit(e);
              }}
            >
              <div className="form-group">
                <input
                  type="tect"
                  className="form-control form-control-lg"
                  name="name"
                  placeholder="Enter Your Username"
                  value={name}
                  onChange={(e) => oninputchange(e)}
                ></input>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="username"
                  placeholder="Enter Your Password"
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
                  placeholder="Enter Your Favourite Sport"
                  value={website}
                  onChange={(e) => oninputchange(e)}
                ></input>
              </div>
              <span>
                <button className="btn btn-primary btn-block mt-2">
                  Add Me
                </button>
                <button className="btn btn-danger ms-2 mt-2 " onClick={home}>
                  Back To Home
                </button>
              </span>
            </form>
          </div>
        </div>
      </>
    </>
  );
}
export default Adduser;
