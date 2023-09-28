import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="nav-header">
            <Link to="/" className="nav-header__link-home">
                Accueil
            </Link>
            <Link to="/about" className="nav-header__link-about">
                A propos
            </Link>
        </nav>
    );
}

export default Nav;
