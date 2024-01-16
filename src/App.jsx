import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Home from './components/Home';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Aboutme from './components/Aboutme';
import ItemCount from "./components/ItemCount";

function App() {

  return (
    <>
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/item" element={ <ItemDetailContainer /> } />
          <Route exact path="/item/:id" element={ <ItemDetailContainer /> } />
          <Route exact path="/categorie/:categorie" element={ <ItemListContainer /> } />
          <Route exact path="/products/:id" element={ <ItemDetailContainer /> } />
          <Route exact path="/products" element={<ItemListContainer />} />
          <Route exact path="/contact" element={ <Contact /> } />
          <Route exact path="/aboutme" element={ <Aboutme /> } />
          <Route exact path="/cart" element={ <Cart />} />
          <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada ", quantity)} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
