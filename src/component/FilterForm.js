import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation,  } from "react-router-dom";

function FilterForm(props) {
  // const path = useParams()
  //   console.log(props)
  const { pathname } = useLocation();
  //   const location =
  //     pathname === "/"
  //       ? "nearest"
  //       : pathname === "/upcomming_rides"
  //       ? "upcoming"
  //       : "past";
  const filt = useSelector((state) =>
    pathname === "/"
      ? state?.rides?.nearest
      : pathname === "/upcomming_rides"
      ? state?.rides?.upcoming
      : state?.rides?.past
  );
  // usese

  useEffect(() => {
    console.log("mount");
    return () => {
      console.log("unmount");
    };
  }, []);

    console.log(pathname && filt);
  return (
    <form className="nav__filter--form" {...props}>
      <p className="filter--form-title">Filters</p>
      <label htmlFor="form-state"></label>
      <select
        className="filter--form-state"
        name="form-state"
        id="form-state"
        placeholder="state"
      >
        <option value="" disabled selected>
          State
        </option>
      </select>
      <label htmlFor="form-city"></label>
      <select className="filter--form-city" name="form-city" id="form-city">
        <option value="" disabled selected>
          City
        </option>
      </select>
    </form>
  );
}

export default FilterForm;
