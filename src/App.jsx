import React from 'react'
import Footer from './Components/Footer'
import './Components/style.css'
import './Components/i-map.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'jquery-ui-dist/jquery-ui.css'; // jQuery UI Styles
import Header from './Components/Header';
import Main from './Components/Main';
// AIzaSyAaWkVgeiSBEUqfpGyjzSw8lBXgHZ_MT-c
function App() {
  return (
    <>
    <Header/>
    <Main/>
    <Footer/>
    </>
    
  )
}

export default App