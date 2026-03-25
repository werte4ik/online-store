import { BrowserRouter,Outlet,Route, Routes} from 'react-router-dom';
import './App.css'
import Catalog from './Components/Catalog'
import BookSite from './Components/BookSite'
import BuyBooks from './Components/BuyBook';
import Category from './Components/Category';
import { useState } from 'react';
import Header from './Components/Header';

function App() {
    const [mass, setMass] = useState(() => {
       const Firstmass =  localStorage.getItem('BookCounts')
       return Firstmass? JSON.parse(Firstmass) : {}
    })  
    const NewMass = () =>{
        setMass(JSON.parse(localStorage.getItem('BookCounts')))
    }
    const [search, SetSearch] = useState("")
    const SearchInp = (event) => {
        SetSearch(event.target.value)
    }
  return (
      <BrowserRouter>
      <Header mass = {mass} Search = {SearchInp}/>
      <Outlet/>
      <Routes>
        <Route/>
      <Route path="/" element={<Catalog  NewMass={NewMass} search = {search} SetSearch = {SearchInp}/>} />
      <Route path="/BookSite/:id" element={<BookSite/>} />
      <Route path="/BuyBooks" element={<BuyBooks NewMass={NewMass}/>} />
      <Route path="/Category" element={<Category NewMass={NewMass}/>} />
      </Routes>
      </BrowserRouter>
  )
}

export default App
