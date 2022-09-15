import React, { Component } from 'react';

class Signup extends Component {
  render() {
    return (
      <section className="signup-section">
        <div className="row">
          <div className="signup">
            <div className="signup-form-box">
              <form action="#" className="form">
                <div className="margin-bottom-med">
                  <h2 className="unique-heading">Sign Up!</h2>
                </div>
                <div className="form-group">
                  <input type="text" className="form-input" placeholder="Full Name" id="name" autoComplete="off" required/>
                  <label htmlFor="name" className="form-label">Full Name</label>
                </div>

                <div className="form-group">
                  <input type="email" className="form-input" placeholder="Email Address" id="email" autoComplete="off" required/>
                  <label htmlFor="email" className="form-label">Email Address</label>
                </div>

                <div className="form-group">
                  <div className="form-radio-group">
                    <input type="radio" id="small" className="form-radio-input" name="size"/>
                    <label htmlFor="small" className="form-radio-label">
                      <span className="form-radio-button"></span> 
                        Male
                    </label>
                  </div>
                  <div className="form-radio-group">
                    <input type="radio" id="large" className="form-radio-input" name="size"/>
                    <label htmlFor="large" className="form-radio-label">
                      <span className="form-radio-button"></span> 
                        Female
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <button className="btn btn-green form-submit">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Signup;
