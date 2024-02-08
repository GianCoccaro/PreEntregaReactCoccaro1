import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={ <Home /> } />
              {/* <Route exact path="/item" element={ <ItemDetailContainer /> } /> */}
              <Route exact path="/item/:id" element={<ItemDetailContainer />} />
              <Route exact path="/category/:category" element={<ItemListContainer />} />
              {/* <Route exact path="/products/:id" element={<ItemDetailContainer />} /> */}
              <Route exact path="/products" element={<ItemListContainer />} />
              <Route exact path="/aboutus" element={ <Aboutus /> } />
              <Route exact path="/contact" element={ <Contact /> } />
              <Route exact path="/cart" element={ <Cart />} />
              <Route exact path="/checkout" element={ <Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;