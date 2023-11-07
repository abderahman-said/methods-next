"use client"
import React, { Component, useEffect } from "react";
 
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
  {/* <!-- home img --> */}
  <div className="position-relative  home_3"  >
    <div className="logo_home ">
     <div  data-aos="fade-down" data-aos-delay="100">
      <img src="./img/Group 5733.png"   alt=""   loading="lazy" />
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
{/* <!-- Time Line --> */}


<div className="container">





  <section className="  one_product row align-items-center  prodouct" dir="rtl">
      <div className="col-sm-12 col-md-6 col-lg-6  rightt " data-aos="fade-right">
          <div className="right">
            <div className="rating-box">
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
            <div className="name_pro">
            <h3> Hot Coffee </h3>
            <h2>30000 R.S</h2>
          </div>
            
            
          </div>
         
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa beatae magni, aperiam, animi quibusdam quae velit corporis aspernatur, voluptas ut porro doloribus dolorem assumenda! Quae reiciendis reprehenderit cupiditate totam magni.</p>
          
      </div>
      <div className="col-sm-12 col-md-6 col-lg-6 left d-flex justify-content-end align-items-center login_card_div position-relative" data-aos="fade-left">
      <div className="img_gal">
        <div className="main-img">
            <img src="./img/MaskGroup4.png" alt="" id="current" />
        </div>
    </div>

      </div>
      
      
    </section>







</div>



    </>
  )
}

export default page