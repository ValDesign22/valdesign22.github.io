import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { FaCss3, FaHtml5, FaNodeJs, FaReact, FaJs, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiMysql, SiTypescript } from "react-icons/si";

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
                        <FaNodeJs />
                        <span className='skillName'> NodeJS</span>
                    </span>
                </li>
                <li className='skill'>
                    <span className='icon'>
                        <FaReact />
                        <span className='skillName'> ReactJS</span>
                    </span>
                </li>
                <li className='skill'>
                    <span className='icon'>
                        <FaHtml5 />
                        <span className='skillName'> HTML5</span>
                    </span>
                </li>
                <li className='skill'>
                    <span className='icon'>
                        <FaCss3 />
                        <span className='skillName'> CSS3</span>
                    </span>
                </li>
                <li className='skill'>
                    <span className='icon'>
                        <FaJs />
                        <span className='skillName'> JavaScript</span>
                    </span>
                </li>
                <li className='skill'>
                    <span className='icon'>
                        <FaGitAlt />
                        <span className='skillName'> Git</span>
                    </span>
                </li>
                <li className='skill'>
                    <span className='icon'>
                        <SiTypescript />
                        <span className='skillName'> Typescript</span>
                    </span>
                </li>
                <li className='skill'>
                    <span className='icon'>
                        <SiMysql />
                        <span className='skillName'> MySQL</span>
                    </span>
                </li>
                <li className='skill'>
                    <span className='icon'>
                        <FaDocker />
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