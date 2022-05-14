/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Project from '../components/Project';

const Projects = () => {
    const projects = [
        {
            title: 'IgeMail',
            description: 'IgeMail is a modmail discord bot with a dashboard',
            image: 'https://i.imgur.com/XqQXqQZ.png',
            github: 'https://github.com/IgeCorp',
            website: 'https://mail.igecorp.xyz'
        }, {
            title: 'ige-djs',
            description: 'A npm module that allows you to easily create a discord bot',
            image: 'https://i.imgur.com/XqQXqQZ.png',
            github: 'https://github.com/IgeCorp/ige-djs',
            website: 'https://igecorp.js.org'
        }, {
            title: 'Esprit de meute (not finished)',
            description: 'Esprit de meute is a website made with react for one of my clients',
            image: 'https://i.imgur.com/XqQXqQZ.png',
            github: 'https://github.com/ValRedstone/esprit-de-meute',
            website: 'https://valredstone.github.io/esprit-de-meute'
        }
    ];

    const projectsRef = useRef(null);

    const query = window.location.search;
    const params = new URLSearchParams(query);
    const projectQuery = params.get('project');
    const userQuery = params.get('user');


    const getProjectFromMyGithub = async (event: any) => {
        event.preventDefault();

        if (userQuery === null) return;
        if (projectQuery === null) return;
        
        const repo = document.getElementById('repo') as HTMLInputElement;
        const user = document.getElementById('type') as HTMLInputElement;
        
        let project: any = {};
        const request = await fetch(`https://api.github.com/repos/${user.value || userQuery}/${repo.value || projectQuery}`)
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

        repo.value = `${(repo.value || projectQuery) || ''}`;
        user.value = `${userQuery || user.value}`;
    }

    window.onload = getProjectFromMyGithub;


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
                        <input type='text' placeholder='Search from Github' className='search-from-github-input' id='repo' />

                        <div className="vertical-separator"></div>

                        <input type='text' placeholder='User' className='search-from-github-input' id='type' />

                        <div className="vertical-separator"></div>

                        <button type='submit' className='bx bx-search-alt search-button'></button>
                    </div>

                    <div className='search-from-github-results-container'>
                        <div className='search-from-github-result' id='result'>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Projects;