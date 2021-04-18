import React from 'react'

import PrecioImg from '../../../assets/images/price.png'

const Precio = ({ screenWidth, precio }) => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignSelf: 'stretch',
      padding: screenWidth >= 1000 ? '0 10px' : '0',
    },
    title: {
      fontSize: '1rem',
      fontWeight: '600',
      marginBottom: 0,
    },
    item: {
      position: 'relative',
      marginTop: 5,
      textAlign: 'center',
    },
    img: {
      width: 105,
      margin: '15px 0 5px 0',
    },
    values: {
      margin: 0,
      fontSize: '0.8rem',
    },
    valueSubt: {
      margin: '2px 0',
      fontSize: '0.7rem',
      fontStyle: 'italic',
    },
  }

  return (

    <div style={styles.container}>
      <h3 style={styles.title}>Cantidad de paneles</h3>
      <div style={styles.item}>
        <img src={PrecioImg} style={styles.img} alt="" />
        <p style={styles.values}>
          $
          {precio}
        </p>
        <p style={styles.valueSubt}>Incluye equipos e instalación</p>
      </div>
    </div>

  )
}

export default Precio
