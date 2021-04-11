import React from 'react';
import { useState, setState } from 'react';
import logo from '../assets/images/helios-logo.png'
import { motion } from 'framer-motion';

const Nav = () => {

    // const [isHovered, setIsHovered] = React.useState(false);
    const menuItems = ['Home', 'Energía Solar', 'Servicios', '¿Por qué Helios?', 'FAQ']
    
    return (

        <div style={styles.navCont}>
            <img src={logo} style={styles.logo} alt="logo"></img>
            {menuItems.map((item) => 
            <div style={styles.navBtn}>
                <motion.p 
                    whileHover={{ scale: 1.1 }}
                    style={styles.navText}>
                        {item}
                </motion.p>
            </div>
            )}
        </div>     
    )
}

const styles = {
    navCont: {
        backgroundColor: '#311A40',
        height: 80,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        color: '#fff',
        paddingRight: '5vw',
        position: 'relative'
    },
    logo: {
        position: 'absolute',
        left: '5vw',
        height: 40
    },
    navBtn: {
        marginLeft: '25px',
        borderRight: '3px solid #00F9A8',
        paddingRight: 20,
        cursor: 'pointer',
        position: 'relative'
    },
    navText: {
        margin: 0
    }
}

export default Nav
