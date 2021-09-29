import { NavBar } from "./components/NavBar/NavBar";
import './styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { About } from './components/About/About';
import { CartProvider } from "./context/CartContext";
import { CartScreen } from "./components/CartScreen/CartScreen";
import { UIContextProvider } from "./context/UIContext";
import { Checkout } from "./components/Checkout/Checkout";

function App() {

  let about = 'Tienda Anime es una empresa de venta de Remeras y Buzos estampados con personajes de animé.'

  return (
    <>
      <UIContextProvider>
        <CartProvider>
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
                    <About greeting={about} />    
                </Route>

                <Route exact path="/contacto">
                    <h1>Contacto</h1>
                </Route>

                <Route exact path="/cart">
                  <CartScreen/>
                </Route>

                <Route exact path="/checkout">
                  <Checkout/>
                </Route>

                <Route path="*">
                    <Redirect to="/"/>
                </Route>
            </Switch>

          </BrowserRouter>
        </CartProvider>
      </UIContextProvider>
      
    </>
    
  );
}

export default App;
