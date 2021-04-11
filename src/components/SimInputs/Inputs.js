import React from 'react';
import { useState, setState } from 'react';
import { motion } from "framer-motion";
import Location from './InputItem/Location'
import RangeSlider from './InputItem/RangeSlider'

const Inputs = () => {

    return (

        <div style={styles.container}>
            <Location></Location>
            <RangeSlider></RangeSlider>
            <button style={styles.btn}>Simular</button>
        </div>     
    )
}

const styles = {
    container: {
        backgroundColor: '#00F9A8',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 20,
        boxShadow: '3px 3px 10px rgba(0,0,0,0.4)',
        marginTop: 50,
        color: '#2B4AAF',
        padding: 20
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
        margin: '0 auto'
    }
}

export default Inputs
