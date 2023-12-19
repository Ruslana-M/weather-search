import { useState } from "react";
import "./App.css";
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


    // 1. call weather api
    // 2. on get data, show weatherCard
    // 3. to store the response data, we created a state but i could have used a simple variable
    // with simple variable re-render does not happen
    // with state variable re-render happens
    //4. update the data by setWeatherData for then (res.data). for err-with empty set!!
    //5.  Condition in return: if there is whetherData && print me a <div with weatherData.main.temp
    //6. change temperature to Celcius units: metric
    //7. Add Images of sun, rain ..in const ImagesMap={}
    //8. add in && div img src={imagesMap[weatherData.weather[0].main]} - dynamic  info clear/rain..
    // 9. Add Toast for success .then: and for .err: https://fkhadra.github.io/react-toastify/positioning-toast 
    // 10. <ToastContainer /> add Container at the end

    const imagesMap = {
      Clouds: 'https://openweathermap.org/img/wn/03d@4x.png',
      Clear: 'https://openweathermap.org/img/wn/01d@4x.png',
      Snow: 'https://openweathermap.org/img/wn/13d@4x.png',
      Rain: 'https://openweathermap.org/img/wn/10d@4x.png',
      Mist: 'https://openweathermap.org/img/wn/50d@4x.png',
    }
    
    function App() {
      const [weatherData, setWeatherData] = useState();
    
    
      function fetchWeather(e) {
        e.preventDefault();
        const url = "https://api.openweathermap.org/data/2.5/weather";
        const params = {
          q: e.target.city.value,  // input from user
          appid: process.env.REACT_APP_OWM_API_KEY,
          units:'metric'  // to show data in Celcium (OWdoc)
        };
         // Option 2 axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}appid=${process.env.REACT_APP_OWM_API_KEY}&units=metric`)
        axios
          .get(url, { params })
          .then((response) => {
            toast.success('Weather data found!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
    
            setWeatherData(response.data); // update value replace old city Weatherdata by new and render again
      })
      .catch((err) => {
        toast.error('Weather data not found!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        setWeatherData();// empty set! when it is error  hide the previous weather info
        console.log(err);
      });
  }
  return (
    <div className="App">

<form onSubmit={fetchWeather}>
        <input className="input_line" type="text" name="city" />
        <button className="btn">Search</button>
      </form>

      {weatherData && (
        <div className="text">
          <img className='wImg' src={imagesMap[weatherData.weather[0].main]} />
          <span>{weatherData.name}</span>
          <span> {weatherData.main.temp} Celsius </span>
        </div>
      )}


    <ToastContainer />
    </div>
  );
}

export default App;
