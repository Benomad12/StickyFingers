import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() { 
  
  return (
    <div>
          <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Welkome To The World Of The Music"} />}/>
            <Route path='/Category/:idCategory' element={<ItemListContainer greeting={"Welkome To The World Of The Music"} />}/>
            <Route path='/detail/:idProduct' element={<ItemDetailContainer/>}/>
          </Routes>
          
          </BrowserRouter>
    </div>
    // <ItemListContainer greeting={"Welkome To The World Of The Music"} />
    //       <ItemDetailContainer/>
  )
}

export default App




