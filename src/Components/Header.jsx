import Logo from "../../Image/image.png"
import { Link } from "react-router-dom"
import SearchInp from "../Components/Catalog"
import { useState } from "react"
import Books from "./BooksName"

const Header = () => {
   
    return(
        <>
        <header>
        <img src={Logo} alt="" className="Logotip" />
        <Link to="/"><p>Главная страница</p></Link>
        <p>Категории</p>
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