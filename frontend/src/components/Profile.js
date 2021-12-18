import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();

    const [emp, setEmp] = useState('');


    const callProfile = async () => {
        try {
            const resp = await fetch('/profile', {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"

                },
                credentials: 'include'
            });

            const data = await resp.json();
            console.log(data);
            setEmp(data)



            if (!resp.status === 200) {
                window.alert("please check again data")
            }

        } catch (err) {
            console.log(err);
            navigate('/login');
        }
    }


    useEffect(() => {
        callProfile();

    }, [])


    return (
        <>
            <div >

                <section style={{ backgroundColor: "#eee" }}>
                    <div className="container py-5">


                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card mb-4">
                                    <div className="card-body text-center">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.png" alt="avatar" className="rounded-circle img-fluid" style={{ width: "150px" }} />
                                        <h5 className="my-3">{emp.name}</h5>
                                        <p className="text-muted mb-1">{emp.work}</p>
                                        <p className="text-muted mb-4"></p>
                                        <div className="d-flex justify-content-center mb-2">
                                            <button type="button" className="btn btn-primary">Follow</button>
                                            <button type="button" className="btn btn-outline-primary ms-1">Message</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-8">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Full Name</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">{emp.name}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Email</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">{emp.email}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Phone</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">{emp.phone}</p>
                                            </div>
                                        </div>
                                        <hr />

                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Address</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">Not available</p>
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

export default Profile;
