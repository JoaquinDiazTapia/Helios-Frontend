import React, { useState } from 'react'
import PuffLoader from 'react-spinners/PuffLoader'

const Loading = () => {
  const [loading] = useState(true)
  const [color] = useState('#ffffff')
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
  }

  return (
    <div style={styles.container}>
      <div style={styles.message}>
        <PuffLoader
          color={color}
          loading={loading}
          style={{
            display: 'block',
            margin: '0 auto',
            borderColor: 'red',
          }}
          size={60}
        />
        <p>Cargando...</p>
      </div>
    </div>
  )
}

export default Loading
