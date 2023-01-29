import axios from 'axios';
import { useState } from 'react';
import './Login.css';

const Login = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loginData, setLoginData] = useState({});
    const [status, setStatus] = useState('');

    const handleInputChange = (event) => {
        setLoginData({
            ...loginData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('/login', loginData);

        setStatus(res.data.message);
        setLoggedIn(res.data.success);
    };

    if (loggedIn) {
        window.location = '/';
    } else {
        return (
            <>
                <form className="form-login">
                    <div className="input-form-detail-login">
                        <label htmlFor="email">EMail</label>

                        <input
                            className="input-form-login"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="email"
                            onChange={handleInputChange}
                        ></input>
                    </div>

                    <div className="input-form-detail-login">
                        <label htmlFor="password">Password</label>

                        <input
                            className="input-form-login"
                            type="password"
                            name="password"
                            id="password"
                            placeholder="password"
                            onChange={handleInputChange}
                        ></input>
                    </div>

                    <div className="divider"></div>

                    <input type="submit" onClick={handleSubmit} value="LOG IN" />
                </form>

                <p className="status-login">{status}</p>
            </>
        );
    }
};

export default Login;
