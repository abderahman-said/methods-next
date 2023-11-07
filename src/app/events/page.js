"use client"
import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import Accordion from 'react-bootstrap/Accordion';
import AOS from 'aos';

import dynamic from 'next/dynamic'
import Link from "next/link";
 
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
  {/* <!-- Time Line --> */}
  

<div className="container ">












<section className="row about  event  align-items-center flex_direction_column " >
    <div className="col-md-6 col-sm-12">
      <h2 data-aos="fade-right">Special days</h2>
      <ul className="event-ul">

      <li>
      Participation with the metal Company for the manufacture of aluminum on the occasion of the National Day celebrations in Ras Al-Khair.
      </li>
      <li>

      Partnership with the metal Company for the manufacture of aluminum in Nana Beach.
      </li>

    <li>

      Partnership with the metal Company for the manufacture of aluminum in Nana Beach.
      </li>

    <li>

      Partnership with the metal Company for the manufacture of aluminum in Nana Beach.
      </li>

    <li>

      Partnership with the metal Company for the manufacture of aluminum in Nana Beach.
      </li>
      </ul>


    </div>
    <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center " data-aos="fade-left">
    <img  alt=""  loading="lazy" src="./img/page6 (2).png" className="img-events" />
  </div>
  </section>



















</div>


 




{/* </div> */}

 



    </>
  )
}

export default page