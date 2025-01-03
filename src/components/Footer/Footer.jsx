import React from "react";
import Row2 from "../colmun/Row2.jsx";
import Row3 from "../column-2/Row3.jsx";

export default function Footer() {
  return (
    <>
      <footer className="p-3">
        <div className="container-fluid mt-3">
          <div className="row">
            <div className="col-md-4">
              <div className="row-one">
                <h3>Location</h3>
                <h4>2215 John Daniel Drive Clark, MO 65243</h4>
              </div>
            </div>
            <Row2 />
            <Row3 />
          </div>
        </div>
        <div>
          <div className="container-fluid text-center">
            {" "}
            <p>Copyright &copy; Nehad Elsayed 2024</p>{" "}
          </div>
        </div>
      </footer>
    </>
  );
}
