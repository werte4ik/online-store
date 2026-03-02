import Books from "./BooksName"
import { useParams } from "react-router-dom"
import '../BookSite.css'
import Header from './Header';


const BookSite = () => {
    const TryToFind = useParams() /* Позволяет работать с динамической ссылкой */
const Id = TryToFind.id /* Получаю id книги через ссылку */
const BookFind = Books.find((Book) => Book.id === parseInt(Id)) /* Нахожу книгу по айди */
    const IdBooks = JSON.parse(localStorage.getItem('BuyBook')) || []
    const Buy = (BookId) =>{
        IdBooks.push(BookId)
        localStorage.setItem('BuyBook', JSON.stringify(IdBooks)) /* Чтобы потом подтянуть в корзину */
    return
    }
    return(
        <>  
        <Header/>
        <div className="BookFind">
        <img src={`../${BookFind.image}` /* Ссылка находиться на уроовне выше */} alt="" className="ImgBookFind"/>
        <div className="text">
        <h1 className="BookName">{BookFind.name}</h1>
        <h2>{BookFind.author}</h2>
        <p>Год Написания: {BookFind.year}</p>
        
        <h3>Описание</h3>
        <p>{BookFind.description}</p>
        <div className="PriceBuy">
        <button className="BuyBtn" onClick={() =>Buy(BookFind.id)}>Купить</button><h1 className="PriceBook">{BookFind.price} Рублей</h1>
        </div>
        </div>

        </div>
        </>
    )
}
export default BookSite