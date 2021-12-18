import React from "react";

function Footer() {
  return (
    <>
      {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
      <div className="container my-5">
        <footer className="bg-light text-center">
          <div className="container p-4 pb-0">
            <section className="">
              <form action="">
                <div className="row d-flex justify-content-center">
                  <div className="col-md-5 col-12">
                    <div className="form-outline mb-4">
                      <input type="email" id="form5Example2" className="form-control" />
                      <label className="form-label" htmlFor="form5Example2">Email address</label>
                    </div>
                  </div>
                  <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-4">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </section>
          </div>
          <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
            © 2021 Copyright:
            <a className="text-dark" >edutech</a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
