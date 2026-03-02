import Logo from "../../Image/image.png"
const Header = () => {
    return(
        <>
        <header>
        <img src={Logo} alt="" className="Logotip" />
        <a href="/"><p>Главная страница</p></a>
        <p>Книги</p>
        <a href="/BuyBooks"><p>Корзина</p></a>
        <p></p>
        </header>
        
        
        </>
    )
}
export default Header