import { useState } from "react";
import Modal from "../Modal/Modal";

export default function Card({ image }) {
  return (
    <>
      <div
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        className="inner overflow-hidden"
      >
        <div className="image position-relative overflow-hidden">
          <img
            className="img-fluid my-2 rounded-3"
            src={image}
            alt="card-photo"
          />
          <div className="layer">
            <div className="icon">
              <i class="fa-solid fa-plus"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
