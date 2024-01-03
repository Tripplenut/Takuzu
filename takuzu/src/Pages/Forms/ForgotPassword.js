import { Container, Form, Card, Button, Alert } from 'react-bootstrap'
import { useRef, useState } from 'react'
import { useAuth } from '../Contexts/AuthContext'
import { Link } from 'react-router-dom'
import '../Pages.css';

export default function ForgotPassword() {
    const emailRef = useRef();
    const { resetPassword } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setMessage("");
            setError('');
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage("Check your inbox for further instructions");
        } catch (error) {
            setError('Failed to reset password');
        } finally {
            setLoading(false);
        }
    }

    return(
        <Container className='d-flex align-items-center justify-content-center' style={{minHeight: '75vh'}}>
        <div className='w-100' style={{maxWidth: '400px'}}>
            <Card>
                <Card.Body>
                    <h1 className='heading1'>Forgot Password</h1>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    {message && <Alert variant='success'>{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required/>
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type='submit'>Reset Password</Button>
                    </Form>
                    <div className='w-100 text-center mt-3'><Link to='/account/login'>Log In</Link></div>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>Need an account? <Link to='/account/signup'>Sign Up</Link></div>
        </div>
        </Container>
    )
}