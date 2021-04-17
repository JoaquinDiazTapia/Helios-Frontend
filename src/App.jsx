import React from 'react'
import './fonts.css'
import './App.css'
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import View from './View'

function App() {
  const { executeRecaptcha } = useGoogleReCaptcha()

  const back = (currentToken) => {
    return fetch('http://localhost:5000.sendemail', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: currentToken,
        mail: 'yourOtherValue',
      }),
    }).then((response) => response.json().then((x) => console.log(x)))
  }

  const clickHandler = async () => {
    if (!executeRecaptcha) {
      console.log('test')
      return;
    }

    const result = await executeRecaptcha('Helios_form')
    const haber = back(result)
  }

  return (
    <div>
      <div className="App">
        <View clickHandler={clickHandler} />
      </div>
    </div>
  )
}

export default App
