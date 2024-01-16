import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
// import Contact from './components/Contact';
// import Cart from './components/Cart';
// import Aboutme from './components/Aboutme';
// import ItemCount from "./components/ItemCount";

function App() {

  return (
    <>
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route exact path="/" element={ <ItemListContainer /> } />
          <Route exact path="/category/:categoryId" element={ <ItemListContainer /> } />
          <Route exact path="/item/:itemId" element={ <ItemDetailContainer /> } />
          <Route exact path="*" element={<h1>404 NOT FOUND</h1>} />
          
          {/* <Route exact path="/item" element={ <ItemDetailContainer /> } />
          <Route exact path="/products/:id" element={ <ItemDetailContainer /> } />
          <Route exact path="/products" element={<ItemListContainer />} />
          <Route exact path="/contact" element={ <Contact /> } />
          <Route exact path="/aboutme" element={ <Aboutme /> } />
          <Route exact path="/cart" element={ <Cart />} />
          <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada ", quantity)} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
