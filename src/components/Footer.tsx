import { FaGithub, FaDiscord } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='separator'></div>
            <div className='footer-container'>
                <div className='footer-left'>
                    <p className='footer-text'>© 2022 ValRedstone</p>
                </div>
                <div className='footer-right'>
                    <a href='https://github.com/ValRedstone' target='_blank' rel='noopener noreferrer' className='footer-icon'>
                        <FaGithub />
                    </a>
                    <a href='https://discord.com/users/650664078649458699' target='_blank' rel='noopener noreferrer' className='footer-icon'>
                        <FaDiscord />
                    </a>
                    {/* mail */}
                    <a href='mailto:valdesign.dev@gmail.com' target='_blank' rel='noopener noreferrer' className='footer-icon'>
                        <HiMail />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;