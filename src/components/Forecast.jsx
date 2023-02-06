import { getDayOfTheWeek } from "../utils/forecast";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const ForecastCarousel = ({ forecast }) => {
  return (
    <div>
      {forecast.location && (
        <p className="font-bold text-md lg:text-xl">
          Next 7 days in {forecast.location.name}
        </p>
      )}
      {forecast.forecast &&
        forecast.forecast.forecastday.map((day, index) => (
          <div
            className="bg-gradient-to-r from-blue-500 to-blue-900 rounded-xl border border-blue-300 my-4 cursor-pointer"
            key={index}
          >
            <div className="p-2 my-2 rounded-xl flex items-center justify-between">
              <div className="w-1/3 flex flex-col items-start justify-start font-semibold">
                <span className="text-sm lg:text-2xl">
                  {getDayOfTheWeek(day.date_epoch)}
                </span>
                <span className="text-xs">{day.date}</span>
              </div>
              <div className="w-1/3 flex flex-col items-center justify-center text-xs lg:text-sm font-semibold text-center">
                <span>{day.day.condition.text}</span>
                <span>Max. wind: {day.day.maxwind_kph}km/h</span>
              </div>
              <div className="w-1/3 flex flex-col items-end justify-start text-xs lg:text-sm font-semibold">
                <span>Avg: {day.day.avgtemp_c}°C</span>
                <span>Min: {day.day.mintemp_c}°C</span>
                <span>Max: {day.day.maxtemp_c}°C</span>
              </div>
            </div>
            <div>
              <Splide
                options={{
                  perPage: 12,
                  arrows: false,
                  pagination: false,
                  drag: "free",
                  breakpoints: {
                    1024: { perPage: 9 },
                    800: { perPage: 5 },
                  },
                }}
                aria-label="7 days forecast"
              >
                {forecast.forecast.forecastday[index].hour.map(
                  (hour, index) => (
                    <SplideSlide key={index}>
                      <div className="flex flex-col items-center justify-between border border-blue-300 rounded-xl m-2 bg-blue-800 text-center h-96 p-2">
                        <div className="h-1/4 w-full flex items-center justify-center">
                          <p className="text-xs font-semibold">
                            {hour.time.substring(11)}
                          </p>
                        </div>
                        <div className="h-1/4 w-full flex items-center justify-center">
                          <img
                            src={require(`../assets/${hour.condition.icon.substring(
                              21,
                              34
                            )}/${hour.is_day === 0 ? "night" : "day"}/${
                              hour.condition.icon.split("/")[6]
                            }`)}
                            alt="weather"
                          />
                        </div>
                        <div className="h-1/4 w-full flex items-center justify-center">
                          <p className="font-semibold">
                            <span className="text-orange-500">
                              {hour.temp_c}°C
                            </span>
                          </p>
                        </div>
                        <div className="h-1/4 w-full flex items-center justify-center">
                          <p className="text-xs font-semibold">
                            {hour.condition.text}
                          </p>
                        </div>
                        <div className="h-1/4 w-full flex items-center justify-center">
                          <p className="text-xs font-semibold">
                            Wind: {hour.wind_kph}km/h
                          </p>
                        </div>
                      </div>
                    </SplideSlide>
                  )
                )}
              </Splide>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ForecastCarousel;
