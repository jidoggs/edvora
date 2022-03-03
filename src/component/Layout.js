import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Logo from "./customIcons/Logo";
import { useDispatch } from "react-redux";
import {
  fetchRidesData,
  fetchUserData,
  fetchUserError,
  getNearestRides,
  getPastRides,
  getUpComingRides,
} from "../store/reducers/action";
import { useSelector } from "react-redux";
import FilterIcon from "./customIcons/FilterIcon";
import FilterForm from "./FilterForm";

function Layout() {
  const [toggleFilter, setToggleFilter] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user?.data);
  const rides = useSelector((state) => state?.rides?.data);
  const nearestRides = useSelector((state) => state?.rides?.nearest);
  const pastRides = useSelector((state) => state?.rides?.past);
  const futureRides = useSelector((state) => state?.rides?.upcoming);

  // console.log(user);
  // console.log(rides);
  // console.log(nearestRides);

  useEffect(() => {
    axios
      .get(
        "https://mimmofranco.herokuapp.com/https://assessment.api.vweb.app/user"
      )
      .then((res) => dispatch(fetchUserData(res.data)))
      .catch((err) => {
        dispatch(fetchUserError(err));
        console.log(err);
      });
  }, [dispatch]);

  useEffect(() => {
    axios
      .get(
        "https://mimmofranco.herokuapp.com/https://assessment.api.vweb.app/rides"
      )
      .then((res) => dispatch(fetchRidesData(res.data)))
      .catch((err) => {
        dispatch(fetchUserError(err));
        console.log(err);
      });

    // dispatch(getNearestRides());
    // dispatch(getPastRides());
    // dispatch(getUpComingRides());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getNearestRides());
    dispatch(getPastRides());
    dispatch(getUpComingRides());
  }, [user && rides, dispatch]);

  return (
    <>
      <header className="header">
        <Logo />
        <div className="user">
          {user && <p className="user__name">{user.name}</p>}
          {user && <img src={user.url} alt="user" className="user__image" />}
        </div>
      </header>
      <div className="body">
        <nav>
          <ul className="navlink">
            <li className="navlink__item">
              <NavLink className={"link"} to={"/"}>
                {`Nearest rides ${
                  nearestRides?.length > 0 ? `(${nearestRides?.length})` : "(0)"
                }`}
              </NavLink>
            </li>
            <li className="navlink__item">
              <NavLink className={"link"} to={"/upcomming_rides"}>
                {`Upcoming rides ${
                  futureRides?.length > 0 ? `(${futureRides?.length})` : "(0)"
                }`}
              </NavLink>
            </li>
            <li className="navlink__item">
              <NavLink className={"link"} to={"/past_rides"}>
                {`Past rides ${
                  pastRides?.length > 0 ? `(${pastRides?.length})` : "(0)"
                }`}
              </NavLink>
            </li>
          </ul>
          <div className="nav__filter">
            <FilterIcon
              className="nav__filter--icon"
              onClick={() => setToggleFilter(!toggleFilter)}
            />
            <p
              className="nav__filter--text"
              onClick={() => setToggleFilter(!toggleFilter)}
            >
              Filter
            </p>
            {toggleFilter && <FilterForm />}
            {/* <FilterForm
              style={{ display: `${toggleFilter ? "block" : "none"}` }}
            /> */}
          </div>
        </nav>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
