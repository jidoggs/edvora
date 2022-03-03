import React from "react";
import { useSelector } from "react-redux";
import RideComponent from "../component/RideComponent";
import { distanceRange } from "../utility/helperFunctions";

function Nearest() {
  const nearestRides = useSelector((state) => state?.rides?.nearest);
  const user = useSelector((state) => state?.user?.data);
  // function distanceRange(x, y) {
  //   for (var i = 0; i < x.length; i++) {
  //     if (!(x[i] < parseInt(y - 3)) || !(x[i] > parseInt(y + 3))) {
  //       // Value is outside the range
  //       return x[i];
  //     }
  //     // return false;
  //   }
  //   // All values are inside the range
  // }

  return (
    <ul className="ride">
      {nearestRides &&
        nearestRides.map((ride, index) => {
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

export default Nearest;
