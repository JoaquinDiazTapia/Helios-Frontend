import React, { useState } from 'react'
import './fonts.css'
// import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import './App.css'
import { animateScroll as scroll } from 'react-scroll'
import Nav from './components/Nav'
import Title from './components/Title'
import Inputs from './components/SimInputs/Inputs'
import SimInfo from './components/SimInfo/SimInfo'
import Form from './components/Form'
import Footer from './components/Footer'

import useWindowDimensions from './components/GetWindowWidth'

const View = () => {
  const screenWidth = useWindowDimensions().width

  const [formClicked, setFormClicked] = useState(false)

  const [inputValues, setInputValues] = useState([])

  const showStyle = formClicked
    ? {
      height: 'auto',
      maxHeight: 2000,
      margin: '40px auto',
      overflow: 'visible',
    }
    : null

  const showForm = () => {
    setFormClicked(!formClicked)
    scroll.scrollToBottom()
  }

  const minVal = 2000
  const [rangeVal, setRangeVal] = useState(minVal)
  const [selectedComuna, setSelectedComuna] = useState(null)

  const [superficie, setSuperficie] = useState(0)
  const [cantidadPaneles, setCantidadPaneles] = useState(0)
  const [potencia, setPotencia] = useState(0)
  const [precio, setPrecio] = useState(0)

  const dispatchInfo = (valores) => {
    setSuperficie(valores.superficie)
    setPotencia(valores.potencia)
    setPrecio(valores.costo)
    setCantidadPaneles(valores.cantidad_de_paneles)
  }

  // const { executeRecaptcha } = useGoogleReCaptcha()

  const fetchCotizacion = () => (
    fetch(`${process.env.REACT_APP_BASE_URL}/calculos`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        boleta: rangeVal,
        comuna: selectedComuna.value,
      }),
    }).then((response) => response.json().then((x) => dispatchInfo(x)))
  )

  const updateInputValues = () => {
    fetchCotizacion()
  }

  // const clickHandler = async () => {
  //   const result = await executeRecaptcha('Helios_form')
  //   const haber = back(result)
  // }

  const styles = {
    container: {
      backgroundColor: '#2B4AAF',
      padding: screenWidth >= 1000 ? '120px 5vw' : '100px 5vw',
    },
    maxWidth: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    titleCont: {
      width: screenWidth >= 750 ? '40%' : '100%',
    },
    flexCont: {
      display: 'flex',
      flexDirection: screenWidth >= 1000 ? 'row' : 'column',
      margin: screenWidth >= 1000 ? '50px 0' : '0',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    infoCont: {
      width: screenWidth >= 1000 ? '65%' : 'auto',
    },
    formContainer: {
      margin: 0,
      maxWidth: 1000,
      height: 0,
      overflow: 'hidden',
      transition: 'height 0.9s',
    },
  }

  return (
    <div>
      <Nav screenWidth={screenWidth} />
      <div style={styles.container}>
        <div style={styles.maxWidth}>
          <div style={styles.titleCont}>
            <Title />
          </div>
          <div style={styles.flexCont}>
            <Inputs
              setInputValues={setInputValues}
              screenWidth={screenWidth}
              minVal={minVal}
              rangeVal={rangeVal}
              setRangeVal={setRangeVal}
              selectedComuna={selectedComuna}
              setSelectedComuna={setSelectedComuna}
              updateInputValues={updateInputValues}
            />
            <div style={styles.infoCont}>
              <SimInfo
                showForm={showForm}
                screenWidth={screenWidth}
                inputValues={inputValues}
                superficie={superficie}
                cantidadPaneles={cantidadPaneles}
                potencia={potencia}
                precio={precio}
              />
            </div>
          </div>
        </div>
      </div>
      <div id="formContainer" style={{ ...styles.formContainer, ...showStyle }}>
        <Form clickHandler={null} />
      </div>
      <div>
        <Footer screenWidth={screenWidth} />
      </div>
    </div>
  )
}

export default View
