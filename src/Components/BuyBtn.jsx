    const BuyBtn=()=>{
    const IdBooks = JSON.parse(localStorage.getItem('BuyBook')) || []
    const Buy = (BookId) =>{
        IdBooks.push(BookId)
        localStorage.setItem('BuyBook', JSON.stringify(IdBooks))
    }
}
export default BuyBtn