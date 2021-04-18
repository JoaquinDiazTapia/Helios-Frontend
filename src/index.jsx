import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import App from './App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <GoogleReCaptchaProvider
    useRecaptchaNet
    reCaptchaKey={process.env.REACT_APP_RECAPTCHA_KEY}
    scriptProps={{ async: true, defer: true, appendTo: 'body' }}
  >
    <App />
  </GoogleReCaptchaProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
