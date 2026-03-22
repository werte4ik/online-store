import { useEffect, useState,} from "react"
import Books from "./BooksName"
import Header from "./Header"
import BuyBookConstructor from './BuyBookConstructor.jsx';
import Cars from "./Cars.jsx";
const BuyBooks = (props) =>{
    const savedCounts = JSON.parse(localStorage.getItem('BookCounts')) || {}
    const [booksRow,SetBooks] = useState(() =>{
        const BookCatalog = JSON.parse(localStorage.getItem('BuyBook'))
        return  BookCatalog || []
    })
        function sum_reducer(Book, CurrentBook) { 
        Book[CurrentBook] =  (Book[CurrentBook] || 0) + 1;
        return Book
     }
    const CounrtBOOk = booksRow.reduce(sum_reducer,{})
    const [count,Setcount] = useState(savedCounts)
    const mass = props.mass
    const NewMass = props.NewMass
   useEffect(() => {
        const savedCounts = JSON.parse(localStorage.getItem('BookCounts')) || {}
        Setcount(savedCounts)
    }, [mass])

    // console.log("count: ", count)
    const UpdateCount = (key,value) => {
        const NewCount = {...count, [key]: value}
        Setcount(NewCount)
        localStorage.setItem('BookCounts', JSON.stringify(NewCount))
        NewMass()
    }
    const RemoveBuy = (BookId) =>{
        const NewBuyBook = booksRow.filter(id => id !== BookId)
        localStorage.setItem('BuyBook', JSON.stringify(NewBuyBook))
        SetBooks(NewBuyBook)
        const NewCounts = {...savedCounts}
        delete NewCounts[BookId]
        localStorage.setItem('BookCounts', JSON.stringify(NewCounts))
        NewMass()
    }
    const Render = Books.filter((Book) => booksRow.includes(Book.id))
    return(
        <>
        <Header mass = {mass} NewMass={NewMass}/>
        <h1>Товары</h1>
        
        <BuyBookConstructor mass = {mass} NewMass = {NewMass} NewCount ={UpdateCount} catalog ={Render} count = {count} PriceObject = {booksRow} remove = {(Book) => <p className = "RemoveBook" onClick={(e) =>{ e.preventDefault();RemoveBuy(Book.id)}} >×</p>}/>
        {/* <div className="TotalPrice">
        <p>{price} ₽</p>
        </div> */}
        </>
    )
}
export default BuyBooks