import { NavLink } from "react-router-dom";

function MainNavigation() {
    return (
        <div className="main-nav-wrapper">
            <div className="nav-title">Title</div>
            <div className="nav-links-wrapper">
                <ul>
                    <li>
                        <NavLink to='/' className='nav-link' end>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className='nav-link'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className='nav-link'>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MainNavigation;