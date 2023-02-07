import React from './componentes/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './componentes/CartContainer/CartContainer';
import ItemCount from './componentes/ItemCount/ItemCount';

function App() {

  return (
          
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer saludo='saludo soy ItemListener Container' />} />
        <Route path='/detalle' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<CartContainer />} />
      </Routes>
      {/* <ItemCount /> */}
      </BrowserRouter>
          
  )
}

export default App
