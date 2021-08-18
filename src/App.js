import { NavBar } from "./components/NavBar/NavBar";
import './styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer/>
    </>
    
  );
}

export default App;
