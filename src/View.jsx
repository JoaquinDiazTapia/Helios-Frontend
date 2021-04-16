import React, { useState } from 'react'
import './fonts.css'
import './App.css'
import { animateScroll as scroll } from 'react-scroll'
import Nav from './components/Nav'
import Title from './components/Title'
import Inputs from './components/SimInputs/Inputs'
import SimInfo from './components/SimInfo/SimInfo'
import Form from './components/Form'

import useWindowDimensions from './components/GetWindowWidth'

const View = () => {
  const screenWidth = useWindowDimensions().width

  const [formClicked, setFormClicked] = useState(false)

  const showStyle = formClicked
    ? {
      maxHeight: 2000,
      margin: '40px auto',
      overflow: 'visible',
    }
    : null

  const showForm = () => {
    setFormClicked(!formClicked)
    scroll.scrollToBottom()
  }

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
            <Inputs screenWidth={screenWidth} />
            <div style={styles.infoCont}>
              <SimInfo showForm={showForm} screenWidth={screenWidth} />
            </div>
          </div>
        </div>
      </div>
      <div id="formContainer" style={{ ...styles.formContainer, ...showStyle }}>
        <Form />
      </div>
    </div>
  )
}

export default View
