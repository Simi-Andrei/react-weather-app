const API_KEY = "7715306ece1d38ad4074a85f820789c1";

const BASE_API_URL = "https://api.openweathermap.org/data/2.5";

export const getCurrentWeatherEndpoint = (city) => {
  return `${BASE_API_URL}/weather?q=${city}&appid=${API_KEY}&lang=ro&units=metric`;
};

export const getForecastEndpoint = (city) => {
  return `${BASE_API_URL}/forecast?q=${city}&appid=${API_KEY}&lang=ro&units=metric`;
};
