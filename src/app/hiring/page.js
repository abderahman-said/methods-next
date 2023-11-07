"use client"
import React, { Component, useEffect } from "react";
import FormJoinUs from "../../Components/form-join-us"
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
     <h2 className="d-flex align-items-center writeit justify-content-center mt-2"  data-aos="fade-up" data-aos-delay="100">
        {/* <!-- Perfecting Your Way --> */}
      </h2>       </div>
   <div className="h__img">
   <img src="./img/DSC-2.png" alt="" className="w-100 home_img" loading="lazy" />
   </div> 
  </div>
</div>
</section>

<div className="join">
  {/* <!-- mobile --> */}
<div className="container ">
  <section className="about row align-items-center ">
    <div className="col-sm-12 col-md-6 ">
      <h6  data-aos="fade-right" data-aos-delay="0" className="font-reto">JOIN US</h6>
      <h2 data-aos="fade-right" data-aos-delay="100">Join Us.</h2>
        <p  data-aos="fade-right" data-aos-delay="200">Acquisitions of Talented People is worthing a lot to us, as we are state to to aim qualified candidates that could grow with our strateginc planning, raise the productivity,and adding big value achievements, candidates who could create the difference</p>
    </div>
    <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center " >
      <img src="./img/page81.png" alt=""  loading="lazy" className="w-100 "  data-aos="fade-left" />
    </div>
  </section>
  <section className="about join_col row align-items-center " data-aos="fade-right">
      <div className="col-sm-12 col-md-6 card_join">
        <h2>Fill In The Data Below</h2>
 <p className="pb-4 pt-2 "   >Please , Fill in the data below and we will send you</p>
 <FormJoinUs />
 
      </div>
      <div className="col-sm-12 col-md-6 join_right p-4">
        <h6 data-aos="fade-up" data-aos-delay="0" className="font-reto">INQUIRIES</h6>
        <h2 data-aos="fade-up" data-aos-delay="100">For Any Inquiries...</h2>
 <p data-aos="fade-up" data-aos-delay="200">Contact us by visiting the company's headquarters or through
   the official e-mail of the brand (Ango)</p>
   <div className="d-flex  align-items-center icon_social pt-3" >
     <i className="fa-brands fa-tiktok" data-aos="fade-up" data-aos-delay="0"></i>
     <i className="fa-brands fa-whatsapp" data-aos="fade-up" data-aos-delay="100"></i>
     <i className="fa-brands fa-instagram" data-aos="fade-up" data-aos-delay="200"></i>
     <i className="fa-brands fa-twitter" data-aos="fade-up" data-aos-delay="300"></i>
     <i className="fa-solid fa-envelope" data-aos="fade-up" data-aos-delay="400"></i>
   </div>
      </div>
    </section>
 </div>
</div>
 

 


    </>
  )
}

export default page