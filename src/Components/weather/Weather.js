import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  sunnyWeather,
  rainyWeather,
  cloudyWeather,
  snowyWeather
} from "../../Redux/weatherRedux/weather.actions";
import { WEATHER_KEY } from "../../Redux/weatherRedux/weather.reducers";
import "./weather.css";

const Weather = () => {
  let dispatch = useDispatch();

  // view from store

  let ViewData = useSelector((state) => {
    return state[WEATHER_KEY];
  });

  // handle click events
  let clickSunny = () => {
    dispatch(sunnyWeather());
  };

  let clickRainy = () => {
    dispatch(rainyWeather());
  };

  let clickCloudy = () => {
    dispatch(cloudyWeather());
  };

  let clickSnowy = () => {
    dispatch(snowyWeather());
  };

  return (
    <>
      <div className="Container">
        <div className="card-header ">
          <h1>WEATHER APP</h1>
        </div>
        <div className="card-body ">
          <h2>{ViewData.data}</h2>
        </div>
        <div className="card-footer">
          <button className="button Primary" onClick={clickSunny}>
            Sunny
          </button>

          <button className="button secondary" onClick={clickRainy}>
            Rainy
          </button>

          <button className="button warning  " onClick={clickCloudy}>
            Cloudy
          </button>

          <button className="button success" onClick={clickSnowy}>
            Snowy
          </button>
        </div>
      </div>
    </>
  );
};

export default Weather;
