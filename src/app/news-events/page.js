import React, { useEffect } from 'react'

import AOS from 'aos';


import dynamic from 'next/dynamic'
import Link from 'next/link'
 
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
   <img src="./img/DSC-2.png" alt="" className="w-100 home_img"  loading="lazy"/>
   </div> 
  </div>
</div>
</section>
{/* <!-- Time Line --> */}










<div className="container ">


<section className="row about home11  align-items-center flex_direction_column " >
    <div className="col-md-6 col-sm-12">
      <h6 className="our_productsp font-reto" data-aos="fade-right" data-aos-delay="0">Special days</h6>
      <h2 data-aos="fade-right" data-aos-delay="100">Special days</h2>
      
      <ul>
        <li data-aos="fade-right" data-aos-delay="200">
      <h4>Foundation Day</h4>
      <p> One of our luxurious national occasions, in which we celebrate the founding of the first Saudi state by Imam Muhammad bin Saud, and a royal decree was issued by the Custodian of the Two Holy Mosques to make every February 22 a day of commemoration this great event, and we participated in our various activities in it.</p>
    </li>
    </ul>
    <ul>
        <li data-aos="fade-right" data-aos-delay="200">
      <h4>Foundation Day</h4>
      <p> One of our luxurious national occasions, in which we celebrate the founding of the first Saudi state by Imam Muhammad bin Saud, and a royal decree was issued by the Custodian of the Two Holy Mosques to make every February 22 a day of commemoration this great event, and we participated in our various activities in it.</p>
    </li>
    </ul>
    <ul>
        <li data-aos="fade-right" data-aos-delay="200">
      <h4>Foundation Day</h4>
      <p> One of our luxurious national occasions, in which we celebrate the founding of the first Saudi state by Imam Muhammad bin Saud, and a royal decree was issued by the Custodian of the Two Holy Mosques to make every February 22 a day of commemoration this great event, and we participated in our various activities in it.</p>
    </li>
    </ul>





    </div>
    <div className="col-md-6  col-sm-12 d-flex justify_content_center justify-content-end align-items-center ">
      <section className="w-100 home11_img d-flex flex-nowrap align-items-center justify-content-center " >
          <div className="d-flex justify-content-center w-100">
            <img src="./img/2022-06-23.png" alt=""  loading="lazy" className="mt-auto" data-aos="fade-right" />
            <img src="./img/2021-01-21 (1).png" alt=""  loading="lazy" data-aos="fade-down"/>
          </div>
          <div className="w-100 ">
            <img src="./img/2020-08-08.png" alt=""  loading="lazy" className=" m-auto d-flex justify-content-center" data-aos="fade-up" />
          </div>
      </section>
    </div>
  </section>


<section className="car6 car8 mt-5">
<h6 className=" pt-5 font-reto" data-aos="fade-right">CATERING SERVICES PARTICIPATIONS   </h6>
<div className="d-flex justify-content-between align-items-center pb-4"> 
  <h2 data-aos="fade-right">Catering Services Participations </h2>
 
</div>
<div className="events-grid">
<Link href={"/events"}><section data-aos="fade-up" data-aos-delay="0" className="hover01"> 
         <figure><img src="./img/page8 (5).png" alt=""  loading="lazy" /></figure>
        <h6>The Founding Day</h6>
        <p>One of the existing branches of the Methods 
          brand with a distinctive view and a location 
          close to Al Fanateer Beach and the city 
          center in the commercial area.</p>
      </section>
      </Link>
<Link href={"/events"}><section data-aos="fade-up" data-aos-delay="0" className="hover01"> 
         <figure><img src="./img/page8 (5).png" alt=""  loading="lazy" /></figure>
        <h6>The Founding Day</h6>
        <p>One of the existing branches of the Methods 
          brand with a distinctive view and a location 
          close to Al Fanateer Beach and the city 
          center in the commercial area.</p>
      </section>
      </Link>
<Link href={"/events"}><section data-aos="fade-up" data-aos-delay="0" className="hover01"> 
         <figure><img src="./img/page8 (5).png" alt=""  loading="lazy" /></figure>
        <h6>The Founding Day</h6>
        <p>One of the existing branches of the Methods 
          brand with a distinctive view and a location 
          close to Al Fanateer Beach and the city 
          center in the commercial area.</p>
      </section>
      </Link>

          
