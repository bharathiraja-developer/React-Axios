import React from "react";

function ReadData({ data }) {
  return (
    <div className="col mb-5">
      <div className="card p-4 fs-5">
        <div className="text-left">
          <p>User Id : {data.id}</p>
          <p>Name : {data.name}</p>
          <p>Username : {data.username}</p>
          <p>Email : {data.email}</p>
          Address : {data.address.suite},
          <ul className="mt-0 ms-5" style={{ listStyle: "none" }}>
            <li>{data.address.street},</li>
            <li>{data.address.city},</li>
            <li>{data.address.zipcode}</li>
          </ul>
          <p>Phone : {data.phone}</p>
          <p>Website : {data.website}</p>
          <p>Company : {data.company.name}</p>
        </div>
      </div>
    </div>
  );
}

export default ReadData;
