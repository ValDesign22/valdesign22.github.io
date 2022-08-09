const HamburgerMenu = () => {
    const toggleNav = () => {
        const nav = document.getElementById('navigation');
        nav?.classList.toggle('is-open');
    }

    return (
        <div id="menuToggle">
            <input id="menuInput" type="checkbox" onChange={toggleNav}/>

            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default HamburgerMenu;