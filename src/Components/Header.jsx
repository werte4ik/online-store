import Logo from "../../Image/image.png"
import { Link } from "react-router-dom"
import SearchInp from "../Components/Catalog"
import { useNavigate } from 'react-router-dom';
import Books from "./BooksName"
import Cars from "./Cars";
import { useEffect, useState } from "react";
const Header = (props) => {
    const [Len,SetLen] = useState(0)
    const mass = props.mass ? props.mass : 0
    const NewMass = props.NewMass
       const navigate = useNavigate();
   const CategoryClick = (ProductCategory, Type) => {
    navigate('/category',{
        state:{
            categoryBooks: ProductCategory,
            TypeBook: Type  
        }
    });
   }
         useEffect(() => {  
    const store = mass
    const count = Object.values(store).reduce((accumulator, value) => { return accumulator + value; }, 0)
    console.log("Store",count)
    console.log("store.length",Object.keys(store).length)
            SetLen(count)
            },[mass] )
    return(
        <>
        <header>
        <img src={Logo} alt="" className="Logotip" />
        <Link to="/"><p>Главная страница</p></Link>
        <div className="CategoryText">
        <p className="CategoryText">Категории</p>
            <div className="DropDownText">
                <ul>
                    <li onClick={() =>CategoryClick(Books, "Роман")}>Роман</li>
                    <li onClick={() =>CategoryClick(Books, "Поэма")}>Поэма</li>
                    <li onClick={() =>CategoryClick(Books, "Повесть")}>Повесть</li>
                    <li onClick={() =>CategoryClick(Books, "Комедия")}>Комедия</li>
                </ul>
            </div>
        
        </div>
        {/* <input type="search" placeholder='Найти товары' className='searchInp' onInput={SearchInp}/> */}
        <p>Заказы</p>
        <p>Пользователь</p>
        <div className="Headertxt">
        <Link to="/BuyBooks"><p>Корзина</p><i className="fa-solid fa fa-shopping-basket" aria-hidden="true"></i>{Len}</Link></div>
        <p></p>
        </header>
        
        
        </>
    )
}
export default Header