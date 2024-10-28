import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import "./myaccount.css"
import i18n from '../../i18n/i18next';
 import { useTranslation } from 'react-i18next';
 import { ModeContext, useMode } from '../../Context/ModeContext';
const MyAccount = () => {
    const { t } = useTranslation();
    const [mode] = useContext(ModeContext);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const adminData = {
        fullname: "Admin",
        email: "admin@gmail.com",
        password: "123",
        phone: "+000-111-22-33"
    };

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("login");
        if (isLoggedIn) {
            navigate('/account');
        }
    }, [navigate]);

    const loginSubmit = (e) => {
        e.preventDefault();

        if (adminData.email === email && adminData.password === password) {
            localStorage.setItem("login", "true");
            localStorage.setItem("activeUser", JSON.stringify(adminData));
            navigate('/account');
            window.location.reload();
        } else if (!email || !password) {
            alert("Please enter your email and password."); 
        } else {
            alert("Incorrect email or password."); 
        }
    };

    return (
        <div className={`login ${mode}`}>
            <div className="container-fluid">
                <div className="log-box">
                    
                </div>
            </div>

            <div className="container d-flex align-items-center justify-content-center flex-column my-5 myAccount">
                <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 admin-border">
                    <h1 className="my-4" style={{ color: 'white' }}>{t("MyAccount.0")}</h1>
                    <form onSubmit={loginSubmit}>
                        <div className="mb-3">
                            <label className="form-label">{t("MyAccount.1")}</label>
                            <input 
                                onChange={e => setEmail(e.target.value)} 
                                type="email" 
                                className="form-control" 
                                value={email}
                            />
                        </div>
                        <div className="my-5">
                            <label className="form-label">{t("MyAccount.2")}</label>
                            <div className="input-group">
                                <input 
                                    onChange={e => setPassword(e.target.value)} 
                                    type={showPassword ? "text" : "password"} 
                                    className="form-control" 
                                    value={password}
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
                        <button type="submit" className="btn-login">{t("MyAccount.3")}</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyAccount;
