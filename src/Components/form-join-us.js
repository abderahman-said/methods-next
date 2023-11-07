import React, { useEffect } from 'react'
import AOS from 'aos';


const FormJoinUs = () => {
  useEffect(() => {
		AOS.init({
		  duration: 1000, // تعيين مدة الانتقال (بالمللي ثانية)
		  easing: 'ease-in-out', // تعيين التموج (التنوع) للانتقال
		});
	  }, []);

  
  return (
    <div>
        <form action="" id="join-us-form">
          <div className="login_card">
            <div className="wave-group">
              <input required="" type="text" id="name" className="input"/>
              <span className="bar"></span>
              <label className="label">
                <i className="fa-solid fa-user label-char" ></i>
                <span className="label-char" style={{'--index': 0}}>N</span>
                <span className="label-char" style={{'--index': 1}}>a</span>
                <span className="label-char" style={{'--index': 2}}>m</span>
                <span className="label-char" style={{'--index': 3}}>e</span>
              </label>
            </div>
            <div className="wave-group">
              <input required="" type="email" id="email" className="input"/>
              <span className="bar"></span>
              <label className="label">
                <i className="fa-solid fa-envelope label-char"></i>
                <span className="label-char" style={{'--index': 0}}>E</span>
                <span className="label-char" style={{'--index': 1}}>m</span>
                <span className="label-char" style={{'--index': 2}}>a</span>
                <span className="label-char" style={{'--index': 3}}>i</span>
                <span className="label-char" style={{'--index': 4}}>l</span>
              </label>
            </div>
            <div className="wave-group" >
              <input required="" type="text" id="phone"  className="input"/>
              <span className="bar"></span>
              <label className="label">
                <i className="fa-solid fa-phone label-char"></i>
                <span className="label-char" style={{'--index': 0}}>P</span>
                <span className="label-char" style={{'--index': 1}}>h</span>
                <span className="label-char" style={{'--index': 2}}>o</span>
                <span className="label-char" style={{'--index': 3}}>n</span>
                <span className="label-char" style={{'--index': 4}}>e</span>
                <span className="label-char m_n" style={{'--index': 5}}>n</span>
                <span className="label-char" style={{'--index': 6}}>u</span>
                <span className="label-char" style={{'--index': 7}}>m</span>
                <span className="label-char" style={{'--index': 8}}>p</span>
                <span className="label-char" style={{'--index': 9}}>e</span>
                <span className="label-char" style={{'--index': 10}}>r</span>
              </label>
            </div>
            <div className="wave-group">
              <input required="" type="text" id="country" className="input"/>
              <span className="bar"></span>
              <label className="label">
                <i className="fa-solid fa-earth-americas label-char"></i>
                <span className="label-char" style={{'--index': 0}}>C</span>
                <span className="label-char" style={{'--index': 1}}>o</span>
                <span className="label-char" style={{'--index': 2}}>n</span>
                <span className="label-char" style={{'--index': 3}}>t</span>
                <span className="label-char" style={{'--index': 4}}>r</span>
                <span className="label-char" style={{'--index': 5}}>y</span>
              </label>
            </div>
            <div className="wave-group">
              <input required="" type="text" id="address" className="input"/>
              <span className="bar"></span>
              <label className="label">
                <i className="fa-solid fa-location-dot label-char"></i>
                <span className="label-char" style={{'--index': 0}}>A</span>
                <span className="label-char" style={{'--index': 1}}>d</span>
                <span className="label-char" style={{'--index': 2}}>d</span>
                <span className="label-char" style={{'--index': 3}}>r</span>
                <span className="label-char" style={{'--index': 4}}>e</span>
                <span className="label-char" style={{'--index': 5}}>s</span>
              </label>
            </div>
            <div className="drop-zone pt-4 pb-2" >
              <img src="./img/cv.png" alt=""/>
              <div className="d-flex pt-4 justify-content-around align-items-center w-100">
                <span className="drop-zone__prompt">UPLOAD YOUR CV HERE</span>
                <i className="fa-solid fa-arrow-up-from-bracket"></i>
              </div>
              <input type="file" name="myFile" id="upload-files" className="drop-zone__input"/>
            </div>
            <button type="submit" name="" id="join-us-btn" className="btm_send">
               Send 
            </button>
          </div>
          </form>
    </div>
  )
}

export default FormJoinUs