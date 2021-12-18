import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import { useForm } from 'react-hook-form'


const SignUp = () => {

  const { handleSubmit } = useForm();


  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "", email: "", phone: "", work: "", password: "", cpassword: ""
  });

  let name, value;
  const HandleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value })

  }

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;
    const resp = await fetch('/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    });

    const data = await resp.json();
    console.log(resp);
    console.log(data);

    if (resp.status === 201) {
      window.alert("signup succesfull");
      navigate('/login');
    }
    else {

      window.alert("invalid signup");
    }
  }
  const onSubmit = (data) => {
    console.log(data);
  }


  return (
    <>
      <div>
        <section className="vh-100" style={{ backgroundCcolor: " #eee" }}>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-50">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{ borderRadius: "25px" }}>
                  <div className="card-body p-md-1">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                        <form className="mx-1 mx-md-4" method="POST" onSubmit={handleSubmit(onSubmit)}  >

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="text" className="form-control" name="name" id="exampleInputName1" aria-describedby="namelHelp"
                                value={user.name}
                                onChange={HandleInput}
                                placeholder="Enter name" />
                              <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="email" className="form-control" name="email" id="exampleInputEmail1"
                                value={user.email}
                                onChange={HandleInput}
                                placeholder="Enter email" />
                              <label className="form-label" htmlFor="form3Example1c">Your Email</label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="number" className="form-control" name="phone" id="exampleInputPhone1" aria-describedby="phonelHelp"
                                value={user.phone}
                                onChange={HandleInput}
                                placeholder="Enter phone" />
                              <label className="form-label" htmlFor="form3Example3c">Your Phone</label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="text" className="form-control" name="work" id="exampleInputJob1" aria-describedby="jobHelp"
                                value={user.work}
                                onChange={HandleInput}
                                placeholder="Enter education" />
                              <label className="form-label" htmlFor="form3Example3c">Your Education</label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="password" className="form-control" name="password" id="exampleInputPassword1"
                                value={user.password}
                                onChange={HandleInput}
                                placeholder="Password" />
                              <label className="form-label" htmlFor="form3Example4c">Password</label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="password" className="form-control" name="cpassword" id="exampleInputPassword2"
                                value={user.cpassword}
                                onChange={HandleInput}
                                placeholder="Confirm Password" />
                              <label className="form-label" htmlFor="form3Example4cd">Confirm your password</label>
                            </div>
                          </div>


                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="submit" onClick={PostData} className="btn btn-primary" value="register" >Register</button>
                          </div>

                          <div className="form-check d-flex justify-content-center mb-5">

                            <label className="form-check-label" htmlFor="form2Example3">
                              Already have an Account? <NavLink to="/login">Login</NavLink>
                            </label>
                          </div>



                        </form>

                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.png" className="img-fluid" alt="Sample img" />

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

    </>

  )
}

export default SignUp;
