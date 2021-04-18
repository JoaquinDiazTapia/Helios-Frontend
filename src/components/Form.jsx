import React from 'react'

const Form = ({ clickHandler }) => (
  <form style={styles.form}>
    <label style={styles.label}>Nombre y apellido</label>
    <input style={styles.input} type="text" value="" />
    <label style={styles.label}>Dirección</label>
    <input style={styles.input} type="text" value="" />
    <label style={styles.label}>Email</label>
    <input style={styles.input} type="text" value="" />
    <label style={styles.label}>Teléfono</label>
    <input style={styles.input} type="text" value="" />
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
    margin: '60px 0',
  },
  label: {
    display: 'block',
    marginBottom: 10,
  },
  input: {
    border: '1px solid #311A40',
    padding: '8px 5px',
    borderRadius: 20,
    width: '80%',
    marginBottom: 25,
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
