import React from 'react'
import { motion } from 'framer-motion'

const Mensaje = ({ mailRes, toggleModal, setIsLoading }) => {
  const styles = {
    container: {
      position: 'fixed',
      height: '100vh',
      width: '100vw',
      backgroundColor: 'rgba(0,0,0,0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 99,
    },
    message: {
      position: 'relative',
      backgroundColor: '#2B4AAF',
      height: 500,
      width: 400,
      borderRadius: 20,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      textAlign: 'center',
      padding: '0 20px',
      boxShadow: '0px 0px 20px rgba(0,0,0,0.4)',
    },
    closeDiv: {
      position: 'absolute',
      zIndex: 60,
      top: -20,
      right: -10,
      width: 48,
      height: 48,
      backgroundColor: '#311A40',
      borderRadius: 50,
      padding: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    lineCont: {
      postion: 'absolute',
      top: '-5px',
    },
    left: {
      position: 'absolute',
      backgroundColor: '#fff',
      width: 30,
      height: 2,
      borderRadius: 20,
      left: 9,
      top: 23,
      transform: 'rotate(45deg) translateY(0px)',
      transformOrigin: 'center center',
    },
    right: {
      position: 'absolute',
      backgroundColor: '#fff',
      width: 30,
      height: 2,
      borderRadius: 20,
      left: 9,
      top: 23,
      transform: 'rotate(-45deg) translateY(0px)',
      transformOrigin: 'center center',
    },
    title: {
      fontSize: '2rem',
      color: '#00F9A8',
    },
  }

  return (
    <div style={styles.container}>
      <div style={styles.message}>
        <motion.div
          onClick={() => { toggleModal(); setIsLoading(false) }}
          style={styles.closeDiv}
          whileHover={{ scale: 1.1, rotate: 180 }}
          whileTap={{ scale: 0.9 }}
        >
          <div style={styles.lineCont}>
            <div style={styles.left} />
            <div style={styles.right} />
          </div>
        </motion.div>
        <h3 style={styles.title}>{mailRes === 200 ? '¡Enviado!' : 'Hubo un problema' }</h3>
        <p>{mailRes === 200 ? 'Te enviamos un email con la cotización referencial para tu sistema.' : 'Estamos teniendo problemas de conexión. Por favor, inténtalo más tarde.'}</p>
        <p>{mailRes === 200 ? 'Sigue los pasos indicados para poder seguir con tu proyecto.' : null }</p>
        <p><b>{mailRes === 200 ? '*Recuerda revisar tu carpeta de spam si no ves el mensaje en tu bandeja de entrada' : null }</b></p>
      </div>
    </div>
  )
}

export default Mensaje
