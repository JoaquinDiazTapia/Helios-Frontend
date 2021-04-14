// import logo from './logo.svg';
import './fonts.css'
import './App.css';
import Nav from './components/Nav'
import Title from './components/Title'
import Inputs from './components/SimInputs/Inputs'
import SimInfo from './components/SimInfo/SimInfo'
import Form from './components/Form'

import useWindowDimensions from './components/GetWindowWidth'

const View = () => {

  const screenWidth = useWindowDimensions().width

  const showForm = () => {
    
  }

  const styles = {
    container: {
      backgroundColor: '#2B4AAF',
      padding: screenWidth >= 1000 ? '120px 5vw' :'100px 5vw',
    },
    maxWidth: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    titleCont: {
      width: screenWidth >= 750 ? '40%' : '100%'
    },
    flexCont: {
      display: 'flex',
      flexDirection: screenWidth >= 1000 ? 'row' : 'column',
      margin: screenWidth >= 1000 ? '50px 0' : '0',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    infoCont: {
      width: screenWidth >= 1000 ? '65%' : 'auto',
    },
    formContainer: {
      margin: '40px 0'
    }
  }

  return (
    <>
        <Nav screenWidth={screenWidth}></Nav>
        <div style={styles.container}>
          <div style={styles.maxWidth}>
            <div style={styles.titleCont}>
              <Title></Title>
            </div>          
            <div style={styles.flexCont}>
              <Inputs screenWidth={screenWidth}></Inputs>
              <div style={styles.infoCont}>
                <SimInfo showForm={showForm} screenWidth={screenWidth}></SimInfo>
              </div>
            </div>
          </div>
        </div>
        <div style={styles.formContainer}>
          <Form></Form>
        </div>   
    </>
  );
}


export default View;
