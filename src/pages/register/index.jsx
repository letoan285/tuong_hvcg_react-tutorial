import { Link } from 'react-router-dom';
import React from 'react';

const Register = () => {
    return (
        <div>
           
            <div className="row">
                <div className="col-6 offset-3">
                <h1 className="text-center">Sign Up Account</h1>
                    <div className="form-group">
                        <label htmlFor="">User Name</label>
                        <input type="text" className="form-control" placeholder="username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input type="text" className="form-control" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="text" className="form-control" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Confirm Password</label>
                        <input type="text" className="form-control" placeholder="Confirm Password"/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-success">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;