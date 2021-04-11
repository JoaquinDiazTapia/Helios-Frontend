import React from 'react';
import { useState, setState } from 'react';

const Superficie = ({ screenWidth }) => {

    const [superficie, setSuperficie] = useState('000');

    const styles = {
      container: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignSelf: 'stretch',
          padding: screenWidth >= 1000 ? '0 10px' : '0'
      },
      title: {
        fontSize: '1rem',
        fontWeight: '600',
        marginBottom: 0
      },
      item: {
        position: 'relative',
        marginTop: 20
      },
      square: {
          border: '4px solid #fff',
          width: 70,
          height: 70,
          display: 'block',
          borderRadius: 20
      },
      height: {
          position: 'absolute',
          right: 'calc(-50% - 30px)',
          top: "20%",
          margin: 0,
          transform: 'rotate(-90deg)',
          width: '100%',
          textAlign: 'center'
      },
      width: {
        textAlign: 'center',
        marginTop: 15
      },
      rangeWidth: {
        position: 'relative',
        width: "100%",
        height: 1,
        backgroundColor: '#fff',
        marginBottom: 10
      },
      rangeBoundary: {
        height: 10,
        width: 1,
        backgroundColor: '#fff',
        position: 'absolute',
        top: -5
      },
      rangeBoundaryRight: {
        height: 10,
        width: 1,
        backgroundColor: '#fff',
        position: 'absolute',
        top: -5,
        right: 0
      },
      values: {
          margin: 0,
          fontSize: '0.8rem'
      }
    }

    return (

        <div style={styles.container}>
           <h3 style={styles.title}>Superficie que necesitas</h3>
           <div style={styles.item}>
               <div style={styles.square}></div>
               <div style={styles.width}>
                    <div style={styles.rangeWidth}>
                        <div style={styles.rangeBoundary}></div>
                        <div style={styles.rangeBoundaryRight}></div>
                    </div>
                    <p style={styles.values}>{superficie} m2.</p>
               </div>
               <div style={styles.height}>
                    <div style={styles.rangeWidth}>
                        <div style={styles.rangeBoundary}></div>
                        <div style={styles.rangeBoundaryRight}></div>
                    </div>
                    <p style={styles.values}>{superficie} m2.</p>
               </div>
           </div>
        </div>

    )
}



export default Superficie
