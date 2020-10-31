import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import './Landing.css';

    function Landing() {
        return (
            <div className="page">
                <Jumbotron className="landing">
                    <div className="title">
                    
                    <Button variant="dark" size="lg">Coffee Me</Button>
                    
                    </div>
                </Jumbotron>
            </div>
        )
    }

    export default Landing;