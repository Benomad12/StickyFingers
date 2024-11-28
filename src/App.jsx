import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() { 
  
  return (
    <div>
          <NavBar/>
          <ItemListContainer greeting={"me partio el cerebro esto"}/>
    </div>

  )
}

export default App




