import React from "react";
import "./College.css";
import img1 from "./images/college_02.jpg";

const College = ({ ColInputdata, eventFunction }) => {
  const GetmyStarFunction = (param) => {
    if (param === 0) return <a>☆☆☆☆☆</a>;
    if (param === 1) return <a>★☆☆☆☆</a>;
    if (param === 2) return <a>★★☆☆☆</a>;
    if (param === 3) return <a>★★★☆☆</a>;
    if (param === 4) return <a>★★★★☆</a>;
    if (param === 4) return <a>★★★★★</a>;
  };

  function CommaFormatted(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div className="Colleges-data" onScroll={eventFunction}>
      <div className="card-view">
        <div className="Top-Context">
          <img src={img1} className="image-id" />
          <div className="Image-text">
            <div className="Top-Image-Text">
              <p id="Promoted">Promoted</p>
              <div className="Rating">
                <p>
                  <span className="Rating-given">{ColInputdata.rating}</span>/5
                </p>
                <p>{ColInputdata.rating_remarks}</p>
              </div>
            </div>

            <div className="Bottom-Image-text">
              <div className="College-Specs">
                <span>{ColInputdata.tags[0]}</span>
                <span className="dist">{ColInputdata.tags[1]}</span>
              </div>
              <span className="ranking">#{ColInputdata.ranking}</span>
            </div>
          </div>
        </div>

        {
          <div className="collegename">
            <p>
              <p className="College-Name">
                {ColInputdata.college_name}
                <span className="College-star">
                  {GetmyStarFunction(ColInputdata.rating)}
                </span>
              </p>
              <div className="College-star-price">
                {" "}
                ₹{" "}
                <span className="College-star-price-tag">
                  {ColInputdata.original_fees}
                </span>
                <span class="discount-label red">{ColInputdata.discount}</span>
              </div>
            </p>

            <p>
              <p className="College-place">
                {ColInputdata.nearest_place[0]} |{" "}
                <span className="College-place-near">
                  {" "}
                  {ColInputdata.nearest_place[1]}
                </span>
              </p>
              <p className="College-discounted-price">
                {" "}
                <span>₹{CommaFormatted(ColInputdata.discounted_fees)}</span>
              </p>
            </p>

            <p className="College-Match">
              <span className="College-Match-per">93% Match : </span>
              <span className="College-Match-place">
                {ColInputdata.famous_nearest_places}
              </span>
              <span className="College-Per-Sem">{ColInputdata.fees_cycle}</span>
            </p>
            <p className="flat-discount">
              <span className="offer">{ColInputdata.offertext}</span>
              <span className="Free-Cancel">
                {ColInputdata.amenties[0]} + {ColInputdata.amenties[1]}
              </span>
            </p>
          </div>
        }
      </div>
    </div>
  );
};

export default College;
