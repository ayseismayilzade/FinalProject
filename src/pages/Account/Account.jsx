import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./accounts.css"
import i18n from '../../i18n/i18next';
import { useTranslation } from 'react-i18next';
 import { ModeContext, useMode } from '../../Context/ModeContext';
const Account = () => {
    const { t } = useTranslation();
   const [mode] = useContext(ModeContext);
  
    const navigate = useNavigate();
    const [user, setUser] = useState({
        fullname: '',
        phone: '+000-11-222-33-44',
        email: '',
    });

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('login');
        if (!isLoggedIn) {
            navigate('/login');
        } else {
            const activeUser = JSON.parse(localStorage.getItem('activeUser'));
            if (activeUser) {
                setUser(activeUser);
            }
        }
    }, [navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleLogout = () => {
        localStorage.removeItem('login');
        localStorage.removeItem('activeUser');
        setUser({
            fullname: 'Login',
            phone: '',
            email: '',
        });
        navigate('/login');
        window.location.reload();
    };

    const activeUser = JSON.parse(localStorage.getItem("activeUser"));
    const isAdmin = activeUser && activeUser.email === "admin@gmail.com";

    return (
        <div className={`Account ${mode}`}>
            <div className="container-fluid">
                <div className='account-box'>
                  <h1 className='text-center'>{t("Account.0")}</h1>
                </div>
            </div>

            <div className='container'>
                <div className="d-flex align-items-center justify-content-center flex-column">
                <h7 className='my-1.5'>
                        {isAdmin ? (
                            <Link to='/dashboard'>
                                Dashboard
                            </Link>
                        ) : (
                            <Link className='link-h' to='/'>
                               {t("Account.1")}
                            </Link>
                        )}
                        <span> /</span> <span>{t("Account.0")}</span>
                    </h7>

                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 form-container my-2">
                        <form>
                            <div className="mb-4">
                                <label className="form-label">{t("Account.2")}</label>
                                <input
                                    name="fullname"
                                    type="text"
                                    className="form-control"
                                    value={user.fullname}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="form-label">{t("Account.3")}</label>
                                <input
                                    name="phone"
                                    type="tel"
                                    className="form-control"
                                    value={user.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="form-label">{t("Account.4")}</label>
                                <input
                                    name="email"
                                    type="email"
                                    className="form-control"
                                    value={user.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </form>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <button
                                
                                onClick={handleLogout}
                                className='btn-acc'
                            >
                                {t("Account.5")}
                            </button>
                        </div>
                    </div>

                   
                </div>
            </div>
        </div>
    );
};

export default Account;
