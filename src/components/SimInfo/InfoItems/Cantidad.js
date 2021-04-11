import React from 'react';
import { useState, setState } from 'react';

const Cantidad = () => {

    const [cantidadPaneles, setCantidadPaneles] = useState('0');

    return (

        <div style={styles.container}>
           <h3 style={styles.title}>Cantidad de paneles</h3>
           <div style={styles.item}>
              <p style={styles.values}>{cantidadPaneles} und.</p>
           </div>
        </div>

    )
}

const styles = {
  container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
  },
  title: {
    fontSize: '1rem',
    fontWeight: '600',
  },
  item: {
    position: 'relative',
    marginTop: 20
  },
  values: {
      margin: 0,
      fontSize: '0.8rem'
  }
}

export default Cantidad
