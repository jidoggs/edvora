import moment from "moment";
import { distanceRange, validRange } from "../../utility/helperFunctions";
import {
  FETCH_RIDES_FAIL,
  FETCH_RIDES_SUCCESS,
  FETCH_USER_FAIL,
  FETCH_USER_SUCCESS,
  GET_NEAREST_RIDES,
  GET_PAST_RIDES,
  GET_UPCOMING_RIDES,
} from "./types";

const initialState = {
  user: {
    isLoading: true,
    error: null,
    data: {},
  },
  rides: {
    isLoading: true,
    error: null,
    data: [],
    nearest: [],
    upcoming: [],
    past: [],
  },
};
moment.updateLocale()

export default function appReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_RIDES_SUCCESS:
      return {
        ...state,
        rides: { data: [...payload], error: null, isLoading: false },
      };
    case FETCH_RIDES_FAIL:
      return {
        ...state,
        rides: { data: [], error: payload, isLoading: false },
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: { data: { ...payload }, error: null, isLoading: false },
      };
    case FETCH_USER_FAIL:
      return { ...state, user: { data: [], error: payload, isLoading: false } };
    case GET_NEAREST_RIDES:
      return {
        ...state,
        rides: {
          ...state.rides,
          nearest: state?.rides?.data
            .filter((ride) =>
              validRange(ride.station_path, state.user?.data?.station_code)
            )
            .sort((currentRide, nextRide) => {
              const currentDistance =
                distanceRange(
                  currentRide.station_path,
                  state.user?.data?.station_code
                ) - state.user?.data?.station_code;
              const nextDistance =
                distanceRange(
                  nextRide.station_path,
                  state.user?.data?.station_code
                ) - state.user?.data?.station_code;
              return currentDistance - nextDistance;
            }),
        },
      };
    case GET_UPCOMING_RIDES:
      return {
        ...state,
        rides: {
          ...state.rides,
          upcoming: state?.rides?.data
            ?.filter(
              (ride) =>
                moment(ride?.date).fromNow().includes("in") &&
                ride?.station_path?.includes(state.user?.data?.station_code)
            )
            // .sort((currentRide, nextRide) => {
            //   const currentDistance =
            //     distanceRange(
            //       currentRide.station_path,
            //       state.user?.data?.station_code
            //     ) - state.user?.data?.station_code;
            //   const nextDistance =
            //     distanceRange(
            //       nextRide.station_path,
            //       state.user?.data?.station_code
            //     ) - state.user?.data?.station_code;
            //   return currentDistance - nextDistance;
            // }),
        },
      };
    case GET_PAST_RIDES:
      return {
        ...state,
        rides: {
          ...state.rides,
          past: state?.rides?.data?.filter(
            (ride) =>
              moment(ride?.date).fromNow().includes("ago") &&
              ride?.station_path?.includes(state.user?.data?.station_code)
          ),
          //   .sort((currentRide, nextRide) => {
          //     const currentDistance =
          //       distanceRange(
          //         currentRide.station_path,
          //         state.user?.data?.station_code
          //       ) - state.user?.data?.station_code;
          //     const nextDistance =
          //       distanceRange(
          //         nextRide.station_path,
          //         state.user?.data?.station_code
          //       ) - state.user?.data?.station_code;
          //     return currentDistance - nextDistance;
          //   }),
        },
      };
    // case GET_USER:
    //   return { ...state, state.user.};

    default:
      return state;
  }
}
