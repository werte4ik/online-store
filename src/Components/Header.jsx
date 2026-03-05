import Logo from "../../Image/image.png"
import { Link } from "react-router-dom"
const Header = () => {
    return(
        <>
        <header>
        <img src={Logo} alt="" className="Logotip" />
        <Link to="/"><p>Главная страница</p></Link>
        <p>Категории</p>
        <p>Заказы</p>
        <p>Пользователь</p>
        <Link to="/BuyBooks"><p>Корзина</p></Link>
        <p></p>
        </header>
        
        
        </>
    )
}
export default Header