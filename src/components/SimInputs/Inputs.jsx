import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { motion } from 'framer-motion'
import Location from './InputItem/Location'
import RangeSlider from './InputItem/RangeSlider'

const Inputs = ({
  screenWidth,
  minVal,
  rangeVal,
  setRangeVal,
  selectedComuna,
  setSelectedComuna,
  updateInputValues,
  disabled,
  setDisabled,
}) => {
  const [selectedRegion, setSelectedRegion] = useState(null)
  const maxVal = 300000
  const [optRegion, setOptRegion] = useState([])

  useEffect(() => {
    if (optRegion.length === 0) {
      axios.get(`${process.env.REACT_APP_BASE_URL}/regiones-y-comunas`)
        .then((res) => {
          setOptRegion(res.data.results)
        })
        .catch()
    }
  }, [])
  useEffect(() => {
    if (selectedRegion) {
      const comunaList = optRegion.filter((item) => item.region.value === selectedRegion.value)
      setOptComuna(comunaList[0].comunas)
    }
  }, [selectedRegion])

  const [optComuna, setOptComuna] = useState([])

  const styles = {
    container: {
      backgroundColor: '#00F9A8',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 20,
      boxShadow: '3px 3px 10px rgba(0,0,0,0.4)',
      marginTop: screenWidth >= 1000 ? '0' : '50px',
      color: '#2B4AAF',
      padding: 20,
      width: screenWidth >= 1000 ? '30%' : '100%',
    },
    btn: {
      width: 120,
      border: 'none',
      padding: '10px 20px',
      borderRadius: 20,
      backgroundColor: '#2B4AAF',
      color: '#fff',
      fontSize: 16,
      textAlign: 'center',
      margin: '0 auto',
      cursor: 'pointer',
    },
  }

  return (

    <div style={styles.container}>
      <Location
        setSelectedRegion={setSelectedRegion}
        optRegion={optRegion}
        optComuna={optComuna}
        selectedRegion={selectedRegion}
        selectedComuna={selectedComuna}
        setSelectedComuna={setSelectedComuna}
        setDisabled={setDisabled}
      />
      <RangeSlider
        minVal={minVal}
        maxVal={maxVal}
        rangeVal={rangeVal}
        setRangeVal={setRangeVal}
        setDisabled={setDisabled}
      />
      <motion.button
        whileHover={{ scale: 1.04, boxShadow: '1px 1px 7px grey' }}
        style={styles.btn}
        onClick={updateInputValues}
        disabled={disabled}
      >
        Simular
      </motion.button>
    </div>
  )
}

export default Inputs
