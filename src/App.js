import { NavBar } from "./components/NavBar/NavBar";
import './styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {

  return (
    <div>
      <NavBar/>
      <ItemListContainer saludo="Bienvenidos a mi Tienda!"/>
    </div>
    
  );
}

export default App;
