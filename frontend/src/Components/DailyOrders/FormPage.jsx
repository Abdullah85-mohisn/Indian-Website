import React, { useState, useEffect, useRef } from 'react';
import '../styles/DailyOrdersStyles/formpage.css';

const FormPage = () => {
  const [activeForm, setActiveForm] = useState('caseNumber');
  const [images, setImages] = useState([]);

  const generateCaptcha = () => Math.floor(1000 + Math.random() * 9000).toString();
  const [captchaValue, setCaptchaValue] = useState(generateCaptcha());
  const [userCaptchaInput, setUserCaptchaInput] = useState('');
  const captchaCanvasRef = useRef(null);

  useEffect(() => {
    const canvas = captchaCanvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '30px Arial';
    ctx.fillStyle = '#333';
    ctx.fillText(captchaValue, 10, 30);
  }, [captchaValue]);

  useEffect(() => {
    setCaptchaValue(generateCaptcha());
  }, [activeForm]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userCaptchaInput) {
      alert('Please enter CAPTCHA.');
      return;
    }

    if (userCaptchaInput !== captchaValue) {
      alert('Incorrect CAPTCHA.');
      return;
    }

    if (activeForm === 'caseNumber') {
      const caseNumber = document.querySelector('input[name="caseNumber"]')?.value;
      const year = document.querySelector('select[name="year"]')?.value;

      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/cases/search?caseNumber=${caseNumber}&year=${year}`);
        const data = await res.json();
        console.log("data: ", data);
        if (data.images) {
          setImages(data.images);
        } else {
          alert('No data found');
        }
      } catch (err) {
        console.error(err);
        alert('Error fetching images');
      }
    } else {
      alert('Search submitted (No backend call implemented for this form)');
    }
  };

  const renderCaptcha = () => (
    <>
      <label className="captcha-label">Please enter the CAPTCHA question?*</label>
      <div className="captcha-box">
        <div className="captcha-image">
          <canvas ref={captchaCanvasRef} width={100} height={40} style={{ border: '1px solid #ccc' }} />
          <div className="captcha-icons">
            <img
              src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/6700210b1c39fd479d00f2d0_%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2%202024-10-05%20010736.png"
              alt="refresh"
            />
            <img
              onClick={() => setCaptchaValue(generateCaptcha())}
              src="https://cdn.prod.website-files.com/66fbb785f478abc4a634d141/6700210b83e404f52e8b3299_%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2%202024-10-05%20010727.png"
              alt="refresh"
            />
          </div>
        </div>
        <div className="captcha-textbox">
          <input
            type="text"
            value={userCaptchaInput}
            onChange={(e) => setUserCaptchaInput(e.target.value)}
            placeholder="Solve Captcha"
          />
        </div>
      </div>
    </>
  );

  const renderForm = () => {
    switch (activeForm) {
      case 'caseNumber':
        return (
          <form onSubmit={handleSubmit}>
            <label>Case Number*</label>
            <input type="text" name="caseNumber" placeholder="Case Number" required />

            <label>Case Year*</label>
            <select name="year" required defaultValue="">
              <option value="" disabled>Select year</option>
              {Array.from({ length: 2025 - 2013 + 1 }, (_, i) => {
                const year = 2013 + i;
                return <option key={year} value={year}>{year}</option>;
              })}
            </select>

            {renderCaptcha()}

            <div className="form-buttons">
              <button type="submit">Search</button>
              <button type="reset">Reset</button>
            </div>
          </form>
        );

      case 'ropDate':
        return (
          <form onSubmit={handleSubmit}>
            <label>From Date*</label>
            <input type="text" name="fromDate" placeholder="dd-mm-yyyy" required />

            <label>To Date*</label>
            <input type="text" name="toDate" placeholder="dd-mm-yyyy" required />

            {renderCaptcha()}

            <div className="form-buttons">
              <button type="submit">Search</button>
              <button type="reset">Reset</button>
            </div>
          </form>
        );

      case 'freeText':
        return (
          <form onSubmit={handleSubmit}>
            <label>Text*</label>
            <input type="text" name="freeText" placeholder="Text" required />

            <label>From Date*</label>
            <input type="text" name="fromDate" placeholder="dd-mm-yyyy" required />

            <label>To Date*</label>
            <input type="text" name="toDate" placeholder="dd-mm-yyyy" required />

            {renderCaptcha()}

            <div className="form-buttons">
              <button type="submit">Search</button>
              <button type="reset">Reset</button>
            </div>
          </form>
        );

      default:
        return null;
    }
  };

  return (
    <div className="formpage-container">
      <p className="formpage-upperheading">Case Search</p>
      <div className="formpage-midcontainer">
        <div className="formpage-buttons">
          <button
            className={activeForm === 'caseNumber' ? 'active-button' : 'upper-form-button'}
            onClick={() => setActiveForm('caseNumber')}
          >
            Case Number
          </button>
          <button
            className={activeForm === 'ropDate' ? 'active-button' : 'upper-form-button'}
            onClick={() => setActiveForm('ropDate')}
          >
            ROP Date
          </button>
          <button
            className={activeForm === 'freeText' ? 'active-button' : 'upper-form-button'}
            onClick={() => setActiveForm('freeText')}
          >
            Free Text
          </button>
        </div>

        <div className="formpage-outerboundary">
          <div className="formpage-form">
            <div className="form-top-line">
              <p>All fields marked with * are required</p>
            </div>

            <div className="formpage-actualform">
              {renderForm()}
              <div className="formpage-image">
                {images.length > 0 ? (
                  images.map((img, i) => (
                    <img key={i} src={img} alt={`Case ${i}`} />

                  ))
                ) : (
                  <p></p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
