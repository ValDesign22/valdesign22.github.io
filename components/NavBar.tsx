import Link from "next/link";
import {useState} from "react";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="left">
                <Link href="/">
                    <p className="logo">ValDesign</p>
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
                            <p>Home</p>
                            <span></span>
                        </Link>
                    </li>
                    <li className="link">
                        <Link href="/about">
                            <p>About</p>
                            <span></span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}