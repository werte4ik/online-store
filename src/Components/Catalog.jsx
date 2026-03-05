import { Routes, Route } from 'react-router-dom';
import BookSite from "./BookSite"
import Books from "./BooksName"
import Header from './Header';
import Constructor from './Constructor';
import { useState } from 'react';
import WhyChooseUs from './WhyChooseUs';

const Catalog = () => {
    const [search, SetSearch] = useState("")
    const SearchCatalog = Books.filter(book => book.name.toLowerCase().includes(search.toLowerCase()))
    
    const SearchInp = (event) => {
        SetSearch(event.target.value)
    }
    return( 
        <>
        <Header/>
        <WhyChooseUs/>
        <input type="text" placeholder='Найти товары' className='searchInp' onChange={SearchInp}/>
        <h1>Лучшие Книги</h1>
        <div className="Book">
        <Constructor catalog ={SearchCatalog} count="4"/> {/* Рендерит Книги */}
        </div>
        <Routes>   {/* Дает возможность делать ссылки */}
            <Route path ="/BookSite/:id" element={<BookSite/>}/> </Routes> {/* Делаю ссылку на Сайт для отдельной книги */}
        </>
    )
}
export default Catalog