import React from 'react';
import img1 from './images/home.png';


const Home = () => {
    const abc = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <section id="hero" className="d-flex align-items-center">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h1>An online platform for Students</h1>
                            <h2>We are team of talented teachers making career with Edutech</h2>
                            <div className="d-flex">
                                <a href="/" onClick={abc} className="btn-get-started scrollto">Get Started</a>

                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img">
                            <img src={img1} className="img-fluid animated" alt="" />
                        </div>
                    </div>
                </div>

            </section>


            <section id="featured-services" className="featured-services">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="icon-box">
                                <div className="icon"><i className="bi bi-laptop"></i></div>
                                <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
                            <div className="icon-box">
                                <div className="icon"><i className="bi bi-card-checklist"></i></div>
                                <h4 className="title"><a href="">Dolor Sitema</a></h4>
                                <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                            <div className="icon-box">
                                <div className="icon"><i className="bi bi-clipboard-data"></i></div>
                                <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
                                <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


        </>



    )
}

export default Home;
