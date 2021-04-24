import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Form = () => {
  const [nombre, setNombre] = useState('')
  const [direccion, setDireccion] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')

  const [nombreError, setNombreErr] = useState({})
  const [direccionError, setDireccionErr] = useState({})
  const [emailError, setEmailErr] = useState({})
  const [telefonoError, setTelefonoErr] = useState({})

  const onSubmit = (e) => {
    e.preventDefault()
    const isValid = formValidation()
    if (isValid) {
      console.log('hola')
      // backend
      setNombre('')
      setDireccion('')
      setEmail('')
      setTelefono('')
    }
  }

  const formValidation = () => {
    const nombreError = {}
    const direccionError = {}
    const emailError = {}
    const telefonoError = {}

    let isValid = true

    if (nombre === '') {
      nombreError.emptyNombre = 'Debes ingresar un nombre'
      isValid = false
    }
    if (nombre.trim().length > 0 && nombre.trim().length < 5) {
      nombreError.nombreErrorShort = 'Nombre muy corto'
      isValid = false
    }
    if (!nombre.match(/^[a-zA-Z\s]*$/)) {
      nombreError.nombreErrorLong = 'Tu nombre no puede contener números'
      isValid = false
    }
    setNombreErr(nombreError)
    if (direccion === '') {
      direccionError.emptyDireccion = 'Debes ingresar tu dirección'
      isValid = false
    }
    setDireccionErr(direccionError)
    if (email === '') {
      emailError.emptyEmail = 'Debes ingresar un email'
      isValid = false
    }
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (!emailRegex.test(email) && email.trim().length > 0) {
      emailError.invalidEmail = 'El email ingresado es inválido'
      isValid = false
    }
    setEmailErr(emailError)
    if (telefono.trim().length < 11 && telefono.match(/^-?\d+\.?\d*$/)) {
      telefonoError.telefonoShort = 'Número de teléfono muy corto'
      isValid = false
    }
    if (telefono.trim().length > 11 && telefono.match(/^-?\d+\.?\d*$/)) {
      telefonoError.telefonoShort = 'Número de teléfono muy largo'
      isValid = false
    }
    if (!telefono.match(/^\d+$/) && telefono.trim().length > 0) {
      telefonoError.alphabetErr = 'Por favor, solo introducir números sin signo "+" ni espacios'
      isValid = false
    }
    if (telefono === '') {
      telefonoError.emptyTelefono = 'Debes ingresar un número de teléfono'
      isValid = false
    }
    setTelefonoErr(telefonoError)

    return isValid
  }

  return (
    <div>
      <form onSubmit={onSubmit} style={styles.form}>
        <label style={styles.label} htmlFor="firstName">
          Nombre y apellido
          <input
            style={styles.input}
            type="text"
            name="firstName"
            value={nombre}
            onChange={(e) => { setNombre(e.target.value) }}
          />
          {Object.keys(nombreError).map((key) => (
            <div style={styles.errMsg}>
              *
              {nombreError[key]}
            </div>
          ))}
        </label>
        <label style={styles.label} htmlFor="direccion">
          Dirección
          <input
            style={styles.input}
            type="text"
            name="direccion"
            value={direccion}
            onChange={(e) => { setDireccion(e.target.value) }}
          />
          {Object.keys(direccionError).map((key) => (
            <div style={styles.errMsg}>
              *
              {direccionError[key]}
            </div>
          ))}
        </label>
        <label style={styles.label} htmlFor="email">
          Email
          <input
            style={styles.input}
            type="text"
            name="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
          />
          {Object.keys(emailError).map((key) => (
            <div style={styles.errMsg}>
              *
              { emailError[key] }
            </div>
          ))}
        </label>
        <label style={styles.label} htmlFor="telefono">
          Teléfono
          <input
            style={styles.input}
            type="text"
            name="telefono"
            value={telefono}
            onChange={(e) => { setTelefono(e.target.value) }}
          />
          {Object.keys(telefonoError).map((key) => (
            <div style={styles.errMsg}>
              *
              { telefonoError[key] }
            </div>
          ))}
        </label>
        <div style={styles.formBtn}>
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: '1px 1px 7px grey' }}
            // onClick={null}
            style={styles.btn}
            type="submit"
          >
            Enviar propuesta preliminar a mi correo
          </motion.button>
        </div>
      </form>
    </div>
  )
}

const styles = {
  form: {
    textAlign: 'center',
    margin: '60px 10px',
  },
  label: {
    display: 'block',
    marginBottom: 30,
  },
  input: {
    border: '1px solid #311A40',
    padding: '8px 5px',
    borderRadius: 20,
    width: '100%',
    marginBottom: 10,
    marginTop: 10,
    display: 'block',
  },
  btn: {
    backgroundColor: '#00F9A8',
    color: '#2B4AAF',
    border: 'none',
    padding: '10px 20px',
    fontSize: '0.9rem',
    borderRadius: 20,
    cursor: 'pointer',
  },
  errMsg: {
    color: 'red',
    fontStyle: 'italic',
    fontSize: '0.85rem',
  },
}

export default Form