</div>
</section>
<section className="row about home11  align-items-center flex_direction_column " >
<div className="col-md-6  col-sm-12 d-flex justify_content_center justify-content-end align-items-center ">
    <div className="w-100 home11_img d-flex flex-nowrap align-items-center justify-content-center " >
        <div className="d-flex justify-content-center w-100">
          <img src="./img/2022-06-23.png" alt=""  loading="lazy" className="mt-auto" data-aos="fade-right"/>
          <img src="./img/2021-01-21 (1).png" alt=""  loading="lazy" data-aos="fade-down"/>
        </div>
        <div className="w-100 ">
          <img src="./img/2020-08-08.png" alt=""  loading="lazy" className=" m-auto d-flex justify-content-center" data-aos="fade-up" />
        </div>
    </div>
  </div>
  <div className="col-md-6 col-sm-12">
    <h6 className="our_productsp font-reto" data-aos="fade-left" data-aos-delay="0" >Creative care in perfect ways</h6>
    <h2 data-aos="fade-left" data-aos-delay="100">Creative care in perfect ways</h2>
    <ul>
        <li data-aos="fade-right" data-aos-delay="200">
      <h4>Foundation Day</h4>
      <p> One of our luxurious national occasions, in which we celebrate the founding of the first Saudi state by Imam Muhammad bin Saud, and a royal decree was issued by the Custodian of the Two Holy Mosques to make every February 22 a day of commemoration this great event, and we participated in our various activities in it.</p>
    </li>
    </ul>
    <ul>
        <li data-aos="fade-right" data-aos-delay="200">
      <h4>Foundation Day</h4>
      <p> One of our luxurious national occasions, in which we celebrate the founding of the first Saudi state by Imam Muhammad bin Saud, and a royal decree was issued by the Custodian of the Two Holy Mosques to make every February 22 a day of commemoration this great event, and we participated in our various activities in it.</p>
    </li>
    </ul>

  </div>
 
</section>

<section className="car6 car8">
  <h6 data-aos="fade-right" className="font-reto">SPECIAL DAYS</h6>
  <div className="d-flex justify-content-between align-items-center pb-4" >
    <h2 data-aos="fade-right" >Special Days .</h2>
  </div>
  <div className="events-grid">
        <Link href={"/events"}><section data-aos="fade-up" data-aos-delay="0" className="hover01"> 
         <figure><img src="./img/page8 (3).png" alt=""  loading="lazy" /></figure>
        <h6>The Founding Day</h6>
        <p>One of the existing branches of the Methods 
          brand with a distinctive view and a location 
          close to Al Fanateer Beach and the city 
          center in the commercial area.</p>
      </section>
      </Link>
        <Link href={"/events"}><section data-aos="fade-up" data-aos-delay="0" className="hover01"> 
         <figure><img src="./img/page8 (3).png" alt=""  loading="lazy" /></figure>
        <h6>The Founding Day</h6>
        <p>One of the existing branches of the Methods 
          brand with a distinctive view and a location 
          close to Al Fanateer Beach and the city 
          center in the commercial area.</p>
      </section>
      </Link>
        <Link href={"/events"}><section data-aos="fade-up" data-aos-delay="0" className="hover01"> 
         <figure><img src="./img/page8 (3).png" alt=""  loading="lazy" /></figure>
        <h6>The Founding Day</h6>
        <p>One of the existing branches of the Methods 
          brand with a distinctive view and a location 
          close to Al Fanateer Beach and the city 
          center in the commercial area.</p>
      </section>
      </Link> 
</div> 
</section>


<section className="row about home11  align-items-center flex_direction_column " >
  <div className="col-md-6 col-sm-12">
    <h6 className="our_productsp font-reto" data-aos="fade-right" data-aos-delay="0">Professional hospitality services</h6>
    <h2 data-aos="fade-right" data-aos-delay="100">Special days</h2>
    <ul>
      <li data-aos="fade-right" data-aos-delay="200">
    Participation with the metal Company for the manufacture of aluminum on the occasion of the National Day celebrations in Ras Al-Khair.
  </li>
  </ul>
  <ul className="mt-3">
      <li data-aos="fade-right" data-aos-delay="300">
    Partnership with the metal Company for the manufacture of aluminum in Nana Beach.
  </li>
  </ul>

  </div>
  <div className="col-md-6  col-sm-12 d-flex justify_content_center justify-content-end align-items-center ">
    <div className="w-100 home11_img d-flex flex-nowrap align-items-center justify-content-center " >
        <div className="d-flex justify-content-center w-100">
          <img src="./img/2022-06-23.png" alt=""  loading="lazy" className="mt-auto" data-aos="fade-right"/>
          <img src="./img/2021-01-21 (1).png" alt=""  loading="lazy" data-aos="fade-down"/>
        </div>
        <div className="w-100 ">
          <img src="./img/2020-08-08.png" alt=""  loading="lazy" className=" m-auto d-flex justify-content-center" data-aos="fade-up" />
        </div>
    </div>
  </div>
