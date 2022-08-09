import PropTypes from 'prop-types';

const Project = (props: any) => {
    return (
        <div className='project'>
            <div className='project-image'>
                <img src={props.image} alt={props.title} />
            </div>
            <div className='project-info'>
                <h3 className='project-title'>{props.title}</h3>
                <p className='project-description'>{props.description}</p>
                <div className='project-links'>
                    <a href={props.github} target='_blank' rel='noopener noreferrer' className='project-link'>
                        <i className='bx bxl-github project-icon'></i>
                    </a>
                    <a href={props.website} target='_blank' rel='noopener noreferrer' className='project-link'>
                        <i className='bx bx-link-alt project-icon'></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

Project.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired
};

export default Project;