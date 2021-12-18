import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

import AbImg from "./images/about.png";
import tes1 from "./images/testimonials/testimonials-1.jpg"
import tes2 from "./images/testimonials/testimonials-2.jpg"
import tes3 from "./images/testimonials/testimonials-3.jpg"
import tes4 from "./images/testimonials/testimonials-4.jpg"
import tes5 from "./images/testimonials/testimonials-5.jpg"


const About = () => {


  const navigate = useNavigate();
  const [emp, setEmp] = useState('');
  const callAbout = async () => {
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
    callAbout();

  }, []);

  return (
    <>

      {/* <!-- ======= About Section ======= --> */}
      <section id="about" className="about">
        <div className="container">

          <div className="row">
            <div className="col-lg-6">
              <img src={AbImg} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content">
              <h3>Edutech offers online classes from top institutions around the world</h3>
              <p className="fst-italic">
                There is a wide range of online courses offered in the field. Beginners interested in the fundamental principles might consider Harvard’s Architectural Imagination course, which approaches the subject through a study of history’s important buildings.
              </p>
              <ul>

                <li><i className="bi bi-check-circle"></i> Intermediate students may explore the mechanical engineering principles that undergird architectural design through The Mechanics of Deformable Structures course offered by MIT.

                </li>
              </ul>
              <p>
                With a long list of transferable skills including strong analytical, communication, and technical skills, the study of architecture can lead to a career as a Civil Engineer, a Construction Manager, Drafter, a Graphic Designer, an Interior Designer, a Landscape Architect, or an Urban and Regional Planner.
              </p>
            </div>
          </div>

        </div>
      </section>
      {/* <!-- End About Section --> */}

      {/* <!-- ======= Counts Section ======= --> */}
      <section id="counts" className="counts">
        <div className="container">

          <div className="row counters">

            <div className="col-lg-3 col-6 text-center">
              <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
              <p>Courses</p>
              <li>Engineering</li>
              <li>Medical</li>
              <li>Ssc</li>
              <li>Cse</li>
              <li>Many more</li>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
              <p>Projects</p>
              <li>Final year projects</li>
              <li>Research projects</li>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"></span>
              <p>Methods</p>
              <li>Online video lectures</li>
              <li>Doubt clear seasons</li>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
              <p>Schedule</p>
              <li>8am to 12am</li>
              <li>1pm to 4pm</li>
              <li>5pm to 7pm</li>
            </div>

          </div>

        </div>
      </section>
      {/* <!-- End Counts Section --> */}

      {/* <!-- ======= Services Section ======= --> */}
      <section id="services" className="services section-bg">
        <div className="container">

          <div className="section-title">
            <span>Courses</span>
            <h2>Courses</h2>
            <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="icon-box">
                <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-card-list" viewBox="0 0 16 16">
                  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                  <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                </svg></div>
                <h4><a href="">Engineering</a></h4>
                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
              <div className="icon-box">
                <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-award-fill" viewBox="0 0 16 16">
                  <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z" />
                  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                </svg></div>
                <h4><a href="">Medical</a></h4>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
              <div className="icon-box">
                <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-bank2" viewBox="0 0 16 16">
                  <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z" />
                </svg></div>
                <h4><a href="">Civil Service & more</a></h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div className="icon-box">
                <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-book-half" viewBox="0 0 16 16">
                  <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                </svg></div>
                <h4><a href="">Others</a></h4>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
              </div>
            </div>



          </div>

        </div>
      </section>


      {/* <!-- ======= Testimonials Section ======= --> */}
      <section id="testimonials" className="testimonials section-bg">
        <div className="container">

          <div className="section-title">
            <span>FEEDBACKS</span>
            <h2>FEEDBACKS</h2>
            <p>Its delight to hear from you</p>
          </div>

          <div className="testimonials-slider swiper container boxb " data-aos="fade-up" data-aos-delay="100">
            <div className="swiper-wrapper box">

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    It is a great learning platfrom ,unique from others.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img src={tes1} className="testimonial-img" alt="" />
                  <h3>Raj Sharma</h3>
                  <h4>Btech  3rd year</h4>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Best part of the platform is, it is budget friendly.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img src={tes2} className="testimonial-img" alt="" />
                  <h3>Sara Dixit</h3>
                  <h4>Medical</h4>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Doubt clear seasons are very good for me.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img src={tes3} className="testimonial-img" alt="" />
                  <h3>Simi Jain</h3>
                  <h4>Medical</h4>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img src={tes4} className="testimonial-img" alt="" />
                  <h3>Rahul</h3>
                  <h4>ssc</h4>
                </div>
              </div>


              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img src={tes5} className="testimonial-img" alt="" />
                  <h3>John Larson</h3>
                  <h4>Cssr</h4>
                </div>
              </div>

            </div>
            <div className="swiper-pagination"></div>
          </div>

        </div>
      </section>

      {/* <!-- ======= Cta Section ======= --> */}
      <section id="cta" className="cta">
        <div className="container">

          <div className="text-center">
            <h3>Call To Action</h3>
            <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a className="cta-btn" href="#">Call To Action</a>
          </div>

        </div>
      </section>

    </>
  );
};

export default About;
