import { Link } from "react-router-dom";
import HeaderSVG from "../../assets/images/header.svg";
import "./SiteHeader.scss";

function Header() {
    return (
        <header className="header">
            <Link to="/"><img className="header__background" src={HeaderSVG} alt="Header" /></Link>
        </header>
    );
}

export default Header;
