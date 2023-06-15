import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function User() {
  const [user, setuser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loaduser();
  }, []);

  const loaduser = async () => {
    const res = await axios.get(`http://localhost:3001/users/${id}`);
    setuser(res.data);
  };
  return (
    <>
      <div className="container py-4">
        <h1 className="display-4">User Id : {id}</h1>
        <hr></hr>
        <u1 className="list-group w-50">
          <l1 className="list-group-item">
            <strong>User name:</strong>{" "}
            <b style={{ color: "Tomato" }}>{user.name}</b>
          </l1>
          <l1 className="list-group-item">
            <strong>Password:</strong>{" "}
            <b style={{ color: "Tomato" }}>{user.username}</b>
          </l1>
          <l1 className="list-group-item">
            <strong>Email:</strong>{" "}
            <b style={{ color: "Tomato" }}>{user.email}</b>
          </l1>
          <l1 className="list-group-item">
            <strong>Phone:</strong>
            <b style={{ color: "Tomato" }}> {user.phone}</b>
          </l1>
          <l1 className="list-group-item">
            <strong>Favourite Sport:</strong>{" "}
            <b style={{ color: "Tomato" }}>{user.website}</b>
          </l1>
        </u1>
        <Link className="btn btn-danger mt-2" to="/">
          Back To Home
        </Link>
      </div>

    </>
  );
}
export default User;
