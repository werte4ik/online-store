import { BrowserRouter,Route, Routes} from 'react-router-dom';
import './App.css'
import Catalog from './Components/Catalog'
import BookSite from './Components/BookSite'
import BuyBooks from './Components/BuyBook';
import Category from './Components/Category';
import { useState } from 'react';

function App() {
    const [mass, setMass] = useState(() => {
       const Firstmass =  localStorage.getItem('BookCounts')
       return Firstmass? JSON.parse(Firstmass) : {}
    })  
  console.log(mass)
    const NewMass = () =>{
        setMass(JSON.parse(localStorage.getItem('BookCounts')))
    }
  return (
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Catalog mass = {mass} NewMass={NewMass} />} />
      <Route path="/BookSite/:id" element={<BookSite mass = {mass} NewMass={NewMass}/>} />
      <Route path="/BuyBooks" element={<BuyBooks mass = {mass} NewMass={NewMass}/>} />
      <Route path="/Category" element={<Category mass = {mass} NewMass={NewMass}/>} />
      </Routes>
      </BrowserRouter>
  )
}

export default App
