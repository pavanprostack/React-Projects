import { useState } from 'react';
import styles from '../Login/styles.module.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
            const url = `http://localhost:8080/users/login`;
            axios.post(url, data).then((response) => {
                localStorage.setItem("token", response.data);
                window.location("/")
            }).catch((error=>{
                console.log(error);
            }))
        
    }
    return <>
        <div className={styles.login_container}>
            <div className={styles.login_form_container}>
                <div className={styles.left}>
                    <form className={styles.form_container} onSubmit={submitHandler}>
                        <h1>Login to Your Account</h1>
                        <input type="email" placeholder='Email' name='email' value={data.email} onChange={handleChange} />
                        <input type="password" placeholder='Password' name='password' value={data.password} onChange={handleChange} />
                        {error && <div className={styles.error_msg}>error</div>}
                        <button type='submit' className={styles.green_btn}>Sign In</button>
                    </form>
                </div>
                <div className={styles.right}>
                    <h1>New Here?</h1>
                    <Link to='/signup'>
                        <button type='button' className={styles.white_btn}>Sign Up</button>
                    </Link>
                </div>
            </div>
        </div>
    </>
}

export default Login