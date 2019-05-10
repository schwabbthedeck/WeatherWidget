import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './bootstrap/css/bootstrap.min.css'
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import RandomImage from './components/RandomImage/RandomImage'

function Main () {
    return(
        <Container fluid>
            <Row >
                <Col className="myCol" md={5}><RandomImage /></Col>
                <Col md={7}>Test</Col>
            </Row>
        </Container>
        
    );
}

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
