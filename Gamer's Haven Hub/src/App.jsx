import './App.css'

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/navBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <div className='cuerpo'>
        <Routes>
          <Route path='/' element={<ItemListContainer greetings="Todos los productos" />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greetings="Productos filtrados por categoria"/>}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
