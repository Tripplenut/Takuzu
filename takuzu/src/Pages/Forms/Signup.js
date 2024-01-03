import { Container, Form, Card, Button, Alert } from 'react-bootstrap'
import { useRef, useState } from 'react'
import { useAuth } from '../Contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import '../Pages.css';

export default function Signup() {
    const emailRef = useRef();
    const pwRef = useRef();
    const cpwRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        if (pwRef.current.value !== cpwRef.current.value) {
            return setError('Passwords do not match');
        }
        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, pwRef.current.value);
            navigate('/account');
        } catch (error) {
            setError('Failed to create an account');
            console.error('Error during signup:', error);
        }
        setLoading(false);
    }

    return(
      <Container className='d-flex align-items-center justify-content-center' style={{minHeight: '75vh'}}>
        <div className='w-100' style={{maxWidth: '400px'}}>
            <Card>
                <Card.Body>
                    <h1 className='heading1'>Sign Up</h1>
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
                        <Form.Group id='cnfrmPassword'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type='password' ref={cpwRef} required/>
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type='submit'>Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>Already have an account? <Link to='/account/login'>Log In</Link></div>
        </div>
      </Container>
    )
}