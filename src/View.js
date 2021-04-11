// import logo from './logo.svg';
import './fonts.css'
import './App.css';
import Nav from './components/Nav'
import Title from './components/Title'
import Inputs from './components/SimInputs/Inputs'
import SimInfo from './components/SimInfo/SimInfo'

const View = () => {
  return (
    <>
        <Nav style={styles.menu}></Nav>
        <div style={styles.container}>
          <Title></Title>
          <Inputs></Inputs>
          <div>
            <SimInfo></SimInfo>
          </div>
        </div>       
    </>
  );
}

const styles = {
  container: {
    backgroundColor: '#2B4AAF',
    padding: '60px 5vw'
  },
  menu: {
    position: 'fixed'
  }
}

export default View;
