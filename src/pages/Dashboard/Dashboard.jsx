import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ModeContext, useMode } from '../../Context/ModeContext';
import { Link } from 'react-router-dom';
import "./dashboard.css"

const Dashboard = () => {
  const { t } = useTranslation();
  const [mode] = useContext(ModeContext);
  const products = useSelector((state) => state.products.data); 

  return (
    <div className={`div-dash ${mode}`}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-center flex-column">
          <h1>{t("Dashboard.0")}</h1>
          <div className="w-75">
            <Link to='/addproduct'> <button className="btn-add">{t("Dashboard.1")} </button></Link>
          </div>
          <div className="table-responsive">
            <table className="table t-b">
              <thead className="t-b">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">{t("Dashboard.2")}</th>
                  <th scope="col">{t("Dashboard.3")}</th>
                  <th scope="col">{t("Dashboard.4")}</th>
                  <th scope="col">{t("Dashboard.5")}</th>
                  <th scope="col">{t("Dashboard.6")}</th>
                </tr>
              </thead>
              <tbody className='t-b'>
                {products.length > 0 ? ( 
                  products.map((item, count) => (
                    <tr key={item.id}>
                      <th scope="row">{count + 1}</th>
                      <td><img className="img-b" src={item.image} width={70} alt="" /></td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td><Link to="/editproduct"><button className="btn-edit">{t("Dashboard.7")}</button></Link></td>
                      <td><button className="btn-delete">{t("Dashboard.8")}</button></td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className={`h2-2 ${mode}`}>{t("Dashboard.9")}</td> 
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

