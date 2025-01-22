import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Cart from './components/cart/Cart'
import Checkout from './components/checkout/checkout'
import './App.css'
function App() { 
  
  return (
    <div>
          <BrowserRouter>
            <CartProvider>
            <NavBar/>
              <Routes>
                <Route path='/' element={<ItemListContainer greeting={"Welkome To The World Of The Music"} />}/>
                <Route path='/Category/:idCategory' element={<ItemListContainer greeting={"Welkome To The World Of The Music"} />}/>
                <Route path='/detail/:idProduct' element={<ItemDetailContainer/>}/>
                <Route path='/Cart' element={<Cart/>}/>
                <Route path='/Checkout' element={<Checkout/>}/>
              </Routes>
            </CartProvider>
          </BrowserRouter>
    </div>
    // <ItemListContainer greeting={"Welkome To The World Of The Music"} />
    //       <ItemDetailContainer/>
  )
}

export default App




