import Logo from "../../Image/image.png"
import { Link } from "react-router-dom"
import SearchInp from "../Components/Catalog"
import { useNavigate } from 'react-router-dom';
import Books from "./BooksName"
import Cars from "./Cars";

const Header = () => {
       const navigate = useNavigate();
   const CategoryClick = (ProductCategory, Type) => {
    navigate('/category',{
        state:{
            categoryBooks: ProductCategory,
            TypeBook: Type  
        }
    });
   }
    return(
        <>
        <header>
        <img src={Logo} alt="" className="Logotip" />
        <Link to="/"><p>Главная страница</p></Link>
        <div className="CategoryText">
        <p className="CategoryText">Категории</p>
            <div className="DropDownText">
                <ul>
                    <li onClick={() =>CategoryClick(Books, "Book")}>Книги</li>
                    <li onClick={() =>CategoryClick(Cars,"Car")}>Машины</li>
                </ul>
            </div>
        
        </div>
        <input type="search" placeholder='Найти товары' className='searchInp' onInput={SearchInp}/>
        <p>Заказы</p>
        <p>Пользователь</p>
        <Link to="/BuyBooks"><p>Корзина</p></Link>
        <p></p>
        </header>
        
        
        </>
    )
}
export default Header