import { BrowserRouter,Route, Routes} from 'react-router-dom';
import './App.css'
import Catalog from './Components/Catalog'
import BookSite from './Components/BookSite'
import BuyBooks from './Components/BuyBook';
import Category from './Components/Category';

function App() {
  return (
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Catalog />} />
      <Route path="/BookSite/:id" element={<BookSite />} />
      <Route path="/BuyBooks" element={<BuyBooks />} />
      <Route path="/Category" element={<Category/>} />
      </Routes>
      </BrowserRouter>
  )
}

export default App
