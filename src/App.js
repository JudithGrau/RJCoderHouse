import { NavBar } from "./components/NavBar/NavBar";
import './styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {

  return (
    <>
      <BrowserRouter>

        <NavBar/>

        <Switch>
            <Route exact path="/">
                <ItemListContainer/>
            </Route>
            <Route exact path="/category/:catId">
                <ItemListContainer/>
            </Route>

            <Route exact path="/detail/:itemId">
                <ItemDetailContainer/>
            </Route>

            <Route exact path="/nosotros">
                <h1>Nosotros</h1>
            </Route>

            <Route exact path="/contacto">
                <h1>Contacto</h1>
            </Route>

            <Route exact path="/cart">
                <h1>Carrito - Proximamente</h1>
            </Route>

            {/* <Route path="*">
                    <h1>Error 404</h1>
                </Route> */}

            <Route path="*">
                <Redirect to="/"/>
            </Route>
        </Switch>

      </BrowserRouter>
    </>
    
  );
}

export default App;
