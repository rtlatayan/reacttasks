import { Form, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import React, {useContext } from 'react';
import {LoginContext} from '../context/LoginContext';

const Login = () => {
    const {setUsername, setShowProfile} = useContext(LoginContext);

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Container>
        {/* {showProfile && <h1>Hi {username}</h1>} */}
        <Form onSubmit={onSubmit}>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
            />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button
            variant="primary"
            type="submit"
            onClick={() => setShowProfile(true)}>
            Submit
        </Button>
        </Form>
        </Container>
    )
}

export default Login
