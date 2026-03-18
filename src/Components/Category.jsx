import Books from "./BooksName";
import Constructor from "./Constructor"
import { useLocation } from 'react-router-dom';
import Header from "./Header";
const Category = () =>{
    const location = useLocation();
    const categoryBooks = location.state?.categoryBooks;
    const TypeProduct = location.state?.TypeBook;
    const Render = categoryBooks.filter((Product) => Product.type == TypeProduct)
    return(
        <>
        <Header/>
        <div className="Book">
        <Constructor catalog = {Render}/>
        </div>
        
        </>
    )
}
export default Category