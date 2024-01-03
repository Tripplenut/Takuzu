import { Container, Form, Card, Button, Alert } from 'react-bootstrap'
import { useRef, useState } from 'react'
import { useAuth } from '../Contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import '../Pages.css';

export default function Login() {
    const emailRef = useRef();
    const pwRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, pwRef.current.value);
            navigate("/account");
        } catch (error) {
            setError('Failed to log in');
        } finally {
            setLoading(false);
        }
    }

    return(
        <Container className='d-flex align-items-center justify-content-center' style={{minHeight: '75vh'}}>
        <div className='w-100' style={{maxWidth: '400px'}}>
            <Card>
                <Card.Body>
                    <h1 className='heading1'>Log In</h1>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required/>
                        </Form.Group>
                        <Form.Group id='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' ref={pwRef} required/>
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type='submit'>Log In</Button>
                    </Form>
                    <div className='w-100 text-center mt-3'><Link to='/account/forgot-password'>Forgot Password?</Link></div>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>Need an account? <Link to='/account/signup'>Sign Up</Link></div>
        </div>
        </Container>
    )
}