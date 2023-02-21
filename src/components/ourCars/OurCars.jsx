import React from "react";
import "./OurCars.css";

const OurCars = () => {
  return (
    <div className="our-cars">
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 className="heading">OUR CARS</h1>
        <div className="row cars">
          <div className="col-lg-6">
            <div className="car">
              <img
                draggable="false"
                src="https://ik.imagekit.io/gu8eutv7q/Cars/RMSE-19.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676487172811"
                alt="cars"
              />
              <div className="img-text">
                <h3>RMSE'19</h3>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div className="car">
              <img
                draggable="false"
                src="https://ik.imagekit.io/gu8eutv7q/Cars/Bolt.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676487172766"
                alt="cars"
              />
              <div className="img-text">
                <h3>BOLT</h3>
              </div>
            </div>
            <div className="car">
              <img
                draggable="false"
                src="https://ik.imagekit.io/gu8eutv7q/Cars/FIITR11.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676487172675"
                alt="cars"
              />
              <div className="img-text">
                <h3>FIITR'11</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCars;
