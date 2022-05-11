import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation />
            <h1 className='homeMain'>Hey, I'm ValRedstone.</h1>
            <h3 className='myDescription'>I'm a 15 year old french developer. Currently learning ReactJS.</h3>

            <h3 className='myDescription'>My Skills</h3>
            <ul className='skills grid-cols-3 sm:grid-cols-4'>
                <li className='skill'>
                    <span className='icon'>
                        <img src='https://img.icons8.com/small/24/f3f3f3/nodejs.png' alt='NodeJS' />
                        <span className='skillName'> NodeJS</span>
                    </span>
                </li>
                <li className='skill'>
                    <span className='icon'>
                        <img src='https://img.icons8.com/small/24/f3f3f3/react.png' alt='ReactJS' />
                        <span className='skillName'> ReactJS</span>
                    </span>
                </li>
                <li className='skill'>
                    <span className='icon'>
                        <img src='https://img.icons8.com/small/24/f3f3f3/html-5.png' alt='HTML5' />
                        <span className='skillName'> HTML5</span>
                    </span>
                </li>
                <li className='skill'>
                    <span className='icon'>
                        <img src='https://img.icons8.com/material/24/f3f3f3/css3.png' alt='CSS3' />
                        <span className='skillName'> CSS3</span>
                    </span>
                </li>
                <li className='skill'>
                    <span className='icon'>
                        <img src='https://img.icons8.com/small/24/f3f3f3/js.png' alt='JavaScript' />
                        <span className='skillName'> JavaScript</span>
                    </span>
                </li>
                <li className='skill'>
                    <span className='icon'>
                        <img src='https://img.icons8.com/small/24/f3f3f3/git.png' alt='Git' />
                        <span className='skillName'> Git</span>
                    </span>
                </li>
                <li className='skill'>
                    <span className='icon'>
                        <img src='https://img.icons8.com/material/24/f3f3f3/typescript.png' alt='Typescript' />
                        <span className='skillName'> Typescript</span>
                    </span>
                </li>
                <li className='skill'>
                    <span className='icon'>
                        <img src='https://img.icons8.com/small/24/f3f3f3/mysql.png' alt='MySQL' />
                        <span className='skillName'> MySQL</span>
                    </span>
                </li>
            </ul>
            <Footer />
        </div>
    );
};

export default Home;