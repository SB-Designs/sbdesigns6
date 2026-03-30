import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const NotFound = () => {
    return (
        <div>
            <Navbar />
            <section className="hero">
                <h1>404 - Page Not Found</h1>
            </section>
            <div className="back-button">
                <Link to="/" className="btn">Back to Home</Link>
            </div>
            <Footer />
        </div>
    );
};

export default NotFound;