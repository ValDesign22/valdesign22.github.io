import Link from "next/link";
import {BsGithub} from "react-icons/bs";
import {SiGmail} from "react-icons/si";

export default function Footer() {
    return (
        <footer>
            <div className="socials">
                <div className="social">
                    <Link href={"https://github.com/ValDesign22"} target="_blank">
                        <BsGithub />
                        <span className="tooltip">Github</span>
                    </Link>
                </div>
                <div className="social">
                    <Link href={"mailto:valdesign.dev@gmail.com"} target="_blank">
                        <SiGmail />
                        <span className="tooltip">Email</span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}