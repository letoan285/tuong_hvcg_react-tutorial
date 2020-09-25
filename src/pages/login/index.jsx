import { Link } from 'react-router-dom';
import React from 'react';

const Login = () => {
    return (
        <div>
           
            <div className="row">
                <div className="col-6 offset-3">
                <h1 className="text-center">Login Page</h1>
                    <div className="form-group">
                        <label htmlFor="">User Name</label>
                        <input type="text" className="form-control" placeholder="username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">User Name</label>
                        <input type="text" className="form-control" placeholder="username"/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-success">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;