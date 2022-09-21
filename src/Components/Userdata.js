import { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinFill } from "react-icons/ri";

import axios from "axios";
export default function Userdata() {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  function getdata() {
    axios.get("http://localhost:4000/get").then((res) => setMyData(res.data));
  }

  const naviget = useNavigate();

  const handledelet = (id) => {
    const url = `http://localhost:4000/delet/${id}`;

    axios.delete(url).then(function (res) {
      getdata();
      alert(res.data.message);
    });
  };

  return (
    <>
      <div
        className=" container  table-responsive-lg mt-5 pt-1 pb-5 table  table-responsive-sm  table-responsive-md"
        style={{
          boxShadow: "0rem 2rem 5rem 3rem grey",
          borderRadius: "1rem",
        }}
      >
        <h1 className="text-center mt-5">User Data</h1>
        <Table striped bordered hover className="mt-4">
          <thead>
            <tr className="table-dark">
              <th>id</th>
              <th> Name</th>
              <th> Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          {myData.map((curElm, _id) => {
            return (
              <tbody key={_id}>
                <tr>
                  <td> {_id + 1} </td>
                  <td>{curElm.name} </td>
                  <td>{curElm.number}</td>
                  <td> {curElm.email} </td>

                  <td className="d-flex">
                    <Button
                      onClick={() => naviget(`edit/${curElm._id}`)}
                      variant="success"
                    >
                      <BiEdit />
                    </Button>
                    &nbsp; &nbsp;
                    <Button
                      variant="danger"
                      onClick={() => handledelet(curElm._id)}
                    >
                      <RiDeleteBinFill />
                    </Button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      </div>
    </>
  );
}
