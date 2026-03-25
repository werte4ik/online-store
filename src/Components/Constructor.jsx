import { Link } from "react-router-dom"
const Constructor = (props) => {
        const Bookcount = parseInt(props.count)
        const onUpdateMass = props.onUpdateMass
        const AddProduct = props.AddProduct
        const Buy = (BookId) =>{
            const IdBooks = JSON.parse(localStorage.getItem('BuyBook')) || []
            const NewMassiv = [...IdBooks, BookId ]
            
            const count = JSON.parse(localStorage.getItem('BookCounts'))

            localStorage.setItem('BuyBook', JSON.stringify(NewMassiv))

            const newValue = {...count, [BookId]: (count[BookId]||0)+1}

            localStorage.setItem('BookCounts', JSON.stringify(newValue))
            onUpdateMass()
        }

        const Catalog = props.catalog
        const elements = Catalog.slice(0,Bookcount || 100)
        
        
        const Start = elements.map((Book) => <Link to={`/BookSite/${Book.id}` /* Динамичная ссылка */} key={Book.id}>
        <div className="BookCard">
        <div className="BackImage"> <img src={Book.image} alt="" className="ImgBook"/></div>
        <div className="TextCard">
        <h3 className="NameBook">{Book.name}</h3>
        <h4 className="AuthorBook">{Book.author}</h4>
        <h3>{Book.price.toLocaleString('ru-RU')} ₽</h3>
        <div className="Company">
        <img src="../../Image/Icon/client-4.png" alt="" /><span className="CompName">Company name</span>
        </div>
        <div className="CenterButton">
        <button className="BuyBtn" onClick={(e) =>{ e.preventDefault();Buy(Book.id); AddProduct(e)}}><i className="fa-solid fa fa-shopping-basket" aria-hidden="true"></i> Добавить в корзину</button>
        </div>
        </div>
        </div>
        </Link>) /* Собираю книгу в карточку */
    return(
        <>
        {Start}
        </>
    )
}
        Constructor.defaultProps = {
            count:"100"
        }
export default Constructor
