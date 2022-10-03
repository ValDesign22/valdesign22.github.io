import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Project from '../components/Project';
import { useRef } from 'react';

const Projects = () => {
    const projects = [
        {
            title: 'ige-djs',
            description: 'A npm module that allows you to easily create a discord bot',
            image: 'https://i.imgur.com/XqQXqQZ.png',
            github: 'https://github.com/IgeCorp/ige-djs',
            website: 'https://igecorp.js.org'
        }, {
            title: 'Esprit de meute',
            description: 'Esprit de meute is a website made with react for one of my clients',
            image: require("../assets/img/esprit-de-meute.png"),
            github: 'https://espritdemeute.fr',
            website: 'https://espritdemeute.fr'
        }
    ];

    const projectsRef = useRef(null);

    const getProjectFromMyGithub = async (event: any) => {
        event.preventDefault();

        
        const user = document.getElementById('user') as HTMLInputElement;
        const repo = document.getElementById('repo') as HTMLInputElement;
        
        let project: any = {};
        const request = await fetch(`https://api.github.com/repos/${user.value}/${repo.value}`)
        project = await request.json();
        if (project.message === 'Not Found') {
            project = 'project-not-found';
        }
        
        const resultDiv = document.getElementById('result') as HTMLDivElement;
        resultDiv.innerHTML = project === 'project-not-found' ? `Project Not Found` : `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${project.name}</h5>
                    ${project.description ? `<p class="card-text">${project.description}</p>` : ''}
                    <a href="${project.html_url}" class="btn btn-primary">Github</a>
                    ${project.homepage ? `<a href="${project.homepage}" class="btn btn-primary">Website</a>` : ''}
                </div>
            </div>
        `;

        repo.value = `${repo.value}`;
        user.value = `${user.value}`;
    }

    return (
        <div>
            <Navigation />
            <div className='projects-container'>
                {projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
            <div className='search-from-github-container'>
                <form
                    className='search-from-github-form'
                    ref={projectsRef}
                    onSubmit={getProjectFromMyGithub}
                >
                    <h1>Search from Github</h1>

                    <div className='search-from-github-input-container'>
                        <input type='text' placeholder='User' className='search-from-github-input' id='user' />

                        <div className="vertical-separator"></div>

                        <input type='text' placeholder='Project' className='search-from-github-input' id='repo' />

                        <div className="vertical-separator"></div>

                        <button type='submit' className='bx bx-search-alt search-button'></button>
                    </div>

                    <div className='search-from-github-results-container'>
                        <div className='search-from-github-result' id='result'></div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Projects;
