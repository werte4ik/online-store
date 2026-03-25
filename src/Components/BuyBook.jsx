import { useEffect, useState,} from "react"
import Books from "./BooksName"
import BuyBookConstructor from './BuyBookConstructor.jsx';
const BuyBooks = (props) =>{
    const savedCounts = JSON.parse(localStorage.getItem('BookCounts')) || {}
    const [booksRow,SetBooks] = useState(() =>{
        const BookCatalog = JSON.parse(localStorage.getItem('BuyBook'))
        return  BookCatalog || []
    })
    const [count,Setcount] = useState(savedCounts)
    const mass = props.mass
    const NewMass = props.NewMass
   useEffect(() => {
        const savedCounts = JSON.parse(localStorage.getItem('BookCounts')) || {}
        Setcount(savedCounts)
    }, [mass])


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
        <h1>Товары</h1>
        
        <BuyBookConstructor NewCount ={UpdateCount} catalog ={Render} count = {count} PriceObject = {booksRow} remove = {(Book) => <p className = "RemoveBook" onClick={(e) =>{ e.preventDefault();RemoveBuy(Book.id)}} >×</p>}/>
        </>
    )
}
export default BuyBooks