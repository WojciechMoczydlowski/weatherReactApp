import {
  TODAY_WEATHER_REQUEST,
  TODAY_WEATHER_SUCCESS,
  TODAY_WEATHER_FAILURE
} from "./types";

import { getTodayWeather } from "../MainPage/services/weatherService";

//TodayWeather

const todayWeatherRequest = () => ({
  type: TODAY_WEATHER_REQUEST
});
const todayWeatherSuccess = payload => ({
  type: TODAY_WEATHER_SUCCESS,
  payload
});

const todayWeatherFailure = payload => ({
  type: TODAY_WEATHER_FAILURE,
  payload
});

export const fetchTodayWeather = () => dispatch => {
  dispatch(todayWeatherRequest());
  return getTodayWeather()
    .then(response => dispatch(todayWeatherSuccess(response)))
    .catch(error => dispatch(todayWeatherFailure(error)));
};
