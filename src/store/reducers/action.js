import {
  FETCH_RIDES_FAIL,
  FETCH_RIDES_SUCCESS,
  FETCH_USER_FAIL,
  FETCH_USER_SUCCESS,
  FILTER_BY_CITY,
  FILTER_BY_STATE,
  GET_NEAREST_RIDES,
  GET_PAST_RIDES,
  GET_UPCOMING_RIDES,
} from "./types";

export const fetchRidesData = (data) => ({
  type: FETCH_RIDES_SUCCESS,
  payload: data,
});
export const fetchRidesError = (data) => ({
  type: FETCH_RIDES_FAIL,
  payload: data,
});
export const fetchUserData = (data) => ({
  type: FETCH_USER_SUCCESS,
  payload: data,
});
export const fetchUserError = (data) => ({
  type: FETCH_USER_FAIL,
  payload: data,
});

export const getNearestRides = () => ({
  type: GET_NEAREST_RIDES,
});

export const getUpComingRides = () => ({
  type: GET_UPCOMING_RIDES,
});
export const getPastRides = () => ({
  type: GET_PAST_RIDES,
});

export const filterByState = () => ({ 
    type: FILTER_BY_STATE
})
export const filterByCity = () => ({ 
    type: FILTER_BY_CITY
})
