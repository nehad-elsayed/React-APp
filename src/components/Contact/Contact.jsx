import React from "react";

export default function Contact() {
  return (
    <>
      <div className="contact p-3 my-3">
        <div className="container text-center">
          <div className="title">
            <div className="title">
              <h2 className="text-center text-uppercase">Contact</h2>
              <span className="global-icon">
                <i className="fa-solid fa-star"></i>{" "}
              </span>{" "}
            </div>
          </div>
          <div className="col-md-8 offset-md-2">
            <form >
              <input type="text" placeholder="Name" className=" form-control" />
              <input type="email" placeholder="Email" className=" form-control" />
              <input type="text" placeholder="Phone Number" className=" form-control" />
              <textarea name="message" placeholder="Message" className=" form-control"></textarea>{" "}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
