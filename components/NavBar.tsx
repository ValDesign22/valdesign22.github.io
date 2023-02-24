import Link from "next/link";
import {useState} from "react";
import ImageStyled from "./ImageStyled";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="left">
                <Link href="/">
                    <p className="logo"><ImageStyled src={"/android-chrome-512x512.png"} alt={"Logo"} id={"logo-valdesign"} /> ValDesign</p>
                </Link>
            </div>
            <div className="right">
                <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                    <span />
                    <span />
                    <span />
                </div>

                <ul className={`links ${isOpen ? "open" : ""}`}>
                    <li className="link">
                        <Link href="/">
                            <p>Accueil</p>
                        </Link>
                    </li>
                    <li className="link">
                        <Link href="/projects">
                            <p>Réalisations</p>
                        </Link>
                    </li>
                    <li className="link">
                        <Link href="/contact">
                            <p>Contact</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}