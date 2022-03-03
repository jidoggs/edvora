import React from "react";
import { useSelector } from "react-redux";
import RideComponent from "../component/RideComponent";
import { distanceRange } from "../utility/helperFunctions";

function Past() {
  const pastRides = useSelector((state) => state?.rides?.past);
  const user = useSelector((state) => state?.user?.data);

  return (
    <ul className="ride">
      {pastRides &&
        pastRides.map((ride, index) => {
          const {
            city,
            date,
            id,
            map_url,
            origin_station_code,
            state,
            station_path,
          } = ride;

          const distance = parseInt(
            distanceRange(station_path,user?.station_code) - user?.station_code
          );
          return (
            <RideComponent
              key={index}
              date={date}
              rideId={id}
              stationPath={station_path}
              originStation={origin_station_code}
              image={map_url}
              city={city}
              state={state}
              distance={distance}
            />
          );
        })}
    </ul>
  );
}

export default Past;
