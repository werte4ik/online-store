import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
const BuyBookConstructor = (props) => {
        const Catalog = props.catalog
        const RemoveCard = props.remove

        // const [count,SetCount] = useState(1)
        // const TotalCount = (e) => {
        //     const NewCount = parseInt(e.target.value) 
        //     SetCount(NewCount)
        // }
        //     useEffect(() =>{
        //         TotalCount() 
        //     }, [count])
        // const BookCount = Catalog.reduce(function (currentBook, BookCount) {
        //     currentBook[BookCount.id] = (currentBook[BookCount.id] || 0) + 1
        //     return currentBook
        // }, {})
        // console.log(BookCount)
        const Start = Catalog.map((Book) =>{
             
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
                    {/* <input type="number" className="Count" id="" min={0} value={count} onChange={(e)=>TotalCount( e.target.value)} onClick={(e) => e.preventDefault()}/> */}
                    </div>
            </div>
        </div>
        </Link>)}) /* Собираю книгу в карточку */
    return(
        <>
        {Start}
        </>
    )
}
export default BuyBookConstructor