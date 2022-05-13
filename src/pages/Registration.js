import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { TextField, Button } from '@mui/material';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import firebaseConfig from '../services/firebaseConfig';
import { ToastContainer, toast } from 'react-toastify';


const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, ] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        try{
            const auth = getAuth(firebaseConfig);
            await createUserWithEmailAndPassword(auth, email, password);
            toast.success('Успех!!!', {position: toast.POSITION.TOP_RIGHT
            });
            setEmail('');
            setPassword('');
        }catch (e){
            toast.error('Ошибка!');
            console.error(e);
        }
    };

    return (
    <div>
        <ToastContainer />
        <form onSubmit={onSubmit}>
            <h1>Регистрация</h1>
            <TextField
                placeholder="Введите email"
                name='email'
                type='email'
                onChange={handleEmailChange}
                value={email}
                required
            />
            <br />
            <br />
            <TextField
                placeholder="Введите пароль"
                name='password'
                type='password'
                onChange={handlePasswordChange}
                value={password}
                required
            />
            <br />
            <br />
            <div>
                {error && <p>{error}</p>}
                <Button variant={'outlined'} type='submit'>Зарегистрироваться</Button>
            </div>
            
            <p>Аккаунт уже есть? <Link to='login'>Войти</Link></p>
        </form>
        
    </div>
    );
};

export default Registration;