import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./register.css"
import i18n from '../../i18n/i18next';
 import { useTranslation } from 'react-i18next';
 import { ModeContext, useMode } from '../../Context/ModeContext';
 import Aos from 'aos';
const Register = () => {
    const { t } = useTranslation();
   const [mode] = useContext(ModeContext);
   useEffect (()=>{
    Aos.init({
        duration:1000
    });

},[])
    const [user, setUser] = useState({
        fullname: "",
        tel: "+000-11-222-33-44",
        email: "",
        password: "",
        againPassword: "",
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const [showPassword, setShowPassword] = useState(false);
    const [showAgainPassword, setShowAgainPassword] = useState(false);

    const registerSubmit = (e) => {
        e.preventDefault();
        if (!user.fullname || !user.tel || !user.email || !user.password || !user.againPassword) {
            alert('Please fill in all fields');
        } else if (user.password !== user.againPassword) {
            alert('Passwords do not match');
        } else {
            const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
            const existingUser = registeredUsers.find((u) => u.email === user.email);
            if (existingUser) {
                alert('Email already registered');
            } else {
                registeredUsers.push(user);
                localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
                alert('Registration successful');
                setTimeout(() => {
                    window.location.assign("/login");
                }, 2000);
            }
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const toggleShowAgainPassword = () => {
        setShowAgainPassword(!showAgainPassword);
    };

    return (
        <div className={`register ${mode}`}>
            <div className="container-fluid">
                <div className='reg-box'>
                    <p></p>
                </div>
            </div>

            <div className="container d-flex align-items-center justify-content-center flex-column my-5">
                <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 register-border">
                    <h1 className='my-6' style={{ textAlign: 'center' }}>
                    {t("Register.0")}
                    </h1>
                    <form onSubmit={registerSubmit}>
                        <div className="mb-3">
                            <label className="form-label">{t("Register.1")}</label>
                            <input
                                type="text"
                                className="form-control"
                                name='fullname'
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">{t("Register.2")}</label>
                            <input
                                type="text"
                                className="form-control"
                                name='tel'
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">{t("Register.3")}</label>
                            <input
                                type="email"
                                className="form-control"
                                name='email'
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">{t("Register.4")}</label>
                            <div className="input-group">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className="form-control"
                                    name='password'
                                    onChange={handleChange}
                                />
                                <span
                                    className="input-group-text"
                                    style={{ height: '38px' }}
                                    onClick={toggleShowPassword}
                                >
                                    {showPassword ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i>}
                                </span>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">{t("Register.5")}</label>
                            <div className="input-group">
                                <input
                                    type={showAgainPassword ? 'text' : 'password'}
                                    className="form-control"
                                    name='againPassword'
                                    onChange={handleChange}
                                />
                                <span
                                    className="input-group-text"
                                    style={{ height: '38px' }}
                                    onClick={toggleShowAgainPassword}
                                >
                                    {showAgainPassword ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i>}
                                </span>
                            </div>
                        </div>
                        <button type="submit" className="btn-login">{t("Register.6")}</button>
                    </form>
                    <button className='btn-login'>
                    <Link to='/login' className='my-3 register-btn login-link '>{t("Register.7")}</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
