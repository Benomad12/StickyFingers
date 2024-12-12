import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() { 
  
  return (
    <div>
          <NavBar/>
          <ItemListContainer greeting={"Welkome"} />
    </div>

  )
}

export default App




