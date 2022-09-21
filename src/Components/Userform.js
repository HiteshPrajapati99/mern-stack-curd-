import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Userform() {
  const naviget = useNavigate();
  const [UserData, setUserData] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
  });

  const hendleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserData((pre) => {
      return { ...pre, [name]: value };
    });
  };

  const hendleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:4000/create", UserData)
      .then(function (res) {
        alert(res.data);
      });

    setUserData({
      name: "",
      number: "",
      email: "",
      password: "",
    });
    naviget("/");
  };

  return (
    <>
      <div
        className="  mt-5  col-md-8  col-lg-8 offset-md-2   "
        style={{
          padding: "50px 50px ",
          borderRadius: "30px",
          boxShadow: "0rem 3rem 10rem 3rem grey",
        }}
      >
        <h1 className="text-center">User Form</h1>
        <Form onSubmit={hendleSubmit}>
          <Form.Group className="mb-3 ">
            <Form.Label> Name </Form.Label>
            <input
              className=" form-control  shadow border-0 "
              type="text"
              id="name"
              placeholder="Enter Your Name"
              name="name"
              value={UserData.name}
              onChange={hendleInput}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label> Phone Number </Form.Label>
            <input
              className=" form-control shadow border-0 "
              type="number"
              id="number"
              placeholder="Enter Your Number"
              name="number"
              value={UserData.number}
              onChange={hendleInput}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <input
              className=" form-control shadow border-0 "
              type="email"
              placeholder="Enter email"
              id="email"
              name="email"
              value={UserData.email}
              onChange={hendleInput}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <input
              className=" form-control shadow border-0 "
              type="password"
              placeholder="Password"
              name="password"
              value={UserData.password}
              onChange={hendleInput}
              required
            />
          </Form.Group>

          <Button
            onSubmit={hendleSubmit}
            className="shadow mt-2 "
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
