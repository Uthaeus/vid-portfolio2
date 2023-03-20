import { NavLink } from "react-router-dom";

function MainNavigation() {
    return (
        <div>
            <div>Title</div>
            <div>
                <ul>
                    <li>
                        <NavLink to='/' end>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' end>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' end>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MainNavigation;