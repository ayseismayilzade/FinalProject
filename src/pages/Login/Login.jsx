import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./login.css";
import i18n from '../../i18n/i18next';
 import { useTranslation } from 'react-i18next';
 import { ModeContext, useMode } from '../../Context/ModeContext';
 import Aos from 'aos';


const Login = () => {
    const { t } = useTranslation();
   const [mode] = useContext(ModeContext);
   useEffect (()=>{
    Aos.init({
        duration:1000
    });

},[])
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("login");
        if (isLoggedIn) {
            navigate('/account');
        }
    }, [navigate]);

    const loginSubmit = (e) => {
        e.preventDefault();
        const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
        const user = registeredUsers.find(u => u.email === email && u.password === password);

        if (user) {
            localStorage.setItem("login", "true");
            localStorage.setItem("activeUser", JSON.stringify(user));
            navigate('/account');
            window.location.reload(); 
        } else if (!email || !password) {
            
        } else {
            
        }
    };

    return (
        
        <div className={`login-1 ${mode}`}>
            <div className="container-fluid">
                <div className='log-box'>
                    
                </div>
            </div>

            <div className="container d-flex align-items-center justify-content-center flex-column">
                <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 login-border my-5">
                    <h1 className='my-6'>{t("Login.0")}</h1>
                    <form onSubmit={loginSubmit}>
                        <div className="mb-3">
                            <label className="form-label">{t("Login.1")}</label>
                            <input
                                type="email"
                                className="form-control"
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="my-5">
                            <label className="form-label">{t("Login.2")}</label>
                            <div className="input-group">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="form-control"
                                    onChange={e => setPassword(e.target.value)}
                                />
                                <span
                                    className="input-group-text"
                                    style={{ cursor: 'pointer', height: '38px' }}
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                                </span>
                            </div>
                        </div>
                        <button type="submit" className="btn-login">
                        {t("Login.3")}
                        </button>
                    </form>
                    <h4 className='my-6'>{t("Login.4")}</h4>
                    <button className="btn-login">
                    <Link to='/register' className='login-link' >{t("Login.5")}</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;