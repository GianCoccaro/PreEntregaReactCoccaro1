import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route exact path="/" element={ <ItemListContainer greeting={"Todos los productos"} /> } />
            <Route exact path="/category/:categoryId" element={ <ItemListContainer greeting={"Productos por categoría"} /> } />
            <Route exact path="/item/:itemId" element={ <ItemDetailContainer /> } />
            <Route exact path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;