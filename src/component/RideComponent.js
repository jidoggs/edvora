import React from "react";
import Badge from "./Badge";

function RideComponent({
  image,
  rideId,
  originStation,
  stationPath,
  date,
  distance,
  state,
  city
}) {
  // console.log( stationPath)
  return (
    <li className="ride__card">
      <div
        className="ride__card--image"
        role={"img"}
        aria-label="rider location"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <ul className="ride__card--details">
        <li className="ride__card---details_child card__title">
          Ride Id : <span>{rideId}</span>
        </li>
        <li className="ride__card---details_child card__title">
          Origin Station : <span>{originStation}</span>
        </li>
        <li className="ride__card---details_child card__title">
          station_path : <span>[{stationPath?.join(", ")}]</span>
        </li>
        <li className="ride__card---details_child card__title">
          Date : <span>{date}</span>
        </li>
        <li className="ride__card---details_child card__title">
          Distance : <span>{distance}</span>
        </li>
      </ul>
      <div className="badgeContainer">
        <Badge badgeTitle={city}/>
        <Badge badgeTitle={state}/>
      </div>
    </li>
  );
}

export default RideComponent;
