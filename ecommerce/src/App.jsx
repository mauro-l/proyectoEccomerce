
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./componets/Navbar/NavBar"
import FixedPanel from "./componets/FixedPanel/FixedPanel"
import Footer from "./componets/Footer/Footer"
import Home from "./componets/Home/Home"
import WishList from "./componets/WishList/WishList"
import ItemListContainer from "./componets/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer';
import Cart from './componets/Cart/Cart'
import Checkout from './componets/Cart/Checkout/Checkout';

function App() {

  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<ItemListContainer />} />
          <Route path='/shop/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/:nameId/p/:productId' element={<ItemDetailContainer />} />
          <Route path='/fav' element={<WishList />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/cart/checkout' element={<Checkout />} />
        </Routes>
        <FixedPanel/>
        <Footer />
    </BrowserRouter>
  )
}

export default App
