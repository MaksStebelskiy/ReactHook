import "./Header.css";

const Header = () => {
    return(
<div class="header">
      <div className="logo">
        <a href="#default" class="logo">Список продуктів</a>
      </div>

      <div class="header-right">
        <a class="active" href="#home"> Головна </a>
        <a href="#contact"> Контакти </a>
        <a href="#about"> Про сервіс</a>
    </div>
    
</div>
    )
}

export default Header;