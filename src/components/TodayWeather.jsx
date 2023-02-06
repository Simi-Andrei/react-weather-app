const TodayWeather = ({ cityInfo }) => {
  const iconPath =
    cityInfo.current && cityInfo.current.condition.icon.substring(21, 34);

  const iconNumber =
    cityInfo.current && cityInfo.current.condition.icon.split("/")[6];

  return (
    <div className="relative">
      {cityInfo.location && (
        <div>
          <p className="font-bold text-md lg:text-xl text-right mb-4">
            Today in {cityInfo.current && cityInfo.location.name}
          </p>
          <div className="flex flex-col items-start text-xs lg:text-md font-semibold tracking-wide rounded-xl p-2 bg-gradient-to-r from-blue-500 to-blue-900 border border-blue-300">
            <p className="my-1">
              Location:{" "}
              <span>
                {cityInfo.location.name}, {cityInfo.location.country}
              </span>
            </p>
            <p className="my-1">
              Time: {cityInfo.location.localtime.substring(11)} /{" "}
              {cityInfo.current.is_day === 1 ? "Day" : "Night"}
            </p>
            <p className="my-1">Condition: {cityInfo.current.condition.text}</p>
            <p className="my-1">Temperature: {cityInfo.current.temp_c}°C</p>
            <p className="my-1">Feels like: {cityInfo.current.feelslike_c}°C</p>
            <p className="my-1">
              Wind speed: {Math.round(cityInfo.current.wind_kph)}km/h
            </p>
            <img
              className="absolute bottom-0 right-0 w-16 lg:w-32"
              src={require(`../assets/${iconPath}/${
                cityInfo.current.is_day === 0 ? "night" : "day"
              }/${iconNumber}`)}
              alt="weather"
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default TodayWeather;
