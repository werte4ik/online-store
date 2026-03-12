import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Books from "./BooksName"
const BuyBookConstructor = (props) => {
        const [price,SetPrice] = useState(0)
        const Catalog = props.catalog
        const RemoveCard = props.remove
        const count = props.count
        const PriceObject = props.PriceObject
        
         useEffect(() =>{
         const TotalSum = Catalog.reduce((sum, Book) => {
                const BookCount = count[Book.id]
                const TotalBook = parseInt(Book.price)
                return sum + (BookCount * TotalBook)
            },0)
        SetPrice(TotalSum)
    }, [PriceObject,count])
        
        
        const Start = () => {
            
            if (Catalog.length == 0){
                return <p>Нет товаров</p>
            }
            return (Catalog.map((Book) =>{
            const BookCount = count[Book.id]

        return(
        <Link to={`/BookSite/${Book.id}` /* Динамичная ссылка */} key={Book.id}>
        <div className="BookCard">
            <div className="Right"> {RemoveCard(Book)}</div>
            <div className="BackImage"> <img src={Book.image} alt="" className="ImgBook"/></div>
            <div className="TextCard">
                <h3 className="NameBook">{Book.name}</h3>
                <h4 className="AuthorBook">{Book.author}</h4>
                <h3>{Book.price} ₽</h3>
                    <div className="Company">
                    <img src="../../Image/Icon/client-4.png" alt="" /><span className="CompName">Company name</span>
                    <input type="number" className="Count" id="" min={0} value={BookCount}  onClick={(e) => e.preventDefault()}/>
                    </div>
            </div>
        </div>
        </Link>)}))} /* Собираю книгу в карточку */
    return(
        <>
        <div className="Book">
        <Start />
        </div>
        <div className="TotalPrice">
            <p>{price} рублей</p>
        </div>
        </>
    )
}
export default BuyBookConstructor