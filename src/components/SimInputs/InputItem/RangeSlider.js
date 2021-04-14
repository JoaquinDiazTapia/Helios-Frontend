import React from 'react';
import { useState, setState, Select } from 'react';

const RangeSlider = () => {

    const minVal = 2000
    const maxVal = 300000

    const [rangeVal, setRangeVal] = useState(minVal);
    
    return (

        <div style={styles.container}>
            <p style={styles.label}>3. Selecciona el valor promedio de tu pago mensual (considera verano e invierno).</p>
            <h4>${ rangeVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") }</h4>
            <input
                style={styles.range}
                type="range"
                min={minVal}
                max={maxVal}
                onChange={ (event) => setRangeVal(event.target.value)}>
            </input>
            <div style={styles.rangeContainer}>
                <p style={styles.rangeValue}>${minVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
                <p style={styles.rangeValue}>${maxVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} <br/> o más</p>
            </div>       
        </div>     
    )
}

const styles = {
    container: {
        marginBottom: 15
    },
    label: {
        margin: '0 0 10px 0'
    },
    range: {
        width: '100%',
        border: '1px solid #2B4AAF',
        padding: '8px 5px',
        backgroundColor: '#00F9A8',
        borderRadius: 20,
        color: '#2B4AAF',
        fontSize: '0.8rem',
        fontStyle: 'italic',
        // marginBottom: 10
    },
    rangeContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rangeValue: {
        marginTop: 10,
        fontSize: '0.9rem'
    }
}

export default RangeSlider
