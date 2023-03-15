import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <nav>
                <nav>
                    <NavLink to="/Home"><button onClick = "Home" class = "button"> Home </button></NavLink>
                    <NavLink to="/Login"><button onClick = "#Login" class = "button"> Login / Register </button></NavLink>
                    {/* <NavLink to="/Register"><button onClick = "#Register" class = "button"> Register </button></NavLink> */}
                    <NavLink to="/Userdetails"><button onClick = "#Userdetails" class = "button"> User Details </button></NavLink>
                </nav>
            </nav>
        </nav>
    )
}

export default NavBar;