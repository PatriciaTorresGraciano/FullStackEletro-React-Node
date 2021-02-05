import { useState, useEffect } from 'react';
import { Form, Button} from 'react-bootstrap';

export default function Pedidos() {

    const [pedidos, setPedidos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [render, setRender] = useState(false);
    const [elementos, setElementos] = useState(false);
    const [ produtos, setProdutos ] = useState([]);


    useEffect(() => {
        async function fetchData(){
            const resposta = await fetch("http://localhost:5000/produtos")
            const dados = await resposta.json()
            setProdutos(dados);
        }
        fetchData();   
    }, []);


    useEffect(() => {
        async function fetchData(){
            const url = "http://localhost:5000/categorias";
            const response = await fetch(url);
            setCategorias(await response.json());
        }fetchData();    
    }, [render]);
    
    useEffect(() => {
        async function fetchData(){
            const url = "http://localhost:5000/pedidos";
            const response = await fetch(url);
            setPedidos(await response.json());
        }fetchData();    
    }, [render]);


    

    async function controleEnvio(event) {
        event.preventDefault();
        let formData = new FormData(event.target);
        const url = "http://localhost:5000/pedidos";

        fetch(url, {
            method: "POST",
            body: formData
        }).then((response) => response.json()).then((dados) => {
            setRender(!render);
            setElementos(dados);
            setTimeout(() => {
                setElementos(false)
              }, 3000);
            
        });
    } 

    return (
        
        <div>
            <title>Faça seu Pedido</title>
            <h1>Cadastrar pedidos</h1>
            <hr/>

            <div className="col-lg-8 mx-auto">
                <Form onSubmit={controleEnvio}>
                    <Form.Group>
                        <Form.Label>Nome do cliente</Form.Label>
                        <Form.Control type="text" name="nome_cliente" id="nome_cliente" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Endereço:</Form.Label>
                        <Form.Control type="text" name="endereço" id="endereço" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Telefone:</Form.Label>
                        <Form.Control type="text" name="telefone" id="telefone" />
                    </Form.Group>
                        <Form.Group >
                            <Form.Label >Categoria do Produto:</Form.Label><br/>
                                <select className="col-lg" name="categoria_fk" id="categoria_fk">
                                {categorias.map((itemCad) =>{
                                return(
                                <option id="categoria_fk" key={itemCad.id} name="categoria_fk" value={itemCad.id}>{itemCad.nome}</option>
                                        )            
                                })}
                                </select><br/><br/>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label >Nome do Produto:</Form.Label><br/>
                                <select className="col-lg" name="produto_fk" id="produto_fk">
                                {produtos.map((item) =>{
                                        return(
                                            <option className="celula" key={item.id} value={item.id} name="produto_fk" id="produto_fk">{item.descricao}</option>
                                        )                                  
                                })}
                                </select><br/><br/>
                        </Form.Group>
           
                    <Form.Group>
                        <Form.Label>Valor Unitário:</Form.Label>
                        <Form.Control type="text" name="valor_unitario" id="valor_unitario"  />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Quantidade:</Form.Label>
                        <Form.Control type="number" name="quantidade" id="quantidade" />
                    </Form.Group>
            

                    <Button className="col-lg" variant="info" name='concluir' type="submit">
                        Concluir Pedido
                    </Button><br/><br/>
                </Form>
                { 
                    elementos && <div className="alert alert-success mx-auto mt-4 w-75" role="alert">
                    Obrigada por seu pedido!
                    </div>
                }

                <div className="col-lg-8 mx-auto">
                    <div>
                        <div>
                            {pedidos.map((item) =>{
                                    return(
                        
                                        <div className="col-lg-12" key={item.id}>
                                            <div>
                                                <hr/>
                                                <hr/>
                                                Sr(a) {item.nome_cliente}, o valor total da sua compra foi de: R$ {item.valor_total}
                                                <hr/>
                                                <hr/>
                                            </div><br/><br/>
                                        </div>
                                    )            
                            })}
                        </div><br/><br/>
                    </div>
                </div>    
            </div>
        </div>
        
    );
}
