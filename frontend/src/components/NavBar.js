import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from "../App";


const NavBar = () => {

    const { state, dispatch } = useContext(UserContext);


    const ToggleMenu = () => {
        if (state) {
            return (
                <>
                    <li className="nav-item">
                        <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link " aria-current="page" to="/profile">Profile</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link " aria-current="page" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link " aria-current="page" to="/logout">Logout</NavLink>
                    </li>
                </>
            )
        }
        else {
            return (
                <>
                    <li className="nav-item">
                        <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link " aria-current="page" to="/profile">Profile</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link " aria-current="page" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link " aria-current="page" to="/signup">Registration</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link " aria-current="page" to="/login">Login</NavLink>
                    </li>
                </>
            )
        }

    }



    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><h3><b>EduTech </b> </h3> </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">


                            <ToggleMenu />

                        </ul>

                    </div>
                </div>
            </nav>


        </>
    )
}

export default NavBar;
