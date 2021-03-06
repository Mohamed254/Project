import React, { Fragment, useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";

import AuthContext from "../../context/auth/authContext";
import UserContext from "../../context/user/userContext";

const EditUserRegistered = (props) => {
  const authContext = useContext(AuthContext);

  const userContext = useContext(UserContext);

  const { isAuthenticated } = authContext;

  const { updateUser, current } = userContext;

  useEffect(() => {
    if (!isAuthenticated) {
      props.history.push("/admin");
    }

    // eslint-disable-next-line
  }, [isAuthenticated, props.history]);
  

  const [ update, setUpdate] = useState({
    firstname: current.firstname,
    lastname: current.lastname,
    email: current.email,
    phone: current.phone,
    location: current.location,
    address: current.address,
    password: current.password,
    confirmpassword: current.confirmpassword,
  });

  const {
    firstname,
    lastname,
    email,
    phone,
    location,
    address,
    password,
    confirmpassword,
  } = update;

  const onChange = (e) =>
    setUpdate({ ...update, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    updateUser(
      {
        firstname,
        lastname,
        email,
        phone,
        location,
        address,
        password,
        confirmpassword,
      },
      current._id
    );
    props.history.push("/UserRegistration")
    console.log({updateUser});
  };

  return (
    <Fragment>
      <Navbar />
      <Sidebar />
      {/* <!-- cards --> */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
              <div className="row pt-md-5 mt-md-3 mb-5">
                <div className="col-md-12 mb-3">
                  <div className="card">
                    <div className="card-header">
                      Edit User
                      <button className=" btn btn-primary float-right ">
                        <Link
                          to="/UserRegistration"
                          className=" nav-link text-white"
                        >
                          Check Registered Users
                        </Link>
                      </button>
                    </div>

                    <div className="card-body">
                      <form onSubmit={onSubmit}>
                        <div className="form-row">
                          <div className="form-group col-md-12">
                            <label for="inputName1"></label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputName1"
                              placeholder="First Name"
                              name="firstname"
                              value={firstname}
                              onChange={onChange}
                            />
                          </div>

                          <div className="form-group col-md-12">
                            <label for="inputName3"></label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputName3"
                              placeholder="Last Name"
                              name="lastname"
                              value={lastname}
                              onChange={onChange}
                            />
                          </div>

                          <div className="form-group col-md-12">
                            <label for="inputEmail1"></label>
                            <input
                              type="email"
                              className="form-control"
                              id="inputEmail1"
                              placeholder="Email"
                              name="email"
                              value={email}
                              onChange={onChange}
                            />
                          </div>

                          <div className="form-group col-md-12">
                            <label for="inputPhone1"></label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputPhone1"
                              placeholder="Phone"
                              name="phone"
                              value={phone}
                              onChange={onChange}
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label for="inputLoction1">Locaion/street</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputLocation1"
                              placeholder="Location"
                              name="location"
                              value={location}
                              onChange={onChange}
                            />
                          </div>

                          <div className="form-group col-md-6">
                            <label for="inputAddress1">Home Address</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputAddress1"
                              placeholder="Address No"
                              name="address"
                              value={address}
                              onChange={onChange}
                            />
                          </div>

                          <div className="form-group col-md-6">
                            <label for="inputPassword1">Password</label>
                            <input
                              type="password"
                              className="form-control"
                              id="inputPassword1"
                              placeholder="Password"
                              name="password"
                              value={password}
                              onChange={onChange}
                            />
                          </div>

                          <div className="form-group col-md-6">
                            <label for="inputPassword2">Confirm Password</label>
                            <input
                              type="password"
                              className="form-control"
                              id="inputPassword2"
                              placeholder="Confirm Password"
                              name="confirmpassword"
                              value={confirmpassword}
                              onChange={onChange}
                            />
                          </div>

                          <div className="form-group col-md-12">
                            <button
                              className="btn btn-success btn-block btn-lg"
                              type="submit"
                              onChange={onChange}
                            >
                              Update User
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end of cards --> */}
    </Fragment>
  );
};
export default EditUserRegistered;
