import React from 'react';
import {useState, useEffect} from 'react';



function Lojas(){

    const [ lojas, setLojas ] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const resposta = await fetch("http://localhost:5000/lojas")
            const dados = await resposta.json()
            setLojas(dados);
        }
        fetchData();   
    }, []); 
 
                        
        return(
      
        <div className="container-fluid">
            <h1>Nossas lojas</h1>
            <hr/>
       
            <div className="container-fluid"  >             
                <div className="row">
                {lojas.map((item) =>{
                        return(
                    <div className="col" key={item.id}>
                        <h3>{item.cidade}</h3>
                        <p>{item.endereco}</p>
                        <p>{item.complemento}</p>
                        <p>{item.bairro}</p>
                        <p>{item.telefone}</p>
                    </div>
                        )            
                    })}
                </div>
            </div>
        
        </div>
        
    );
}
export default Lojas;