import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setcity] = useState("London");

  useEffect(() => {
    fetchweatherData(city);
  }, [city]);

  const fetchweatherData = () => {
    const API_KEY = "ed88bdc6e4ff9c9381b25488233135b8";
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        console.log(JSON.stringify(data));
      });
  };

  const handleSearch = (searchedCity) => {
    setcity(searchedCity);
  };

  return (
    <>
      <Navbar onSearch={handleSearch}/>
    </>
  );
}

export default App;
