import React from 'react';
import { useState, setState } from 'react';
import Location from './InputItem/Location'
import RangeSlider from './InputItem/RangeSlider'
import { motion } from 'framer-motion';

const Inputs = ( { screenWidth } ) => {

    const styles = {
        container: {
            backgroundColor: '#00F9A8',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 20,
            boxShadow: '3px 3px 10px rgba(0,0,0,0.4)',
            marginTop: screenWidth >= 1000 ? '0' : '50px',
            color: '#2B4AAF',
            padding: 20,
            width: screenWidth >= 1000 ? '30%' : '100%'
        },
        btn: {
            width: 120,
            border: 'none',
            padding: '10px 20px',
            borderRadius: 20,
            backgroundColor: '#2B4AAF',
            color: '#fff',
            fontSize: 16,
            textAlign: 'center',
            margin: '0 auto',
            cursor: 'pointer',
            // transition: '0.2s'
        }
    }

    return (

        <div style={styles.container}>
            <Location></Location>
            <RangeSlider></RangeSlider>
            <motion.button
                whileHover={{ scale: 1.04, boxShadow: '1px 1px 7px grey' }}
                style={styles.btn}>Simular
            </motion.button>
        </div>     
    )
}

export default Inputs
