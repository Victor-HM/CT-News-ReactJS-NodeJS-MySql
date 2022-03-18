import './styles/App.css';
import './styles/font-awesome.min.css'

import React from 'react'

import { BrowserRouter as Router } from "react-router-dom"
import { AppRoutes } from './routes/AppRoutes';
import StoreProvider from './Context/Provider'

import { Header } from './components/pages/Header'
import { Footer } from './components/pages/Footer';

function App() {

  return (
      <Router>
        <StoreProvider>
          <script src="js/jquery.min.js"></script>
            <script src="js/aos.js"></script>
            <script src='js/bootstrap.min.js'></script>
            <script src="js/owl.carousel.min.js"></script>
            <script src="js/smoothscroll.js"></script>
            <script src="js/custom.js"></script>
          <Header />
          <AppRoutes />
          <Footer />

        </StoreProvider>
      </Router>
  );
}

export default App;
