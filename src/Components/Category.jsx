import Books from "./BooksName";
import Constructor from "./Constructor"
import { useLocation } from 'react-router-dom';
import Header from "./Header";
const Category = () =>{
    const location = useLocation();
    const categoryBooks = location.state?.categoryBooks;
    const TypeProduct = location.state?.TypeBook;
    console.log(TypeProduct)
    console.log(categoryBooks)
    const Render = categoryBooks.filter((Product) => Product.Genre.toLowerCase().includes(TypeProduct.toLowerCase()))
    console.log(Render)
    const RenLth = Render.length
    return(
        <>
        <Header/>
        <div>
            <p>Найдено по вашему запросу: {RenLth}</p>
        </div>
        <div className="Book">
        <Constructor catalog = {Render}/>
        </div>
        
        </>
    )
}
export default Category