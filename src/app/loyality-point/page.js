"use client"
import React, { Component, useEffect } from "react";
import FormJoinUs from "../../Components/form-join-us"
import dynamic from 'next/dynamic'
import Link from "next/link";
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
      <img src="./img/Group 5733.png"   alt="" loading="lazy"  />
     </div> 
     <h2 className="d-flex align-items-center writeit justify-content-center mt-2"  data-aos="fade-up" data-aos-delay="100">
        {/* <!-- Perfecting Your Way --> */}
      </h2>       </div>
   <div className="h__img">
   <img src="./img/DSC-2.png" alt="" className="w-100 home_img"loading="lazy"  />
   </div> 
  </div>
</div>
</section>
{/* <!-- Time Line --> */}


<div className="container ">
{/* <!-- mobile --> */}
<section className="mobile row align-items-center mopile4">
<div className="col-sm-12 col-md-6 ">
  <p data-aos="fade-right" data-aos-delay="0" className="font-reto">Importance </p>
  <h2 data-aos="fade-right" data-aos-delay="100">The importance of 
    the feature</h2>
    <p  data-aos="fade-right" data-aos-delay="200">The loyalty points feature for cafes is important because it  incentivizes customers to return and make repeat offering , café can improve customer retention, increase revenue, and create a positive customer experience. Loyalty points encourage customers to spend more </p>
</div>
<div className="col-sm-12 col-md-6 d-flex  align-items-center kas">
  <img src="./img/aesthetic_35 [Converted]-01 1.png" alt="" loading="lazy" className="" data-aos="fade-left"/>
</div>
</section>
<section className="about about_2  row align-items-center ">
<div className="col-sm-12 col-md-6 d-flex justify-content-start align-items-center ">
  <img src="./img/aesthetic_44 [Converted]-01 4.png" alt="" loading="lazy" className=" pt-4"  data-aos="fade-right" />
</div>
<div className="col-sm-12 col-md-6 ">
  <p data-aos="fade-left" data-aos-delay="0" className="font-reto">Goal</p>
  <h2 data-aos="fade-left" data-aos-delay="100">The goal of
    the feature </h2>
    <p data-aos="fade-left" data-aos-delay="200">that the goal of the loyalty points feature is to incentivize customers to make repeat purchases and become regulars.  ultimate objective is to improve customer retention, increase revenue, and create a positive
    </p>
</div>
</section>
{/* <!--  --> */}
<section className="mobile row align-items-center mopile4 laytly">
  <div className="col-sm-12 col-md-6 ">
    <p data-aos="fade-right" data-aos-delay="0"  className="font-reto">laytly </p>
    <h2 data-aos="fade-right" data-aos-delay="100">The importance of 
      the feature</h2>
      <p  data-aos="fade-right" data-aos-delay="200">The loyalty points feature for cafes is important because it  incentivizes customers to return and make repeat offering , café can improve customer retention, increase revenue, and create a positive customer experience. Loyalty points encourage customers to spend more </p>
      <Link className="btn-31 mt-4" href="https://play.google.com/store/apps/details?id=com.nugttahapp&hl=en_SG&gl=US&pli=1" target="_blank">
          <span className="text-container">
            <span className="text">download app</span>
          </span>
      </Link>
  </div>
  <div className="col-sm-12 col-md-6 d-flex  align-items-center kas">
    <img src="./img/laytly.png" alt="" loading="lazy" className="laytly_img" data-aos="fade-left" />
  </div>
</section>
{/* <!--  --> */}
<section >
<h2 className="text-center">HOW TO USE </h2>
<div className="d-flex  half_ser">
  <div className="how-to-use-contain" data-aos="fade-up" data-aos-delay="0">
    <div><img src="./img/Frame 2.png" alt=""/></div>
    <h6>SIGN UP</h6>
    <p>sign up the loyalty program</p>
  </div>
  <div className="how-to-use-contain" data-aos="fade-up" data-aos-delay="200">
    <div><img src="./img/ou3.png" alt=""/></div>
    <h6>EARN POINTS</h6>
    <p>by making purchases at the cafe</p>
  </div>
  <div className="how-to-use-contain" data-aos="fade-up" data-aos-delay="400">
    <div><img src="./img/ou2.png" alt=""/></div>
    <h6>Track Points</h6>
    <p>through an online account or a physical <br/>
      card provided by the cafe.</p>
  </div>
  <div  className="how-to-use-contain" data-aos="fade-up" data-aos-delay="600">
    <div><img src="./img/ou1.png" alt=" "/></div>
    <h6>Redeem Rewards</h6>
    <p>through an online account or a physical <br/>
      card provided by the cafe.</p>
  </div>
</div>
</section>
</div>

 
 


    </>
  )
}

export default page