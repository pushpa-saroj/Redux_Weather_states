import {
  weatherReducer,
  WEATHER_KEY
} from "../Redux/weatherRedux/weather.reducers";

import { combineReducers } from "redux";

let rootReducer = combineReducers({
  [WEATHER_KEY]: weatherReducer
});

export { rootReducer };
