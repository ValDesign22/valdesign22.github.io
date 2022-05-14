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

    const getProjectFromMyGithub = async (event: any) => {
        event.preventDefault();
        
        const repo = document.getElementById('repo') as HTMLInputElement;
        const user = document.getElementById('type') as HTMLSelectElement;
        
        let project: any = {};
        await fetch(`https://api.github.com/repos/${user.value}/${repo.value}`)
            .then(res => res.json())
            .then(res => {
                project = res;
            }).catch(err => {
                console.log(err);
                project = 'Project not found';
            });
        
        console.log(project);
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
                        <input type='text' placeholder='Search from Github' className='search-from-github-input' id='repo' />

                        <select className='selector' id='type' name='type'>
                            <option value='ValRedstone'>ValRedstone</option>
                            <option value='IgeCorp'>IgeCorp</option>
                        </select>

                        <button type='submit'><i className='bx bx-search-alt'></i></button>
                    </div>

                    <div className='search-from-github-results-container'>
                        <div className='search-from-github-result'>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Projects;