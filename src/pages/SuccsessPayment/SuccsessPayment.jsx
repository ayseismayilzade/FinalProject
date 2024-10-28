import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ModeContext } from '../../Context/ModeContext';
import { useTranslation } from 'react-i18next';
import '../../i18n/i18next';
import './SuccsessPayment.css'; // Create this CSS file for custom styles

const SuccsessPayment = () => {
  const [mode] = useContext(ModeContext);
  const { t } = useTranslation();

  return (
    <section className={`payment-success-box ${mode}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow rounded p-4">
              <div className="text-center">
                <svg
                  version="1.1"
                  fill="#4CAF50"
                  id="checkmark"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 200 200"
                  width="80"
                  height="80"
                >
                  <path d="M131.583,92.152l-0.026-0.041c-0.713-1.118-2.197-1.447-3.316-0.734l-31.782,20.257l-4.74-12.65
                    c-0.483-1.29-1.882-1.958-3.124-1.493l-0.045,0.017c-1.242,0.465-1.857,1.888-1.374,3.178l5.763,15.382
                    c0.131,0.351,0.334,0.65,0.579,0.898c0.028,0.029,0.06,0.052,0.089,0.08c0.08,0.073,0.159,0.147,0.246,0.209
                    c0.071,0.051,0.147,0.091,0.222,0.133c0.058,0.033,0.115,0.069,0.175,0.097c0.081,0.037,0.165,0.063,0.249,0.091
                    c0.065,0.022,0.128,0.047,0.195,0.063c0.079,0.019,0.159,0.026,0.239,0.037c0.074,0.01,0.147,0.024,0.221,0.027
                    c0.097,0.004,0.194-0.006,0.292-0.014c0.055-0.005,0.109-0.003,0.163-0.012c0.323-0.048,0.641-0.16,0.933-0.346
                    l34.305-21.865C131.967,94.755,132.296,93.271,131.583,92.152z" 
                  />
                  <circle fill="none" stroke="#4CAF50" strokeWidth={5} strokeMiterlimit={10} cx="109.486" cy="104.353" r="32.53" />
                </svg>
                <h3 className="mt-3">{t("SuccessPayment.0")}</h3>
              </div>
              <div className="text-center mt-4">
                <p className="lead">
                  {t("SuccessPayment.1")}
                </p>
                <Link to='/shop' id='contBtn' className="btn btn-primary mt-3">
                  {t("SuccessPayment.2")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccsessPayment;

