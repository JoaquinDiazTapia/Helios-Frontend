import React, { useState, setState } from 'react'

import PowerImg from '../../../assets/images/power.png'

const Potencia = ({ screenWidth }) => {
  const [potencia, setPotencia] = useState('0')

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      // alignSelf: 'stretch',
      padding: screenWidth >= 1000 ? '0 10px' : '0',
    },
    title: {
      fontSize: '1rem',
      fontWeight: '600',
      marginBottom: 0,
    },
    item: {
      position: 'relative',
      marginTop: 12,
      textAlign: 'center',
    },
    img: {
      width: 95,
      margin: '10px 0',
    },
    values: {
      margin: 0,
      fontSize: '0.8rem',
    },
  }

  return (

    <div style={styles.container}>
      <h3 style={styles.title}>Cantidad de paneles</h3>
      <div style={styles.item}>
        <img src={PowerImg} style={styles.img} />
        <p style={styles.values}>
          {potencia}
          {' '}
          Kw.
        </p>
      </div>
    </div>

  )
}

export default Potencia
