import React, { useState } from "react";
import img1 from "../../assets/images/Home.png";
import img2 from "../../assets/images/cake.png";
import img3 from "../../assets/images/circus.png";
import img4 from "../../assets/images/games.png";
import img5 from "../../assets/images/Safe.png";
import img6 from "../../assets/images/submarine.png";

export default function Modal() {
  let [modalImgs, setModalImg] = useState([img1, img2, img3, img4, img5, img6]);
  let [modalTitles, setModalTitle] = useState([
    "LOG CABIN",
    "TASTY CAKE",
    "CIRCUS TENT",
    "CONTROLER",
    "LOCKED SAFE",
    "SUBMARINE",
  ]);

  return (
    <>
      <div className="modal bg-danger text-white  d-none">
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="title">
                {modalTitles.map((title) => {
                  return (
                    <h2 className="text-center text-uppercase">{title}</h2>
                  );
                })}
                <span className="global-icon">
                  <i className="fa-solid fa-star"></i>
                </span>
              </div>
              {modalImgs.map((img) => {
                return <img src={img} />;
              })}

              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                amet veniam dolor dignissimos harum ab?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