</section>




<section className="car6 car8 mt-5">
<h6 className="pt-5 font-reto" data-aos="fade-right" >SOCIOL  RESPONSIBILITY </h6>
<div className="d-flex justify-content-between align-items-center pb-4">
  <h2 data-aos="fade-right">Social Responsibility</h2>
</div>
<div className="events-grid" >
<Link href={"/events"}>
  <section data-aos="fade-up" data-aos-delay="0" className="hover01"> 
         <figure><img src="./img/page8 (7).png" alt=""  loading="lazy"/></figure>
        <h6>The Founding Day</h6>
        <p>One of the existing branches of the Methods 
          brand with a distinctive view and a location 
          close to Al Fanateer Beach and the city 
          center in the commercial area.</p>
      </section>
</Link>
<Link href={"/events"}>
  <section data-aos="fade-up" data-aos-delay="0" className="hover01"> 
         <figure><img src="./img/page8 (7).png" alt=""  loading="lazy"/></figure>
        <h6>The Founding Day</h6>
        <p>One of the existing branches of the Methods 
          brand with a distinctive view and a location 
          close to Al Fanateer Beach and the city 
          center in the commercial area.</p>
      </section>
</Link>
<Link href={"/events"}>
  <section data-aos="fade-up" data-aos-delay="0" className="hover01"> 
         <figure><img src="./img/page8 (7).png" alt=""  loading="lazy"/></figure>
        <h6>The Founding Day</h6>
        <p>One of the existing branches of the Methods 
          brand with a distinctive view and a location 
          close to Al Fanateer Beach and the city 
          center in the commercial area.</p>
      </section>
</Link>

</div>
</section>






















{/* <!--  --> */}
<section className="car6 car8 mt-5">
<h6 className="pt-5 font-reto" data-aos="fade-right" >SPONSORSHIPS </h6>
<div className="d-flex justify-content-between align-items-center pb-4"> 
  <h2 data-aos="fade-right">Sponsorships</h2>
</div>
<div className="events-grid">
<Link href={"/events"}>
<section data-aos="fade-up" data-aos-delay="0" className="hover01"> 
         <figure><img src="./img/page8 (7).png" alt=""  loading="lazy" /></figure>
        <h6>The Founding Day</h6>
        <p>One of the existing branches of the Methods 
          brand with a distinctive view and a location 
          close to Al Fanateer Beach and the city 
          center in the commercial area.</p>
      </section>  </Link>
</div>
</section>


<section className="car6 car8 mt-5">
<h6 className=" pt-5 font-reto" data-aos="fade-right">NEWS   </h6>
<div className="d-flex justify-content-between align-items-center pb-4"> 
  <h2 data-aos="fade-right">The News </h2>
</div>
<div className="events-grid">
<Link href={"/events"}>
  <section data-aos="fade-up" data-aos-delay="0" className="hover01"> 
         <figure><img src="./img/page8 (2).png" alt=""  loading="lazy"/></figure>
        <h6>The Founding Day</h6>
        <p>One of the existing branches of the Methods 
          brand with a distinctive view and a location 
          close to Al Fanateer Beach and the city 
          center in the commercial area.</p>
      </section>
      </Link>
<Link href={"/events"}>
  <section data-aos="fade-up" data-aos-delay="0" className="hover01"> 
         <figure><img src="./img/page8 (2).png" alt=""  loading="lazy"/></figure>
        <h6>The Founding Day</h6>
        <p>One of the existing branches of the Methods 
          brand with a distinctive view and a location 
          close to Al Fanateer Beach and the city 
          center in the commercial area.</p>
      </section>
      </Link>
<Link href={"/events"}>
  <section data-aos="fade-up" data-aos-delay="0" className="hover01"> 
         <figure><img src="./img/page8 (2).png" alt=""  loading="lazy"/></figure>
        <h6>The Founding Day</h6>
        <p>One of the existing branches of the Methods 
          brand with a distinctive view and a location 
          close to Al Fanateer Beach and the city 
          center in the commercial area.</p>
      </section>
      </Link> 
</div>
</section>
</div>




    </>
  )
}

export default page;