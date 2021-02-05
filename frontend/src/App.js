import React from 'react';
import './App.css';
import Menu from './Pages/Componentes/Menu/Menu';
import Footer from './Pages/Componentes/Rodape/Footer';

import Rotas from './Rotas';
import {BrowserRouter} from 'react-router-dom';




function App() {
    
    return(
        
        <BrowserRouter>
            <div>
                <Menu />
                <Rotas />
                <Footer/>
            </div>
        </BrowserRouter>
            
    );
   
}
export default App;
