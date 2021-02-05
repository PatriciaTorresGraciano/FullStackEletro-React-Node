import React from 'react';
import "./footer.css";
import pagamento from './formas_pagamento.png';


 
export default function Footer(){
    
    return(

        
    <div>
    
        <div className="nav justify-content-center"> 

    
            <img src= {pagamento} alt="Formas de pagamento"/> 
        </div>
        <p className="col text-white text-center bg-info" id="recodepro">&reg;Recode 2020</p>
    </div>
        
    );
    
}
