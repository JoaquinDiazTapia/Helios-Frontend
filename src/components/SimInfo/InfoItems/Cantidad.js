import React from 'react';
import { useState, setState } from 'react';
import Paneles from '../../../assets/images/qtt.png'

const Cantidad = ({screenWidth}) => {

    const [cantidadPaneles, setCantidadPaneles] = useState('0');

    const styles = {
      container: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          // alignSelf: 'stretch',
          padding: screenWidth >= 1000 ? '0 10px' : '0'
      },
      title: {
        fontSize: '1rem',
        fontWeight: '600',
        marginBottom: 0
      },
      item: {
        position: 'relative',
        marginTop: 10,
        textAlign: 'center'
      },
      img: {
        width: 114,
        margin: '5px 0 0 0'
      },
      values: {
          margin: 0,
          fontSize: '0.8rem'
      }
    }

    return (

        <div style={styles.container}>
           <h3 style={styles.title}>Cantidad de paneles</h3>
           <div style={styles.item}>
              <img src={Paneles} style={styles.img}></img>
              <p style={styles.values}>{cantidadPaneles} und.</p>
           </div>
        </div>

    )
}

export default Cantidad
