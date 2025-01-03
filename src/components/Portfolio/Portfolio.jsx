import { useState } from "react";
import Card from "../Card/Card.jsx";
import img1 from "../../assets/images/Home.png";
import img2 from "../../assets/images/cake.png";
import img3 from "../../assets/images/circus.png";
import img4 from "../../assets/images/games.png";
import img5 from "../../assets/images/Safe.png";
import img6 from "../../assets/images/submarine.png";
import Modal from "../Modal/Modal.jsx";

export default function Portfolio() {
  let [images, setImg] = useState([img1, img2, img3, img4, img5, img6]);

  return (
    <>
      <div className="portfolio p-2 ">
        <div className="container">
          <div className="title">
            <h2 className="text-center text-uppercase">Portfolio</h2>
            <span className="global-icon">
              <i className="fa-solid fa-star"></i>
            </span>
          </div>
          <div className="row g-4 mt-3">
            {images.map((image, index) => {
              return (
                <div key={index} className="col-md-4">
                  <Card image={image} setImg={setImg} />
                  <Modal />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
