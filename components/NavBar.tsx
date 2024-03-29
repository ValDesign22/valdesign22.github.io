import Link from "next/link";
import {useState} from "react";
import ImageStyled from "./ImageStyled";
import { useRouter } from "next/router";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const currentPath = useRouter().pathname;

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
                    <li className={"link " + (currentPath === "/" ? "active" : "")}>
                        <Link href="/" onClick={() => setIsOpen(false)}>
                            <p>Accueil</p>
                        </Link>
                    </li>
                    <li className={"link " + (currentPath === "/projects" ? "active" : "")}>
                        <Link href="/projects" onClick={() => setIsOpen(false)}>
                            <p>Réalisations</p>
                        </Link>
                    </li>
                    <li className={"link " + (currentPath === "/contact" ? "active" : "")}>
                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                            <p>Contact</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}