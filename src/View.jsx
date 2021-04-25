import React, { useState } from 'react'
import './fonts.css'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import './App.css'
import { animateScroll as scroll } from 'react-scroll'
import Nav from './components/Nav'
import Title from './components/Title'
import Inputs from './components/SimInputs/Inputs'
import SimInfo from './components/SimInfo/SimInfo'
import Form from './components/Form'
import Footer from './components/Footer'
import Mensaje from './components/Mensaje'
import Loading from './components/Loading'

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

  const [disabled, setDisabled] = useState(true)

  const dispatchInfo = (valores) => {
    setSuperficie(valores.superficie)
    setPotencia(valores.potencia)
    setPrecio(valores.costo)
    setCantidadPaneles(valores.cantidad_de_paneles)
  }

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
    setDisabled(true)
  }

  const { executeRecaptcha } = useGoogleReCaptcha()

  const toggleModal = () => {
    setModalShow(!modalShow)
  }

  const postEmail = async (nombre, direccion, email, telefono) => {
    const result = await executeRecaptcha('SendMail')
    return (
      fetch(`${process.env.REACT_APP_BASE_URL}/sendEmail`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          boleta: rangeVal,
          comuna: selectedComuna.value,
          token: result,
          datos_personales: {
            name: nombre,
            address: direccion,
            email: email,
            phone: telefono,
          },
        }),
      }).then((response) => response.json().then((x) => {
        setMailRes(x.status); toggleModal(); toggleLoader()
      }))
    )
  }
  const [mailRes, setMailRes] = useState()
  const [modalShow, setModalShow] = useState(false)

  const [isLoading, setIsLoading] = useState(false)
  const toggleLoader = () => {
    setIsLoading(!isLoading)
  }

  const styles = {
    container: {
      backgroundColor: '#2B4AAF',
      padding: screenWidth >= 1000 ? '120px 5vw' : '100px 5vw',
      minHeight: '90vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
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
      {isLoading && (
        <Loading />
      )}
      {modalShow && (
        <Mensaje
          mailRes={mailRes}
          toggleModal={toggleModal}
        />
      )}
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
              disabled={disabled}
              setDisabled={setDisabled}
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
                selectedComuna={selectedComuna}
              />
            </div>
          </div>
        </div>
      </div>
      <div id="formContainer" style={{ ...styles.formContainer, ...showStyle }}>
        <Form
          postEmail={postEmail}
          toggleModal={toggleModal}
          toggleLoader={toggleLoader}
        />
      </div>
      <div>
        <Footer screenWidth={screenWidth} />
      </div>
    </div>
  )
}

export default View
