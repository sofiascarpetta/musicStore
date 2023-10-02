import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContext } from './context/CartContext';
import Cart from './components/Cart'

const App = () => {
  return (
    <CartContext>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<ItemListContainer/>} />
          <Route exact path="/category/:categoryId" element={<ItemListContainer/>} />
          <Route exact path="/item/:productId" element={<ItemDetailContainer/>} />
          <Route exact path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </CartContext>
  )
}
export default App


