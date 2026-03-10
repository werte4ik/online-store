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
    const TotalPrice = () => {
        const TotalBook = Render.map((Book) => parseInt(Book.price))
        const sum = TotalBook.reduce(function (currentSum,currentNumber) {
            return currentSum + currentNumber
        },0)
        SetPrice(sum)
        console.log(TotalBook)
    }
    useEffect(() =>{
        TotalPrice()
    }, [booksRow])
    return(
        <>
        <Header/>
        <h1>Товары</h1>
        <div className="Book">
        <BuyBookConstructor catalog ={Render} remove = {(Book) => <p className = "RemoveBook" onClick={(e) =>{ e.preventDefault();RemoveBuy(Book.id)}} >×</p>}/>
        </div>
        <div className="TotalPrice">
        <p>{price} ₽</p>
        </div>
        </>
    )
}
export default BuyBooks