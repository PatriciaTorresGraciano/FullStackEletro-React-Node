import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Contatos from './Pages/Contato';
import Lojas from './Pages/Lojas';
import PageProdutos from './Pages/Produtos';
import PagePedidos from './Pages/Pedidos';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/Home" component={Home}/>
            <Route exact path="/produtos" component={PageProdutos} />
            <Route exact path="/contato" component={Contatos} />
            <Route exact path="/lojas" component={Lojas} />
            <Route exact path="/Pedidos" component={PagePedidos} />
        </Switch>
    );
}

export default Routes;