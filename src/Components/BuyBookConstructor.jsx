import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Books from "./BooksName"
const BuyBookConstructor = (props) => {
        
        const [price,SetPrice] = useState(0)
        const Catalog = props.catalog
        const RemoveCard = props.remove
        const count = props.count
        const newCount = props.NewCount
        const PriceObject = props.PriceObject
        console.log(count)
        const onChangeBook = (event, bookId) => {
            const NewCount = parseInt(event.target.value)
            newCount(bookId, NewCount)
        }

         useEffect(() =>{
                const TotalSum = Catalog.reduce((sum, Book) => {
                const BookCount = count[Book.id]
                const TotalBook = Book.price
                return sum + (BookCount * TotalBook)
            },0)
        SetPrice(TotalSum)
    }, [PriceObject,count])
         
    
         useEffect(() => {
                onChangeBook
                localStorage.setItem('BookCounts', JSON.stringify(count))
            },[count] )

        
        const Start = () => {
            
            if (Catalog.length == 0){
                return <p>Нет товаров</p>
            }
            return (Catalog.map((Book) =>{
            const BookCount = count[Book.id]

        return(
        <Link to={`/BookSite/${Book.id}` /* Динамичная ссылка */} key={Book.id}>
        <div className="BasketBookCard">
            
            <div className="Right"> {RemoveCard(Book)}</div>
            
            <div className="BasketImage"> <img src={Book.image} alt="" className="BasketImage"/></div>
            

                <h3 className="BasketNameBook">{Book.name}</h3>
                
                <h4 className="BasketAuthorBook">{Book.author}</h4>
                <h3>{Book.price.toLocaleString('ru-RU')} ₽</h3>
                    <div className="Company">
                    <img src="../../Image/Icon/client-4.png" alt="" /><span className="CompName">Company name</span>
                    </div>
                    <input type="number" className="Count" id="" min={0} value={BookCount} onChange={() => onChangeBook(event,Book.id)} onClick={(e) => {e.preventDefault()}}/>
                    

        </div>
        </Link>)}))} /* Собираю книгу в карточку */
    return(
        <>
        <div className="BookBasket">
        <Start />
        </div>
        <div className="TotalPrice">
            <p>{price} рублей</p>
        </div>
        </>
    )
}
export default BuyBookConstructor