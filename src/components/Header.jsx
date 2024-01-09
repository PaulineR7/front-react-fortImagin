import { Link } from 'react-router-dom';
import './Header.scss';


function Header () {
    return(
        <nav>
            <ul className='flex-list'>
                <li><Link to='/'>Accueil</Link></li>
                <li><Link to="/battlepass">Battle Pass</Link></li>
                <li className="menu-with-submenu"><img className='img-user' src="assets/icones/user.png" alt="utilisateur" />
                <ul className="sub-menu">
                            <li><Link className="menu-link" to="/accountcreate">S'inscrire</Link></li>
                            <li><Link className="menu-link"  to="/login">Se connecter</Link></li>
                        </ul>
                </li>
                
            </ul>
        </nav>
    )
}

export default Header;