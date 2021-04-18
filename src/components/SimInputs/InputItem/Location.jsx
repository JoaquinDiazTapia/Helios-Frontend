import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Select from 'react-select'

const Location = () => {
  const [optRegion, setOptRegion] = useState([])

  useEffect(() => {
    if (optRegion.length === 0) {
      axios.get(`${process.env.REACT_APP_BASE_URL}/regiones-y-comunas`)
        .then((res) => {
          console.log(res.data.results)
          setOptRegion(res.data.results)
        })
        .catch((err) => {
          // TODO fetching error , vista de erorr?
        })
    }
  }, [])

  const [selectedRegion, setSelectedRegion] = useState(null)
  const [selectedComuna, setSelectedComuna] = useState(null)

  const regionSelect = (e) => {
    setSelectedRegion(e)
  }

  const [optComuna, setOptComuna] = useState([])

  useEffect(() => {
    if(selectedRegion) {
      const comunaList = optRegion.filter((item) => item.region.value === selectedRegion.value)
      setOptComuna(comunaList[0].comunas)
      // console.log(comunaList[0].comunas)
    }
  }, [selectedRegion])

  const customStyles = {

    control: () => ({
      border: '1px solid #2B4AAF',
      display: 'flex',
      backgroundColor: '#00F9A8 !important',
      borderRadius: 20,
      padding: '0 10px',
    }),
    dropdownIndicator: () => ({
      color: '#2B4AAF',
      border: 'none',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    placeholder: () => ({
      color: '#2B4AAf',
      fontSize: '0.8rem',
      fontStyle: 'italic',
    }),

  }

  return (
    <div>
      <div style={styles.inputContainer}>
        <p style={styles.label}>1. Indica tu región de residencia</p>
        <Select
          styles={customStyles}
          value={selectedRegion}
          onChange={(e) => regionSelect(e)}
          options={optRegion.map((region) => ({
            value: region.region.value, label: region.region.label,
          }))}
          placeholder="Selecciona una región"
        />
      </div>
      <div style={styles.inputContainer}>
        <p style={styles.label}>2. Indica tu comuna de residencia</p>
        <Select
          styles={customStyles}
          value={selectedComuna}
          onChange={(e) => setSelectedComuna(e)}
          options={optComuna.map((comuna) => ({
            value: comuna.value, label: comuna.label }))}
          placeholder="Selecciona una comuna"
        />
      </div>
    </div>
  )
}

const styles = {
  label: {
    margin: '0 0 10px 0',
  },
  inputContainer: {
    marginBottom: 15,
  },
}

export default Location
