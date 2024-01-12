import { Link, useNavigate } from 'react-router-dom';
import './Header.scss';
import { jwtDecode } from 'jwt-decode';


function Header () {
    

    const navigate = useNavigate();
    const token = localStorage.getItem("jwt");
    let decodedToken = false
    if(!token){
        navigate("/login");
    }
    else {
        
     decodedToken = jwtDecode(token);
    }

    const handleLogout = () => {
        // sortir le token du local storage
        localStorage.removeItem("jwt");
    
        // redirige l'utilisateur vers la page de login
        navigate("/login");
      };

    return(
        <nav>
            <ul className='flex-list'>
                <li><Link to='/'>Accueil</Link></li>
                <li><Link to="/battlepass">Battle Pass</Link></li>
                {decodedToken ? (
                    <>
                    <li><Link to={`/mybattlepass/${decodedToken.data}`}>Mes battle pass</Link></li>
                    <li className="menu-with-submenu"> Bienvenue {decodedToken.data}</li>
                    <input onClick={handleLogout} type="submit" value="Se déconnecter" />
                        
                    
                    </>
                ) : (
                    <li className="menu-with-submenu"><img className='img-user' src="assets/icones/user.png" alt="utilisateur" />
                    <ul className="sub-menu">
                                <li><Link className="menu-link" to="/accountcreate">S'inscrire</Link></li>
                                <li><Link className="menu-link"  to="/login">Se connecter</Link></li>
                            </ul>
                    </li> 
                )}
                 
            </ul>
        </nav>
    )
}

export default Header;