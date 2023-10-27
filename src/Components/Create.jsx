import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create({ datas }) {
  let history = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [street, setStreet] = useState("");
  const [suite, setSuite] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [companyname, setCompanyname] = useState("");
  const handleSubmit = () => {
    const newData = {
      id: datas.length + 1,
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
      .post("https://jsonplaceholder.typicode.com/users", newData)
      .then(() => {
        window.confirm("New user created");
      });
    history("/");
  };
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
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      className="ms-3"
                      type="number"
                      name="phone"
                      required={true}
                    />
                  </label>
                  <br></br>
                  <label className="mt-2">
                    Website : &nbsp;&nbsp;&nbsp;&nbsp;
                    <input
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
                      Create user
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

export default Create;
