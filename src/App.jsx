import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>} />
        <Route exact path="/category/:categoryId" element={<ItemListContainer/>} />
        <Route exact path="/item/:productId" element={<ItemDetailContainer/>} />
      </Routes>
      {/* <ItemDetailContainer/> */}
    </BrowserRouter>
  )
}
export default App


