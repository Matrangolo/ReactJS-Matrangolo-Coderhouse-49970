import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'


function App() {


  return (
    <>
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a Drop! disculpá las molestias, estamos trabajando para mostrarte lo mejor en gaming💪🕹️🎮"} />
    </div>
    </>
  )
}

export default App
