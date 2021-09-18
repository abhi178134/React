import React from "react";
import Spinner from "./Spinner";

const Country = ({country,weather}) => {

return(
<>
    <h1>{country.name}</h1>
    <div>capital {country.capital}</div>
    <div>population {country.population}</div>
    <h2>languages</h2>
    <ul>
      {country && country.languages.map((l) => (
        <li key={l.name}>{l.name}</li>
      ))}
    </ul>
    <img
      src={country.flag}
      alt="flag"
      height="100"
      style={{ border: "solid" }}
    />
    <h2>Weather in {country.capital}</h2>
    <div>temperature: {weather.current.temperature} Celcius</div>
    <img src={weather.current.weather_icons} alt="weather icon" />
    <div>
      wind: {weather.current.wind_speed} mph direction{" "}
      {weather.current.wind_dir}
    </div>
</>)
};
export default Country;