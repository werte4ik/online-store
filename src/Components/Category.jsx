import Books from "./BooksName";
import Constructor from "./Constructor"
import { useLocation } from 'react-router-dom';
import Header from "./Header";
import { useState } from "react";
const Category = (props) =>{
    const location = useLocation();
    const categoryBooks = location.state?.categoryBooks;
    const TypeProduct = location.state?.TypeBook;
    const NewMass = props.NewMass

    const Render = categoryBooks.filter((Product) => Product.Genre.toLowerCase().includes(TypeProduct.toLowerCase()))

    const RenLth = Render.length
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
        <div>
            <p>Найдено по вашему запросу: {RenLth}</p>
        </div>
        <div className="Book">
        <Constructor catalog = {Render} onUpdateMass={NewMass} AddProduct = {message} />
        </div>
        
        </>
    )
}
export default Category