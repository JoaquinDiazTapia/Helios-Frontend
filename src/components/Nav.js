import React, { useState, setState } from 'react';
import logo from '../assets/images/helios-logo.png'
import Burger from './Burger/Burger'
import { motion } from 'framer-motion';

const Nav = ({screenWidth}) => {

 const [toggleMenu,setToggleMenu]=useState(false)

    const styles = {
        navCont: {
            backgroundColor: '#311A40',
            height: screenWidth >= 1000 ? 80 : '100vh',
            width: '100%',
            display: 'flex',
            flexDirection: screenWidth >= 1000 ? 'row' : 'column',
            justifyContent: screenWidth >= 1000 ? 'flex-end' : 'center',
            alignItems: 'center',
            color: '#fff',
            paddingRight: '5vw',
            position: 'fixed',
            zIndex: 2,
            transition: '0.4s',
        },
        logo: {
            position: 'absolute',
            left: '5vw',
            height: 40,
            display: screenWidth >= 1000 ? 'block' : 'none'
        },
        navBtn: {
            marginLeft: '25px',
            borderRight: screenWidth >= 1000 ? '3px solid #00F9A8' : 'none',
            paddingRight: 20,
            cursor: 'pointer',
            position: 'relative'
        },
        navText: {
            margin: screenWidth >= 1000 ? 0 : '15px 0'
        }
    }

    const menuItems = ['Home', 'Energía Solar', 'Servicios', '¿Por qué Helios?', 'FAQ']

    const menuSlide = () => {
        setToggleMenu(!toggleMenu)
    }

    const extraStyle  = screenWidth <= 1000? { transform: toggleMenu ?  "translateX(0vw)":"translateX(-100vw)"} : {}

    return (
        <>
            {screenWidth <= 1000 ? <Burger menuSlide={menuSlide}/> : ''}

            <div style={{...styles.navCont,...extraStyle}}>
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
        </>   
    )

}

export default Nav
