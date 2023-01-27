import { useState } from 'react';
import styles from '../Signup/styles.module.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const [error, setError] = useState("");

    const naviagate = useNavigate();

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        try {
            const url = `http://localhost:8080/users/register`;
            axios.post(url, data).then((response) => {
                console.log(response.message);
                naviagate("/login");
            }).catch(() => { })
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message);
            }
        }
    }
    return <>
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
                <div className={styles.left}>
                    <h1>Welcome Back</h1>
                    <Link to='/login'>
                        <button type='button' className={styles.white_btn}>Sign in</button>
                    </Link>
                </div>
                <div className={styles.right}>
                    <form className={styles.form_container} onSubmit={submitHandler}>
                        <h1>Create Account</h1>
                        <input type="text" placeholder='First Name' name='firstName' value={data.firstName} onChange={handleChange} />
                        <input type="text" placeholder='Last Name' name='lastName' value={data.lastName} onChange={handleChange} />
                        <input type="email" placeholder='Email' name='email' value={data.email} onChange={handleChange} />
                        <input type="password" placeholder='Password' name='password' value={data.password} onChange={handleChange} />
                        {error && <div className={styles.error_msg}>error</div>}
                        <button type='submit' className={styles.green_btn}>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default SignUp