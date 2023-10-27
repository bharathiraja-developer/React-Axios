import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Edit({ datas }) {
  const [status, setStatus] = useState(true);
  const [editId, setEditId] = useState(1);
  const [name, setName] = useState(datas[editId - 1].name);
  const [username, setUsername] = useState(datas[editId - 1].username);
  const [email, setEmail] = useState(datas[editId - 1].email);
  const [phone, setPhone] = useState(datas[editId - 1].phone);
  const [website, setWebsite] = useState(datas[editId - 1].website);
  const [street, setStreet] = useState(datas[editId - 1].address.street);
  const [suite, setSuite] = useState(datas[editId - 1].address.suite);
  const [city, setCity] = useState(datas[editId - 1].address.city);
  const [zipcode, setZipcode] = useState(datas[editId - 1].address.zipcode);
  const [companyname, setCompanyname] = useState(
    datas[editId - 1].company.name
  );

  let history = useNavigate();
  const handleSubmit = () => {
    const editData = {
      id: editId,
      name: name,
      username: username,
      email: email,
      address: {
        street: street,
        suite: suite,
        city: city,
        zipcode: zipcode,
      },
      phone: phone,
      website: website,
      company: {
        name: companyname,
      },
    };
    axios
      .put(`https://jsonplaceholder.typicode.com/users/${editId}`, editData)
      .then((response) => {
        window.alert(`UserId : ${editId} was Edited successfully`);
      });
    history("/");
  };
  if (status) {
    return (
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-0">
          <div className="row gx-4 gy-3 gx-lg-5 row-cols-1 justify-content-center text-center fs-5">
            <form
              onSubmit={() => {
                setStatus(!status);
                setName(datas[editId - 1].name);
                setUsername(datas[editId - 1].username);
                setEmail(datas[editId - 1].email);
                setPhone(datas[editId - 1].phone);
                setWebsite(datas[editId - 1].website);
                setCompanyname(datas[editId - 1].company.name);
                setStreet(datas[editId - 1].address.street);
                setSuite(datas[editId - 1].address.suite);
                setCity(datas[editId - 1].address.city);
                setZipcode(datas[editId - 1].address.zipcode);
              }}
            >
              <label>Select user Id to Edit : &nbsp;</label>
              <select
                defaultValue={editId}
                onChange={(e) => {
                  setEditId(e.target.value);
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
                  Edit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-0">
          <div className="row gx-4 gx-lg-5 row-cols-1 justify-content-center">
            <h3 className="text-center">Create a new user</h3>
            <div className="col mb-5">
              <div className="card p-4 fs-5">
                <div className="text-left">
                  <form onSubmit={handleSubmit}>
                    <label>
                      Name : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <input
                        defaultValue={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        type="text"
                        name="name"
                        required={true}
                      />
                    </label>
                    <br></br>
                    <label className="mt-2">
                      Username :&nbsp;
                      <input
                        defaultValue={username}
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                        type="text"
                        name="username"
                        className="ms-2"
                        required={true}
                      />
                    </label>
                    <br></br>
                    <label className="mt-2">
                      Email :
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <input
                        defaultValue={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        type="email"
                        name="email"
                        required={true}
                      />
                    </label>
                    <br></br>
                    <label className="mt-2">
                      Phone : &nbsp;&nbsp;&nbsp;&nbsp;
                      <input
                        defaultValue={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                        className="ms-3"
                        type="text"
                        name="phone"
                        required={true}
                      />
                    </label>
                    <br></br>
                    <label className="mt-2">
                      Website : &nbsp;&nbsp;&nbsp;&nbsp;
                      <input
                        defaultValue={website}
                        onChange={(e) => {
                          setWebsite(e.target.value);
                        }}
                        type="text"
                        name="website"
                        required={true}
                      />
                    </label>
                    <br></br>
                    <h6 className="mt-2 text-center">Address</h6>
                    <label className="mt-2">
                      Suite :
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <input
                        defaultValue={suite}
                        onChange={(e) => {
                          setSuite(e.target.value);
                        }}
                        type="text"
                        name="address-suite"
                        required={true}
                      />
                    </label>
                    <br></br>
                    <label className="mt-2">
                      Street : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <input
                        defaultValue={street}
                        onChange={(e) => {
                          setStreet(e.target.value);
                        }}
                        type="text"
                        name="address-street"
                        className="ms-2"
                        required={true}
                      />
                    </label>
                    <br></br>
                    <label className="mt-2">
                      City :
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <input
                        defaultValue={city}
                        onChange={(e) => {
                          setCity(e.target.value);
                        }}
                        type="text"
                        name="address-city"
                        required={true}
                      />
                    </label>
                    <br></br>
                    <label className="mt-2">
                      Zipcode : &nbsp;&nbsp;&nbsp;&nbsp;
                      <input
                        defaultValue={zipcode}
                        onChange={(e) => {
                          setZipcode(e.target.value);
                        }}
                        type="text"
                        name="address-zipcode"
                        required={true}
                      />
                    </label>
                    <br></br>
                    <h6 className="mt-2 text-center">Company</h6>
                    <label className="mt-2">
                      Name : &nbsp;&nbsp;&nbsp;&nbsp;
                      <input
                        defaultValue={companyname}
                        onChange={(e) => {
                          setCompanyname(e.target.value);
                        }}
                        type="text"
                        name="company-name"
                        className="ms-3"
                        required={true}
                      />
                    </label>
                    <br></br>
                    <div className="text-center mt-3">
                      <button className="btn btn-primary" type="submit">
                        Edit user
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Edit;
