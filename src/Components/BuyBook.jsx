import { useEffect, useState,} from "react"
import Books from "./BooksName"
import Header from "./Header"
import BuyBookConstructor from './BuyBookConstructor.jsx';
const BuyBooks = () =>{
    const BookCatalog = JSON.parse(localStorage.getItem('BuyBook'))
    const [price,SetPrice] = useState(0)
    const [booksRow,SetBooks] = useState(() =>{
        const BookCatalog = JSON.parse(localStorage.getItem('BuyBook'))
        return  BookCatalog || []
    })
    console.log(booksRow)
    const RemoveBuy = (BookId) =>{
        const NewBuyBook = booksRow.filter(id => id !== BookId)
        localStorage.setItem('BuyBook', JSON.stringify(NewBuyBook))
        SetBooks(NewBuyBook)
 
    }
    const Render = Books.filter((Book) => booksRow.includes(Book.id))
    function sum_reducer(Book, CurrentBook) { 
        Book[CurrentBook] =  (Book[CurrentBook] || 0) + 1;
        return Book
     }
    const CounrtBOOk = booksRow.reduce(sum_reducer,{})
    console.log(CounrtBOOk)
    console.log(booksRow)
    
    return(
        <>
        <Header/>
        <h1>Товары</h1>
        
        <BuyBookConstructor catalog ={Render} count = {CounrtBOOk} PriceObject = {booksRow} remove = {(Book) => <p className = "RemoveBook" onClick={(e) =>{ e.preventDefault();RemoveBuy(Book.id)}} >×</p>}/>
        {/* <div className="TotalPrice">
        <p>{price} ₽</p>
        </div> */}
        </>
    )
}
export default BuyBooks