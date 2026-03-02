

const Constructor = (props) => {
        const IdBooks = JSON.parse(localStorage.getItem('BuyBook')) || []
        const Buy = (BookId) =>{
        IdBooks.push(BookId)
        localStorage.setItem('BuyBook', JSON.stringify(IdBooks))
        }
        const None = props.None
        const Catalog = props.catalog
        const RemoveCard = props.remove
        const Start = Catalog.map((Book) => <a href={`/BookSite/${Book.id}` /* Динамичная ссылка */} key={Book.id}>
        <div className="BookCard">
        {typeof RemoveCard === 'function' ? RemoveCard(Book) : null}
        <img src={Book.image} alt="" className="ImgBook"/>
        <p>{Book.name}</p>
        <p>{Book.author}</p>
        {None !== "none" ? (<button onClick={(e) =>{ e.preventDefault();Buy(Book.id)}}>Купить</button>) : ""}
        </div>
        </a>) /* Собираю книгу в карточку */
    return(
        <>
        {Start}
        </>
    )
}
export default Constructor
