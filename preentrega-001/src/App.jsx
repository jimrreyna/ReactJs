import React from './componentes/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {

  return (
    
      <>
      
      <NavBar />
      <ItemListContainer saludo='saludo soy ItemListener Container' />
      
      </>
  
  )
}

export default App
