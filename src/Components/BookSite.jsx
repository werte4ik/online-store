import Books from "./BooksName"
import { useNavigate, useParams } from "react-router-dom"
import '../BookSite.css'
import Cars from "./Cars";


const BookSite = (props) => {
    const navigate = useNavigate()
    const TryToFind = useParams() /* Позволяет работать с динамической ссылкой */
    const onUpdateMass = props.NewMass
    console.log(TryToFind)
const Id = TryToFind.id /* Получаю id книги через ссылку */
const Find = Books.find((Book) => Book.id === parseInt(Id)) ||Cars.find((Book) => Book.id === parseInt(Id))/* Нахожу книгу по айди */
    const IdBooks = JSON.parse(localStorage.getItem('BuyBook')) || []
        const Buy = (BookId) =>{
            const IdBooks = JSON.parse(localStorage.getItem('BuyBook')) || []
            const NewMassiv = [...IdBooks, BookId ]
            
            const count = JSON.parse(localStorage.getItem('BookCounts'))

            localStorage.setItem('BuyBook', JSON.stringify(NewMassiv))

            const newValue = {...count, [BookId]: (count[BookId]||0)+1}

            localStorage.setItem('BookCounts', JSON.stringify(newValue))
            onUpdateMass()
        }
    const Back = () => {
        navigate(-1)
    }
    return(
        <>  
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