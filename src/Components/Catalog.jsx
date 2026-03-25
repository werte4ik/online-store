import { Routes, Route } from 'react-router-dom';
import BookSite from "./BookSite"
import Books from "./BooksName"
import Header from './Header';
import Constructor from './Constructor';
import { useState } from 'react';
import WhyChooseUs from './WhyChooseUs';

const Catalog = (props) => {
    const search = props.search
    const SearchInp = props.SetSearch
    const SearchCatalog = Books.filter(book => book.name.toLowerCase().includes(search.toLowerCase()))
    

    const NewMass = props.NewMass
    
    const [showNotification, setShowNotification] = useState(false);

    const message = () => {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 1000);
    }

    return( 
        <>
        <div className='AddProduct' style={{display: showNotification ? 'inline' : 'none'}}>
            <p className='ProductText'>Товар добавлен</p>
        </div>
        
        <WhyChooseUs/>
        
        <h1>Лучшие Книги</h1>
        <div className="Book">
        <Constructor catalog ={SearchCatalog} count="4" onUpdateMass={NewMass} AddProduct = {message}/> {/* Рендерит Книги */}
        </div>
        
        <Routes>   {/* Дает возможность делать ссылки */}
            <Route path ="/BookSite/:id" element={<BookSite/>}/> </Routes> {/* Делаю ссылку на Сайт для отдельной книги */}
        </>
    )
}
export default Catalog