import React from 'react';

const ContactUs = () => {
    return (
        <div className="container">
            <form>
                <h2 className="text-center">Contact Us</h2>
                <div className="form-group">
                    <label>Your Name</label>
                    <input className="form-control" placeholder="your name" />

                </div>
                <div className="form-group">
                    <label>Your Name</label>
                    <input className="form-control" placeholder="your name" />

                </div>
                <div className="form-group">
                    <button className="btn btn-success">Submit</button>

                </div>

            </form>
        </div>
    );
}

export default ContactUs;