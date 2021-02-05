import { Navbar, Nav } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import logo from './logo.png';
import './Menu.css';

function BaseMenu(props) {
    const { location } = props;
    return (
        <Navbar className="navbar-dark" bg="info" expand="lg" fixed="top" >
            <Navbar.Brand as={Link} to="./">
                <img src = {logo} className="img d-inline-block align-top" width="80" alt="FullStackEletro"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                
                <Nav activeKey={location.pathname} className="ml-auto mr-3">

                    <Nav.Item>
                        <Nav.Link as={Link} href="/Home" to="Home">Início</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link as={Link} href="/Produtos" to="Produtos">Produtos</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link as={Link} href="/Fale_conosco" to="/Contato" >Contatos</Nav.Link>
                    </Nav.Item>
                   
                    <Nav.Item>
                        <Nav.Link as={Link}  href="/Lojas" to="/Lojas">Nossas Lojas</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link as={Link}  href="/Pedidos" to="/Pedidos">Pedidos</Nav.Link>
                    </Nav.Item>

                </Nav>

            </Navbar.Collapse>
        </Navbar>
    )
}

const Menu = withRouter(BaseMenu);

export default Menu;