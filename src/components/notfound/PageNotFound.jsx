import { Link } from 'react-router-dom';
import React from 'react';

const PageNotFound = () => {
    return (
        <div>
            <h1>404 Page Not Found</h1>
            <Link to="/">Comeback</Link>
        </div>
    );
}

export default PageNotFound;