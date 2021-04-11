import React from 'react';
import { useState, setState } from 'react';
import Superficie from './InfoItems/Superficie'
import Cantidad from './InfoItems/Cantidad'

const SimInfo = () => {

    return (

        <div style={styles.container}>
            <Superficie></Superficie>
            <Cantidad></Cantidad>
        </div>     
    )
}

const styles = {
  container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      margin: '30px 0'
  }
}

export default SimInfo
