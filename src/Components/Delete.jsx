import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Delete({ datas }) {
  const [deleteId, setDeleteId] = useState(1);
  let history = useNavigate();
  const handleSubmit = () => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${deleteId}`)
      .then((response) => {
        window.alert(`UserId : ${deleteId} was deleted successfully`);
      });
    history("/");
  };
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-0">
        <div className="row gx-4 gy-3 gx-lg-5 row-cols-1 justify-content-center text-center fs-5">
          <form onSubmit={handleSubmit}>
            <label>Select user Id to delete : &nbsp;</label>
            <select
              defaultValue={deleteId}
              onChange={(e) => {
                setDeleteId(e.target.value);
              }}
            >
              {datas.map((data) => (
                <option key={data.id} value={data.id}>
                  {data.id}
                </option>
              ))}
            </select>
            <div className="text-center mt-2">
              <button type="submit" className="btn btn-primary">
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Delete;
