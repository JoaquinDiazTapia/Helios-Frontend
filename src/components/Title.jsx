import React from 'react'

const Title = () => (
  <div>
    <h2 style={styles.title}>
      Súmate al cambio...
      <br />
      {' '}
      Simula tu ahorro.
    </h2>
    <p style={styles.subtitle}>
      *Disponible solo para casas particulares
      {' '}
      <br />
      <span style={styles.subtitleSpan}>
        (Si necesitas un sistema más complejo como off grid, baterías, etc,
        contáctanos directamente a contacto@helios.cl o llamando al +569 22223344)
      </span>
    </p>
  </div>
)

const styles = {
  title: {
    color: '#00F9A8',
    fontWeight: '600',
    fontSize: '2.3rem',
    marginTop: 0,
  },
  subtitle: {
    color: '#fff',
    fontStyle: 'italic',
    fontWeight: '700',
    fontSize: '0.9rem',
  },
  subtitleSpan: {
    fontWeight: '300',
  },
}

export default Title
