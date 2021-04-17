import React from 'react'
import logo from '../assets/images/helios-logo.png'
import fb from '../assets/images/fb-icon.png'
import ig from '../assets/images/ig-icon.png'

const Footer = ({ screenWidth }) => {
  const styles = {
    container: {
      background: 'linear-gradient(45deg, #311A40, #2B46A7, #00F9A8)',
      display: 'flex',
      flexDirection: screenWidth >= 1000 ? 'row' : 'column',
      padding: '30px 5vw',
      justifyContent: screenWidth >= 1000 ? 'space-between' : 'center',
      alignItems: 'center',
      color: '#fff',
    },
    logo: {
      width: screenWidth >= 1000 ? 200 : 130,
    },
    text: {
      fontSize: '0.75rem',
      margin: screenWidth >= 1000 ? '0 10px' : '30px 0px',
      width: screenWidth >= 1000 ? '30%' : '100%',
    },
    iconCont: {
      display: 'flex',
      justifyContent: 'space-around',
      flexDirection: 'row',
      width: 200,
      margin: '20px 0',
    },
    icon: {
      width: 50,
    },
    subt: {
      fontWeight: '500',
    },
  }

  return (
    <div style={styles.container}>
      <img src={logo} style={styles.logo} alt="logo" />
      <div style={styles.text}>
        <p>
          Si necesitas un sistema más complejo como off grid,
          baterías, etc. contáctanos directamente a
          <span> contacto@heliosenergia.cl </span>
          o llamando al
          <span> +569 22223344</span>
        </p>
      </div>
      <div style={styles.iconCont}>
        <img src={fb} style={styles.icon} alt="facebook helios" />
        <img src={ig} style={styles.icon} alt="instagram helios" />
      </div>
      <h3 style={styles.subt}>
        &#169; Helios energía
        <br />
        Derechos reservados
      </h3>
    </div>
  )
}

export default Footer
