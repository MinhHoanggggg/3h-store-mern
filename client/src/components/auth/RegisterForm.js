import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import AlertMessage from '../layout/AlertMessage'
import '../../assets/css/bootstrap.css';

const RegisterForm = () => {
	// Context
	const { registerUser } = useContext(AuthContext)

	// Local state
	const [registerForm, setRegisterForm] = useState({
		username: '',
		password: '',
		confirmPassword: ''
	})

	const [alert, setAlert] = useState(null)

	const { username, password, confirmPassword } = registerForm

	const onChangeRegisterForm = event =>
		setRegisterForm({
			...registerForm,
			[event.target.name]: event.target.value
		})

	const register = async event => {
		event.preventDefault()

		if (password !== confirmPassword) {
			setAlert({ type: 'danger', message: 'Passwords do not match' })
			setTimeout(() => setAlert(null), 5000)
			return
		}

		try {
			const registerData = await registerUser(registerForm)
			if (!registerData.success) {
				setAlert({ type: 'danger', message: registerData.message })
				setTimeout(() => setAlert(null), 5000)
			}
		} catch (error) {
			console.log(error)
		}
	}

return (
    <>
        <Form className="login" onSubmit={register}>
        <AlertMessage info={alert} />
        <p class='gradient-3 mb-3'>Đăng kí</p>
            <Form.Group>
                <Form.Control
                    className='mb-3'
                    type='text'
                    placeholder='Tên đăng nhập'
                    name='username'
                    required
                    value={username}
                    onChange={onChangeRegisterForm}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    className='mb-3'
                    type='password'
                    placeholder='Mật khẩu'
                    name='password'
                    required
                    value={password}
                    onChange={onChangeRegisterForm}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type='password'
                    placeholder='Nhập lại mật khẩu'
                    name='confirmPassword'
                    required
                    value={password}
                    onChange={onChangeRegisterForm}
                />
            </Form.Group>
            <Button variant='success' type='submit'>
                Đăng kí
            </Button>
        <p>
            Bạn đã có tài khoản?
            <Link to='/login'>
                <Button variant='info' size='sm' className='ml-2'>
                    Đăng nhập
                </Button>
            </Link>
        </p>
        </Form>
        
    </>
	)
}

export default RegisterForm;