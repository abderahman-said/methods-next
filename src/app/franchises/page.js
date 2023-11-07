"use client"
import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import Accordion from 'react-bootstrap/Accordion';
import img from "../../../public/img/2021-01-21 (1).png"
import dynamic from 'next/dynamic'
import AOS from 'aos';
const Navbar = dynamic(() => import('@/Components/navbar'), { ssr: false })
 
const page = () => {
	useEffect(() => {
		AOS.init({
		  duration: 1000, // تعيين مدة الانتقال (بالمللي ثانية)
		  easing: 'ease-in-out', // تعيين التموج (التنوع) للانتقال
		});
	  }, []);
	function downloadImage(url, name){
		fetch(url)
		  .then(resp => resp.blob())
		  .then(blob => {
			  const url = window.URL.createObjectURL(blob);
			  const a = document.createElement('a');
			  a.style.display = 'none';
			  a.href = url;
			  // the filename you want
			  a.download = name;
			  document.body.appendChild(a);
			  a.click();
			  window.URL.revokeObjectURL(url);
		  })
		//   .catch(() => alert('An error sorry'));
	  }
 
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: (
      <button classNameName="slick-prev">
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    ),
    nextArrow: (
      <button classNameName="slick-next">
        <i className="fa-solid fa-arrow-left"></i>
      </button>
    ),
  };  


  return (
    <>
  
 

<section className="home">
  <div className="back_home">
  <Navbar />

  <div className="position-relative  home_3"  >
	<div className="logo_home ">
	 <div  data-aos="fade-down" data-aos-delay="100">
	  <img src="./img/Group 5733.png"   alt=""  loading="lazy" />
	 </div> 
	 <h2 className="d-flex align-items-center writeit justify-content-center mt-2"   data-aos-delay="100">
		{/* <!-- Perfecting Your Way --> */}
	  </h2>       </div>
   <div className="h__img">
   <img src="./img/DSC-2.png" alt="" className="w-100 home_img" loading="lazy" />
   </div> 
  </div>
</div>
</section>

<div className="container">

<section className="row about home11 align-items-center flex_direction_column " >
  <div className="col-md-6 col-sm-12">
	<h6 className="our_productsp font-reto" data-aos="fade-right" data-aos-delay="0" >FRANCHISE OVERVIEW </h6>
	<h2 data-aos="fade-right" data-aos-delay="200">Franchise Overview</h2>
	<ul>
        <li data-aos="fade-right" data-aos-delay="200">
      <p> One of our luxurious national occasions, in which we celebrate the founding of the first Saudi state by Imam Muhammad bin Saud, and a royal decree was issued by the Custodian of the Two Holy Mosques to make every February 22 a day of commemoration this great event, and we participated in our various activities in it.</p>
    </li>
    </ul>	
	<ul>
        <li data-aos="fade-right" data-aos-delay="200">
      <p> One of our luxurious national occasions, in which we celebrate the founding of the first Saudi state by Imam Muhammad bin Saud, and a royal decree was issued by the Custodian of the Two Holy Mosques to make every February 22 a day of commemoration this great event, and we participated in our various activities in it.</p>
    </li>
    </ul>

{/* <!-- button_download_menu --> */}
		<button type="button" className="btn-31 mt-4"    onClick={downloadImage({img})}  data-aos="fade-right" data-aos-delay="300">
          <span className="text-container">
            <span className="text">  download flyers </span>
          </span>
        </button>

	{/*  */}
  </div>
  <div className="col-md-6  col-sm-12 d-flex justify_content_center justify-content-end align-items-center ">
	<div className="w-100 home11_img d-flex flex-nowrap align-items-center justify-content-center " >
		<div className="d-flex justify-content-center w-100">
		  <img src="./img/2022-06-23.png" alt=""  loading="lazy" className="mt-auto" data-aos="fade-right"/>
		  <img src="./img/2021-01-21 (1).png" alt=""  loading="lazy" data-aos="fade-down"/>
		</div>
		<div className="w-100 ">
		  <img src="./img/2020-08-08.png" alt=""  loading="lazy" className=" m-auto d-flex justify-content-center"  />
		</div>
	</div>
  </div>
</section>
{/* <!--  --> */}
<section className="caros11_text">
  <h6 className="text-center">FRANCHISE ADVANTAGES</h6>
  <h2 className="text-center">Franchise Benefits</h2>
  <div className="france d-flex position-relative " >
	<div className="france_around d-flex justify-content-around">
	  <div className="div"  >
		<img src="./img/icon1.png" alt=""/>
		<div className="france-text">
            <h6>Competitive</h6>
            <p>Take advantage of the advantages of the brand name and success.</p>
          </div>
	  </div>
	  <div className="div"  >
		<img src="./img/icon2.png" alt=""/>
		<div className="france-text">
            <h6>Competitive</h6>
            <p>Take advantage of the advantages of the brand name and success.</p>
          </div>

	  </div>
	</div>
	<div className="france_between d-flex justify-content-between ">
	  <div className="div" >
		<img src="./img/icon3.png" alt=""/>
		<div className="france-text">
            <h6>Competitive</h6>
            <p>Take advantage of the advantages of the brand name and success.</p>
          </div>
	  </div>
	  <div className="div" >
		<img src="./img/icon4.png" alt=""/>
		<div className="france-text">
            <h6>Competitive</h6>
            <p>Take advantage of the advantages of the brand name and success.</p>
          </div>
	  </div>
	  <div className="div" >
		<img src="./img/icon5.png" alt=""/>
		<div className="france-text">
            <h6>Competitive</h6>
            <p>Take advantage of the advantages of the brand name and success.</p>
          </div>
	  </div>
	</div>
  <img src="./img/page11.png" alt="" className="w-100 position-absolute france_img" />
  </div>
</section>


{/* <!-- caros11 --> */}


{/* <!--  --> */}
<section className="row about align-items-center flex_direction_column " >
<div className="col-md-6 col-sm-12">
  <h6 className="our_productsp font-reto" data-aos="fade-right" data-aos-delay="0" >OUR PRODUCTS </h6>
  <h2 data-aos="fade-right" data-aos-delay="100">General Terms
	& Conditions</h2>
	<p data-aos="fade-right" data-aos-delay="200">A commercial contract concluded between two parties 
	  according to which one of the parties to the contract,</p>
	<div className="our_products d-flex mt-4">
	  <div className="d-flex our_products_content justify-content-center align-items-start"  data-aos="fade-right" data-aos-delay="300">
		<div className="back_img">
		  <img src="./img/register.png" alt=""/>
		</div>
		<div>
		  <h6>Effective Commercial Register</h6>
		  <p>One of the existing branches of the Methods brand with a 
			distinctive view and a location close to Al Fanateer Beach and 
			the city center in the commercial area.</p>
		</div>
	  </div>
	  <div className="d-flex our_products_content justify-content-center align-items-start" data-aos="fade-right" data-aos-delay="400">
		<div className="back_img back_img2">
		  <img src="./img/target (3).png" alt=""/>
		</div>
		<div>
		  <h6>Financing Fund</h6>
		  <p>Providing appropriate financing for the project, which is in line with the strength of expansion that the franchisee aspires to, in order to avoid falling into financial problems and pitfalls.</p>
		</div>
	  </div>
	  <div className="d-flex our_products_content justify-content-center align-items-start" data-aos="fade-right" data-aos-delay="500">
		<div className="back_img back_img3">
		  <img src="./img/donation.png" alt=""/>
		</div>
		<div>
		  <h6>Selecting the target location</h6>
		  <p> Determining the target location from the necessary requirements, in which the country, governorate, and city are specified.</p>
		</div>
	  </div>
	</div>


	
</div>
<div className="col-md-6 col-sm-12 d-flex justify_content_center justify-content-end align-items-center " >
  <img src="./img/Group 23968.png" alt=""  loading="lazy" className="w-100" data-aos="fade-left"/>
</div>
</section>
{/* <!--  --> */}
<section className="caros11_text" >
<div className="text-center">
  <h6>FRANCHISE MODELS</h6>
  <h2>Franchise Models</h2>
</div>
<div className="caros " >
<Slider {...settings}>

 
	  <div className="card-content-caros"  > 
        <img src="./img/coffee-beans.png" alt=""  loading="lazy"/>
        <h6>Model(a)   </h6>
        <p>small description of one
          or two lines</p>
      </div>
	  <div className="card-content-caros"   > 
        <img src="./img/coffee-beans.png" alt=""  loading="lazy"/>
        <h6>Model(a)   </h6>
        <p>small description of one
          or two lines</p>
      </div>
	  <div className="card-content-caros"   > 
        <img src="./img/coffee-beans.png" alt=""  loading="lazy"/>
        <h6>Model(a)   </h6>
        <p>small description of one
          or two lines</p>
      </div>
	  <div className="card-content-caros"  > 
        <img src="./img/coffee-beans.png" alt=""  loading="lazy"/>
        <h6>Model(a)   </h6>
        <p>small description of one
          or two lines</p>
      </div>
 </Slider>
</div>
</section>
{/* <!--  --> */}
<section className="row accordion_div about align-items-center flex_direction_column mt-4" >
<div className="col-md-6 col-sm-12 about_right">
  <p data-aos="fade-right" data-aos-delay="0"  className="font-reto color-p-FAQ">APPLY FOR FRANCHISE</p>
  <h2 data-aos="fade-right" data-aos-delay="100"> FAQ(Frequent Asked Questions)</h2>
	<p data-aos="fade-right" data-aos-delay="200">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
	  Lorem Ipsum has been the industry's standard dummy text ever since the 
	  1500s, when an unknown .</p>
</div>
<div className="col-md-6 col-sm-12 d-flex justify-content-end align-items-center accordion_div_right"  >
  {/* <div className="accordion w-100" id="accordionExample" >
	<div className="accordion-item"  data-aos-delay="0">
	  <h6 className="accordion-header" id="headingOne">
		<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
		What is method?
		</button>
	  </h6>
	  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
		<div className="accordion-body">
		  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer .          </div>
	  </div>
	</div>
	<div className="accordion-item"  data-aos-delay="100">
	  <h6 className="accordion-header" id="headingTwo">
		<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
		What is method?
		</button>
	  </h6>
	  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
		<div className="accordion-body">
		  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer .
		</div>
	  </div>
	</div>
	<div className="accordion-item"  data-aos-delay="200">
	  <h6 className="accordion-header" id="headingThree">
		<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
		What is method?
		</button>
	  </h6>
	  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
		<div className="accordion-body">
		Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer .
		</div>
	  </div>
	</div>
	<div className="accordion-item"  data-aos-delay="300">
	  <h6 className="accordion-header" id="headingfour">
		<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="headingfour">
		What is method?
		</button>
	  </h6>
	  <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
		<div className="accordion-body">
		Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer .
		</div>
	  </div>
	</div>
  </div> */}

<Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header >What is method?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What is method?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Accordion.Body>
      </Accordion.Item>
	  <Accordion.Item eventKey="2">
        <Accordion.Header>What is method?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Accordion.Body>
      </Accordion.Item>
	  <Accordion.Item eventKey="3">
        <Accordion.Header>What is method?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
</div>
</section>

{/* <!--  --> */}
<section className="row about align-items-center flex_direction_column" >
<div className="col-md-6 col-sm-12">
  <p data-aos="fade-right" data-aos-delay="0" className="font-reto">APPLY FOR FRANCHISE </p>
  <h2 data-aos="fade-right" data-aos-delay="100">Apply For Franchise !</h2>
	<p data-aos="fade-right" data-aos-delay="200">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
	  Lorem Ipsum has been the industry's standard dummy text ever since the 
	  1500s, when an unknown .</p>
	  {/* <!-- <a href="/"  className="btn-31 mt-4" data-aos="fade-right" data-aos-delay="300">
		<span className="text-container">
		  <span className="text">APPLY NOW</span>
		</span>
	  </a> --> */}
</div>
<div className="col-md-6 col-sm-12 d-flex justify-content-end justify_content_center align-items-center " >
  <img src="./img/Group 24003.png" alt=""  loading="lazy" data-aos="fade-left" />
</div>
</section>



<section className="about join_col row align-items-center " data-aos="fade-right">
	<div className="col-sm-12 col-md-6 card_join">
	  <h2>Fill In The Data Below</h2>
		<p className="pb-4 pt-2 "   >Please , Fill in the data below and we will send you</p>
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
		  <button type="submit" name="" id="join-us-btn" className="btm_send">
			 Send 
		  </button>
		</div>
		</form>          
	</div>
	<div className="col-sm-12 col-md-6 join_right p-4">
	  <h6  data-aos-delay="0" className="font-reto">INQUIRIES</h6>
	  <h2  data-aos-delay="100">For Any Inquiries...</h2>
		<p  data-aos-delay="200">Contact us by visiting the company's headquarters or through
		  the official e-mail of the brand (Ango)</p>
		  <div className="d-flex  align-items-center icon_social pt-3" >
			<i className="fa-brands fa-tiktok"  data-aos-delay="0"></i>
			<i className="fa-brands fa-whatsapp"  data-aos-delay="100"></i>
			<i className="fa-brands fa-instagram"  data-aos-delay="200"></i>
			<i className="fa-brands fa-twitter"  data-aos-delay="300"></i>
			<i className="fa-solid fa-envelope"  data-aos-delay="400"></i>
		  </div>
	</div>
  </section>
</div>















    </>
  )
}

export default page