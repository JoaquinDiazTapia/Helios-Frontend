import React, { useState, setState } from 'react'

const Burger = ({ menuSlide }) => {
  const [isClicked, setIsClicked] = useState(false)

  const hamX = () => {
    setIsClicked(!isClicked)
  }

  const hamOne = { transform: isClicked ? 'rotate(45deg) translate(0px, -6px)' : 'none' }
  const hamTwo = { width: isClicked ? '0px' : '100%' }
  const hamThree = { transform: isClicked ? 'rotate(-45deg) translate(0px, 6px)' : 'none' }
  return (
    <div style={styles.container}>
      <div
        onClick={() => {
          hamX()
          menuSlide()
        }}
        style={styles.btn}
      >
        <div style={{ ...styles.hamLine, ...hamOne }} />
        <div style={{ ...styles.hamLine, ...hamTwo }} />
        <div style={{ ...styles.hamLine, ...hamThree }} />
      </div>
    </div>
  )
}

const styles = {
  container: {
    position: 'fixed',
    backgroundColor: '#311A40',
    width: '100%',
    height: 50,
    zIndex: 5,
  },
  btn: {
    position: 'absolute',
    width: 35,
    top: 12,
    left: 15,
  },
  hamLine: {
    backgroundColor: '#fff',
    height: 3,
    borderRadius: 10,
    margin: '5px 0',
    transition: '0.4s',
    transformOrigin: 'left center',
  },
}

export default Burger
