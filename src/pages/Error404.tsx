import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Error404 = () => {
    return (
        <div>
            <Navigation />
            <h1 className='homeMain'>Hey, I'm Valentin.</h1>
            <h3 className='myDescription'>I'm a 15 year old french developer. Currently learning ReactJS.</h3>
            <div className="error">
                <h1>404</h1>
                <h2>Page <code>{window.location.pathname}</code> not found</h2>
                <br />
                <a href='/' className='btn-back'>Go back to home</a>
            </div>
            <Footer />
        </div>
    );
};

export default Error404;