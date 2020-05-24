import React, { Component,Fragment } from 'react';
import student from '../images/student.jpg'

class App extends Component {
    render() {
        return (
        <Fragment>
          <nav className="navbar bg-dark">
            <h1>eStudent</h1>
            <ul>
                <h2>Web App For Students</h2>
            </ul>
        </nav>
        <section className="landing-area">
        <div className="dark-overlay">
            <div className="landing-area-inner">
                <h1 className="x-large">eStudent</h1>
                <p className="guide">Create your profile, share posts and communicate with other students</p>
               
                <img
                    src={student}
                    style={{ width: '350px', margin: 'auto', display: 'block' }}
                    
                />
                <div className="buttons">
                    <div className=" button button-primary">Sign Up</div>
                    <div className="button button-light">Login</div>
                </div>
            </div>
        </div>
    </section>

        </Fragment>
        );
    }
}

export default App;