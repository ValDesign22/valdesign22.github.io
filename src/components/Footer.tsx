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
                        <img src="https://img.icons8.com/glyph-neue/28/f3f3f3/github.png" alt="github" />
                    </a>
                    <a href='https://discord.com/users/650664078649458699' target='_blank' rel='noopener noreferrer' className='footer-icon'>
                        <img src="https://img.icons8.com/material-rounded/28/f3f3f3/discord-new-logo.png" alt='discord' />
                    </a>
                    {/* mail */}
                    <a href='mailto:valdesign.dev@gmail.com' target='_blank' rel='noopener noreferrer' className='footer-icon'>
                        <img src="https://img.icons8.com/material-rounded/28/f3f3f3/mail.png" alt='mail' />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;