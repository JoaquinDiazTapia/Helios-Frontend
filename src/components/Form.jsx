import React from 'react'

const Form = ({ clickHandler }) => (
  <form style={styles.form}>
    <label style={styles.label} htmlFor="firstName">
      Nombre y apellido
      <input style={styles.input} type="text" value="" name="firstName" />
    </label>
    <label style={styles.label} htmlFor="direccion">
      Dirección
      <input style={styles.input} type="text" value="" name="direccion" />
    </label>
    <label style={styles.label} htmlFor="email">
      Email
      <input style={styles.input} type="text" value="" name="email" />
    </label>
    <label style={styles.label} htmlFor="telefono">
      Teléfono
      <input style={styles.input} type="text" value="" name="telefono" />
    </label>
    <div style={styles.formBtn}>
      <button onClick={clickHandler} style={styles.btn} type="button">
        Enviar propuesta preliminar a mi correo
      </button>
    </div>
  </form>
)

const styles = {
  form: {
    textAlign: 'center',
    margin: '60px 10px',
  },
  label: {
    display: 'block',
    marginBottom: 10,
  },
  input: {
    border: '1px solid #311A40',
    padding: '8px 5px',
    borderRadius: 20,
    width: '100%',
    marginBottom: 25,
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
  },
}

export default Form
