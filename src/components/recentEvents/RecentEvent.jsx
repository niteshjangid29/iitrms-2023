import React from "react";
import "./RecentEvent.css";

const RecentEvent = () => {
  return (
    <div className="recent-events">
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 className="heading">Recent Events</h1>
        <div className="row events">
          <div className="col-lg-6">
            <div className="event">
              <img
                draggable="false"
                src="https://ik.imagekit.io/gu8eutv7q/Recent_Events/recent-event-1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676582680944"
                alt="events"
              />
              <div className="img-text">
                <p>
                  The team participated in Formula Bharat victuals 2021. We were
                  first in business plan presentation, third in Engineering
                  Design and third overall.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6"
            style={{
              display: "flex",
              flexDirection: "column",
              //   justifyContent: "space-around",
            }}
          >
            <div className="event">
              <img
                draggable="false"
                src="https://ik.imagekit.io/gu8eutv7q/Recent_Events/recent-event-3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676582680860"
                alt="events"
              />
              <div className="img-text">
                <p>
                  Our previous car RMSE19 was converted into a racing simulator
                  and was open for public during our cultural fest Thomso’22
                </p>
              </div>
            </div>
            <div className="event">
              <img
                draggable="false"
                src="https://ik.imagekit.io/gu8eutv7q/Recent_Events/recent-event-2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676582680914"
                alt="events"
              />
              <div className="img-text">
                <p>
                  Members of the team participated in the tenth edition of inter
                  IIT tech meet and won the gold medal in “powered bonnet for
                  electric vehicle” problem
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentEvent;
