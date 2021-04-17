import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { motion } from 'framer-motion'
import Location from './InputItem/Location'
import RangeSlider from './InputItem/RangeSlider'

const Inputs = ({ screenWidth, setInputValues }) => {
  const [selectedRegion, setSelectedRegion] = useState(null)
  const [selectedComuna, setSelectedComuna] = useState(null)

  const [optRegion, setOptRegion] = useState([])

  useEffect(() => {
    if (optRegion.length === 0) {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
          // console.log(res.data)
          setOptRegion(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [])

  const [optComuna, setOptComuna] = useState([])

  useEffect(() => {
    const comunaList = optRegion.filter((item) => item.name === selectedRegion.value)
    setOptComuna(comunaList.map((item) => item.address))
  }, [selectedRegion])

  const updateInputValues = () => {
    setInputValues([5, 10, 12, 4])
  }

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
      />
      <RangeSlider />
      <motion.button
        whileHover={{ scale: 1.04, boxShadow: '1px 1px 7px grey' }}
        style={styles.btn}
        onClick={updateInputValues}
      >
        Simular
      </motion.button>
    </div>
  )
}

export default Inputs
