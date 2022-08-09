import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation />
            <h1 className='homeMain'>Hey, I'm Valentin.</h1>
            <h3 className='mainDesc'>I'm a 15 year old french developer. Currently learning ReactJS.</h3>

            <h3 className='mainTitle'>My Skills</h3>
            <ul className='skills'>
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
                        <img src='https://img.icons8.com/material/24/f3f3f3/html-5.png' alt='HTML5' />
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
                        <img src='https://img.icons8.com/material/24/f3f3f3/git.png' alt='Git' />
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
                        <img src='https://img.icons8.com/material/24/f3f3f3/mysql.png' alt='MySQL' />
                        <span className='skillName'> MySQL</span>
                    </span>
                </li>
                <li className='skill'>
                    <span className='icon'>
                        <img src='https://img.icons8.com/material/24/f3f3f3/docker.png' alt='Docker' />
                        <span className='skillName'> Docker</span>
                    </span>
                </li>
            </ul>
            <div className='myDescription'>
                <h3>What I do</h3>
                <p>I'm a french developer, I'm currently learning ReactJS. I'm currently learning how to use Docker to develop my projects.</p>

                <br />

                <p>I'm using github to collaborate with other programmers and manage my projects.</p>
                <p>I'm using typescript to write my code.</p>
                <p>I'm using mysql to store my data.</p>

                <br />

                <p>I'm designing using Figma and Adobe Illustrator.</p>

                <br />

                <a href='/projects'>See my projects</a>
                <a href='/services'>See my services</a>
            </div>
            <Footer />
        </div>
    );
};

export default Home;