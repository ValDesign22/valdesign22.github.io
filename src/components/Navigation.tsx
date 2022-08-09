import { NavLink } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';

const Navigation = () => {
    const toggleNav = () => {
        const nav = document.getElementById('navigation');
        const menuInput = document.getElementById('menuInput') as HTMLInputElement;
        nav?.classList.toggle('is-open');
        menuInput.checked = !menuInput.checked;
    }

    return (
        <div>
            <HamburgerMenu />
            <div className='navigation' id="navigation">
                <ul>
                    <NavLink to="/" className={nav => nav.isActive ? "isActive" : ""}>
                        <li onClick={toggleNav}>Home</li>
                    </NavLink>
                    <NavLink to="/projects" className={nav => nav.isActive ? "isActive" : ""}>
                        <li onClick={toggleNav}>Projects</li>
                    </NavLink>
                    <NavLink to="/services" className={nav => nav.isActive ? "isActive" : ""}>
                        <li onClick={toggleNav}>Services</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;