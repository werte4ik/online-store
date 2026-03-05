import { useState,} from "react"
import Books from "./BooksName"
import Header from "./Header"
import Constructor from './Constructor';
const BuyBooks = () =>{
    const BookCatalog = JSON.parse(localStorage.getItem('BuyBook'))
    const [booksRow,SetBooks] = useState(() =>{
        const BookCatalog = JSON.parse(localStorage.getItem('BuyBook'))
        if (BookCatalog == []){
           return "Ничего не найдено"
        }
        else return  BookCatalog 
    })
    console.log(BookCatalog)
    const RemoveBuy = (BookId) =>{
        const NewBuyBook = booksRow.filter(id => id !== BookId)
        localStorage.setItem('BuyBook', JSON.stringify(NewBuyBook))
        SetBooks(NewBuyBook)
 
    }
    const Render = Books.filter((Book) => booksRow.includes(Book.id))
    return(
        <>
        <Header/>
        <div className="Book">
        <Constructor catalog ={Render} None = "none" remove = {(Book) => <p className = "RemoveBook" onClick={(e) =>{ e.preventDefault();RemoveBuy(Book.id)}} >×</p>}/>
        </div>
        </>
    )
}
export default BuyBooks