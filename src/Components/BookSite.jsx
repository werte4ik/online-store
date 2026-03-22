import Books from "./BooksName"
import { useNavigate, useParams } from "react-router-dom"
import '../BookSite.css'
import Header from './Header';
import Cars from "./Cars";


const BookSite = (props) => {
    const mass = props.mass
    const NewMass = props.NewMass
    const navigate = useNavigate()
    const TryToFind = useParams() /* Позволяет работать с динамической ссылкой */
    console.log(TryToFind)
const Id = TryToFind.id /* Получаю id книги через ссылку */
const Find = Books.find((Book) => Book.id === parseInt(Id)) ||Cars.find((Book) => Book.id === parseInt(Id))/* Нахожу книгу по айди */
    const IdBooks = JSON.parse(localStorage.getItem('BuyBook')) || []
    const Buy = (BookId) =>{
        IdBooks.push(BookId)
        localStorage.setItem('BuyBook', JSON.stringify(IdBooks)) /* Чтобы потом подтянуть в корзину */
    }
    const Back = () => {
        navigate(-1)
    }
    return(
        <>  
        <Header/>
        <button className="NoBtn" onClick={Back}><i className="fa fa-backward" aria-hidden="true"></i></button>
        <div className="BookFind">
        <img src={`../${Find.image}` /* Ссылка находиться на уровне выше */} alt="" className="ImgBookFind"/>
        <div className="text">
        <h1 className="BookName">{Find.name}</h1>
        <h2>{Find.author}</h2>
        <p>Год Написания: {Find.year}</p>
        
        <h3>Описание</h3>
        <p>{Find.description}</p>
        <div className="PriceBuy">
        <button className="BuyBtn" onClick={() =>Buy(Find.id)}>Купить</button><h1 className="PriceBook">{Find.price.toLocaleString('ru-RU')} Рублей</h1>
        </div>
        </div>

        </div>
        </>
    )
}
export default BookSite