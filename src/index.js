import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// .then((response) => {
//   toast.success('Weather data found!', {
//     position: "top-right",
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: "light",
//   });

//   setWeatherData(response.data); // update value replace old city Weatherdata by new and render again
// })
// .catch((err) => {
//   toast.error('Weather data not found!', {
//     position: "top-right",
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: "light",
//     });
//   setWeatherData();// empty set when it is error  hide the previous weather info
//   console.log(err);
// });
// }


//Option2
   // const url = "https://api.openweathermap.org/data/2.5/weather";
    // // const params = {
    // //   q: e.target.city.value,  // input from user
    // //   appid: process.env.REACT_APP_OWM_API_KEY,
    // //   units:'metric'  // to show data in Celcium (OWdoc)
    // // };

