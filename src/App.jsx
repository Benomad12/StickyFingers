import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() { 
  
  return (
    <div>
          <NavBar/>
          <ItemListContainer greeting={"Welkome To The World Of The Music"} />
    </div>

  )
}

export default App




