import { Link } from "react-router-dom"
const Constructor = (props) => {
        const Bookcount = parseInt(props.count)
        Constructor.defaultProps = {
            count:"100"
        }
        const Buy = (BookId) =>{
        const IdBooks = JSON.parse(localStorage.getItem('BuyBook')) || []
        const NewMassiv = [...IdBooks, BookId ]
        localStorage.setItem('BuyBook', JSON.stringify(NewMassiv))
        }
        const None = props.None
        const Catalog = props.catalog
        const elements = Catalog.slice(0,Bookcount)
        const RemoveCard = props.remove
        const Start = elements.map((Book) => <Link to={`/BookSite/${Book.id}` /* Динамичная ссылка */} key={Book.id}>
        <div className="BookCard">
        {typeof RemoveCard === 'function' ? <div className="Right"> {RemoveCard(Book)}</div> : null}
        <div className="BackImage"> <img src={Book.image} alt="" className="ImgBook"/></div>
        <p>{Book.name}</p>
        <p>{Book.author}</p>
        {None !== "none" ? (<button onClick={(e) =>{ e.preventDefault();Buy(Book.id)}}>Купить</button>) : ""}
        </div>
        </Link>) /* Собираю книгу в карточку */
    return(
        <>
        {Start}
        </>
    )
}
export default Constructor
