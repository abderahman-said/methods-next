"use client"
import React, { Component, useEffect } from "react";
import Slider from "react-slick";

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
{/* <!-- mobile --> */}
<img src="./img/logo-methods-back.png" alt="" className="logo-methods-back" />
<section className="mobile row align-items-center ">
<div className="col-sm-12 col-md-6 ">
  <p data-aos="fade-right" data-aos-delay="0"className="font-reto">OUR PRODUCTS</p>
  <h2 data-aos="fade-right" data-aos-delay="200">Just A Taste With
    Methods Menu.</h2>
    <p data-aos="fade-right" data-aos-delay="500">Lorem Ipsum is siimply dummmy texxt of the printingg andd typesetting industry. Lorem Ipsum haas beeen the industry's standdard dummmy texxt ever sinnce the 1500s, whenn ann unknown printer took a galley of typee and scrammbled it to make a type specimen book.</p>
   </div>
<div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center ">
  <img src="./img/g1.png" alt="" loading="lazy" data-aos="fade-left"/>
</div>
</section>
{/* <!--caros  --> */}
<section className="caros mt-4 " >
<Slider {...settings}>
        <div>
          <Link href={"/products"}>
    <div data-aos="fade-up" data-aos-delay="700" className="product-card-content" > 
      <img src="./img/MaskGroup4.png" alt="" loading="lazy"/>
      <h6>Drip Coffee</h6>
      <p>small description of one or two lines</p>
    </div>
  </Link>
        </div>
        <div>
          <Link href={"/products"}>
    <div data-aos="fade-up" data-aos-delay="700" className="product-card-content" > 
      <img src="./img/MaskGroup4.png" alt="" loading="lazy"/>
      <h6>Drip Coffee</h6>
      <p>small description of one or two lines</p>
    </div>
  </Link>
        </div>
        <div>
         <Link href={"/products"}>
    <div data-aos="fade-up" data-aos-delay="700" className="product-card-content" > 
      <img src="./img/MaskGroup4.png" alt="" loading="lazy"/>
      <h6>Drip Coffee</h6>
      <p>small description of one or two lines</p>
    </div>
  </Link>
        </div>
        <div>
          <Link href={"/products"}>
    <div data-aos="fade-up" data-aos-delay="700" className="product-card-content" > 
      <img src="./img/MaskGroup4.png" alt="" loading="lazy"/>
      <h6>Drip Coffee</h6>
      <p>small description of one or two lines</p>
    </div>
  </Link>
        </div>
        <div>
          <Link href={"/products"}>
    <div data-aos="fade-up" data-aos-delay="700" className="product-card-content" > 
      <img src="./img/MaskGroup4.png" alt="" loading="lazy"/>
      <h6>Drip Coffee</h6>
      <p>small description of one or two lines</p>
    </div>
  </Link>
        </div>
        <div>
          <Link href={"/products"}>
    <div data-aos="fade-up" data-aos-delay="700" className="product-card-content" > 
      <img src="./img/MaskGroup4.png" alt="" loading="lazy"/>
      <h6>Drip Coffee</h6>
      <p>small description of one or two lines</p>
    </div>
  </Link>
        </div>
        <div>
          <Link href={"/products"}>
    <div data-aos="fade-up" data-aos-delay="700" className="product-card-content" > 
      <img src="./img/MaskGroup4.png" alt="" loading="lazy"/>
      <h6>Drip Coffee</h6>
      <p>small description of one or two lines</p>
    </div>
  </Link>
        </div>
        <div>
          <Link href={"/products"}>
    <div data-aos="fade-up" data-aos-delay="700" className="product-card-content" > 
      <img src="./img/MaskGroup4.png" alt="" loading="lazy"/>
      <h6>Drip Coffee</h6>
      <p>small description of one or two lines</p>
    </div>
  </Link>
        </div>
        <div>
          <Link href={"/products"}>
    <div data-aos="fade-up" data-aos-delay="700" className="product-card-content" > 
      <img src="./img/MaskGroup4.png" alt="" loading="lazy"/>
      <h6>Drip Coffee</h6>
      <p>small description of one or two lines</p>
    </div>
  </Link>
        </div>
      </Slider>
</section>
{/* <!-- card --> */}



      
</div>



    </>
  )
}

export default page