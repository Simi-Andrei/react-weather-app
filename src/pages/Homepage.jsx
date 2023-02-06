import TodayWeather from "../components/TodayWeather";
import Forecast from "../components/Forecast";
import { useState } from "react";
import axios from "axios";
import { BeatLoader } from "react-spinners";

const Homepage = () => {
  const [location, setLocation] = useState("");
  const [cityInfo, setCityInfo] = useState({});
  const [forecast, setForecast] = useState({});
  const [loadingTodayWeather, setLoadingTodayWeather] = useState(false);
  const [loadingForecastWeather, setLoadingForecastWeather] = useState(false);

  const API_URL_CURRENT = `http://api.weatherapi.com/v1/current.json?key=4c43bf16829c40f8a8a152401230502&q=${location}&aqi=no
  `;

  const API_URL_FORECAST = `http://api.weatherapi.com/v1/forecast.json?key=4c43bf16829c40f8a8a152401230502&q=${location}&days=7&aqi=no&alerts=no`;

  const onSubmit = (e) => {
    e.preventDefault();
    const getWeather = () => {
      setLoadingTodayWeather(true);
      axios.get(API_URL_CURRENT).then((response) => {
        setCityInfo(response.data);
        setLoadingTodayWeather(false);
      });
    };
    getWeather();
    const getWeatherForecast = () => {
      setLoadingForecastWeather(true);
      axios.get(API_URL_FORECAST).then((response) => {
        setForecast(response.data);
        setLoadingForecastWeather(false);
      });
    };
    getWeatherForecast();
    setLocation("");
  };

  return (
    <section>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 p-4 flex flex-col items-start">
          <form className="p-2" onSubmit={onSubmit}>
            <label htmlFor="location" className="block mb-2">
              Check the local degrees
            </label>
            <input
              id="location"
              name="location"
              type="text"
              className="text-blue-900 py-1 p-2 text-sm rounded outline-blue-500 ring-blue-500 placeholder:italic placeholder:tracking-wider placeholder:text-xs"
              placeholder="Search location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
            <button
              className="bg-white ml-2 py-1 px-4 text-blue-900 font-bold text-sm rounded"
              type="submit"
            >
              Check
            </button>
          </form>
        </div>
        <div className="w-full lg:w-1/2 p-0 lg:p-4">
          {loadingTodayWeather ? (
            <div className="py-24 text-center">
              <BeatLoader color="#ea580c" />
            </div>
          ) : (
            <TodayWeather cityInfo={cityInfo} />
          )}
        </div>
      </div>
      <div className="p-0 lg:p-4">
        {loadingForecastWeather ? (
          <div className="py-24 text-center">
            <BeatLoader color="#ea580c" />
          </div>
        ) : (
          <Forecast forecast={forecast} />
        )}
      </div>
    </section>
  );
};

export default Homepage;
