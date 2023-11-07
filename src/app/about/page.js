import React, { useEffect } from 'react'


import AOS from 'aos';

import dynamic from 'next/dynamic'
 
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

<Navbar />
 
  {/* <!-- home img --> */}
  <div className="position-relative mt-4 "  >
    <div className="logo_home ">
     <div  data-aos="fade-down" data-aos-delay="100">
      <img src="./img/Group 5733.png"   alt=""    loading="lazy" />
     </div> 
     <h2 className="d-flex align-items-center writeit justify-content-center mt-2"  data-aos="fade-up" data-aos-delay="100">
      </h2>       </div>
    <div className="h_img">
    <img alt="home" className="home_img" src="./img/DSC05559.png" />
    </div>
  </div>
<div className="container">
    <section className="row about align-items-center ">
      <div className="col-md-6 col-sm-12">
        <p  data-aos="fade-right" data-aos-delay="0" className="font-reto">ABOUT US</p>
        <h2  data-aos="fade-right" data-aos-delay="100" >What About
          Methods Brand?</h2>
          <p  data-aos="fade-right" data-aos-delay="200">Michods Café For Specialty Coffee Was Opened In 2018 In Jubail 
            Industrial City, And It Is Considered One Of The Unique Brands 
            In Its Field, As It Always Aims To Advance In The World Of Coffee, 
            From The Kingdom Of Saudi Arabia To The Global Markets.</p>
      </div>
      <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center ">
        <img src="./img/Group-6.png" alt=""  loading="lazy"  data-aos="fade-left"/>
      </div>
    </section>
{/* <!--B R A N D  S U C C E S S   --> */}
<section className="row about about_2 align-items-center ">
  <div className="col-md-6  col-sm-12 d-flex justify_content_center justify-content-end align-items-center ">
    <div className="w-100 home11_img d-flex flex-nowrap align-items-center justify-content-center " >
        <div className="d-flex justify-content-center w-100">
          <img src="./img/2022-06-23.png" alt=""  loading="lazy" className="mt-auto" data-aos="fade-right"/>
          <img src="./img/2021-01-21 (1).png" alt=""  loading="lazy" data-aos="fade-down" />
        </div>
        <div className="w-100 ">
          <img src="./img/2020-08-08.png" alt=""  loading="lazy" className=" m-auto d-flex justify-content-center" data-aos="fade-up"/>
        </div>
    </div>
  </div>
  <div className="col-md-6 col-sm-12">
    <p  data-aos="fade-left"data-aos-delay="0"  className="font-reto" > BRAND SUCCESS </p>
    <h2  data-aos="fade-left"data-aos-delay="100">Story Behind
      Brand Success </h2>
      <p  data-aos="fade-left" data-aos-delay="200">Michods Café For Specialty Coffee Was Opened In 2018 In Jubail 
        Industrial City, And It Is Considered One Of The Unique Brands 
        In Its Field, As It Always Aims To Advance In The World Of Coffee, 
        From The Kingdom Of Saudi Arabia To The Global Markets.</p>
  </div>
  </section>

</div>
</section>



<section className="p_time position-relative">
    <div className="Time position-relative">
      <div className="container "data-aos="fade-up" >
        <div className="Time-flex">
          <div className="adress" data-aos="fade-right" data-aos-delay="0">
            <p  className="font-reto">TIME LINE</p>
            <h2>Methods Coffee
              <br/>
              Time Line
            </h2>
          </div>
          <div className="Time1" >
         <div className="position-relative">
          <img src="./img/Group 24635.png" alt="" with="100px" height="100px" />
          <p className="position-absolute p">2022</p>
        </div>
        <div className="text-time-line">
            <h6>Jubail Industrial City</h6>
            <p>One of the existing branches of the Methods 
              brand with a distinctive view and a location 
              close to Al Fanateer Beach and the city 
              center in the commercial area.</p>
        </div>
          </div>
        </div>
        <div  className="Time2" >
        <div className="position-relative">
          <img src="./img/Group 24634.png" alt=""with="100px" height="100px" />
          <p className="position-absolute p">2022</p>
        </div>
        <div>

          <h6>Ajdan Walk (Khobar)</h6>
          <p>One of the existing branches of the Methods 
            brand with a distinctive view and a location 
            close to Al Fanateer Beach and the city 
            center in the commercial area.</p>
            </div> 
        </div>
        <div  className="Time3" >
         <div className="position-relative">
          <img src="./img/Group 24633.png" alt=""with="100px" height="100px" />
          <p className="position-absolute p">2022</p>
         </div> 
          <div>
          <h6>AlHassa Walk (Franchise)</h6>
          <p>One of the existing branches of the Methods 
            brand with a distinctive view and a location 
            close to Al Fanateer Beach and the city 
            center in the commercial area.</p>
          </div>
        </div>
      </div>
    </div>
    <img src="./img/f.png" alt="" className="position-absolute  start-0 img_bon"  loading="lazy"  data-aos="fade-right"/>
    <img src="./img/line.png" alt="" className="position-absolute end-0 resha"  loading="lazy"  data-aos="fade-left"/>
  </section>



<div className="container">
<section className="row justify-content-center num " >
  <div className="col-md-4 col-sm-12 d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="0">
    <img src="./img/coffee-beans.png" alt="" loading="lazy" />
    <h3>+ <span className="count">11</span> k </h3> 
    <p>different product</p>
  </div>
  <div className="col-md-4 col-sm-12 d-flex justify-content-center align-items-center " data-aos="fade-up" data-aos-delay="100">
    <img src="./img/llocation.png" alt="" loading="lazy" />
    <h3>+ <span className="count">700</span> k </h3> 
    <p>cup of specialty coffee</p>
  </div>
  <div className="col-md-4 col-sm-12 d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
    <img src="./img/coff.png" alt="" loading="lazy"  />
    <h3 className="count">3</h3> 
    <p>branch</p>
  </div>
</section>

</div>
<section className="new_2">
<div className="container">
  <h6 className="font-reto">NEWS AND EVENTS</h6>
  <h2>News & Events</h2>
  <div className="card_new_2  align-items-center ">
    <div className="News-content-abut-us position-relative"  data-aos="fade-up" data-aos-delay="0">
      <img src="./img/01.png" alt="" loading="lazy" className=" img-num "/>
      <img src="./img/EH4ughRXYAA3L0o.png" alt="" loading="lazy"/>
      <h6>Jubail Industrial<br/>
        City</h6>
        <div className="position-absolute top-0">
          <h6>2022</h6>
        </div>
    </div>
    <div className="News-content-abut-us position-relative"  data-aos="fade-up" data-aos-delay="100">
      <img src="./img/02.png" alt="" loading="lazy" className=" img-num "/>
      <img src="./img/Group 23906.png" alt="" loading="lazy"/>
      <h6>Ajdan Walk<br/>
        (Khobar)</h6>
        <div className="position-absolute top-0">
          <h6>2022</h6>
        </div>
    </div>
    <div className="News-content-abut-us position-relative"  data-aos="fade-up" data-aos-delay="200">
      <img src="./img/03.png" alt="" loading="lazy" className="img-num "/>
      <img src="./img/EH4ughRXYAA3L0o.png" alt="" loading="lazy"/>
      <h6>AlHassa Walk <br/>
        (Franchise)</h6>
        <div className="position-absolute top-0">
          <h6>2022</h6>
        </div>
    </div>
  </div>
  <div >
  <div className="triangle"></div>
  <div className="about_city">
    <div className="about_city_contant">
      <h2 data-aos="fade-up" data-aos-delay="0">
        About The City
      </h2>
      <p className="pb-4 " data-aos="fade-up" data-aos-delay="100">The Jubail Industrial City branch is one of the existing branches of the Methods brand, with a distinctive view and a location close to Al Fanateer Beach, and the city center in the commercial area. It opened in 2020 and expanded by adding a special breakfast menu and Belgian waffles</p>
      <img src="./img/DSC-2.png" alt="" className="w-100" loading="lazy" data-aos="fade-up" data-aos-delay="200"/>
    </div>
    <div className="map" >
      <iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
       src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
        <a href="https://www.maps.ie/population/"> </a>
        </iframe></div>
  </div>
  </div>
</div>
</section>
{/* <!-- </div> --> */}
{/* <!-- our --> */}

<section className="our">
  <div className="container">
    <div className=" d-flex our_flex align-items-center justify-content-between">
      <div className="color-p" data-aos="fade-right">
        <p  className="font-reto">PARTNERS</p>
        <h2>Our Strategic
          Partners.</h2>
          <p className="mt-2">Lorem Ipsum isss simply dummy textt of the printinnggl.</p>
          <div className=" p-3 d-flex our_logo mt-4" >
            <img src="./img/mzmliEvzFS.png" alt=""  loading="lazy"/>
            <div className="">
              <h6>October Roaster</h6>
              <p>A Strategic Partner for supplying speciality coffee.</p>
            </div>
          </div>
      </div>
      <div className="our_right">
        <div className="content-our-right">
          <div data-aos="fade-left" data-aos-delay="300">
            <img src="./img/aaaa.png" alt="" loading="lazy"/>
          </div>
          <div data-aos="fade-left" data-aos-delay="400">
            <img src="./img/mzmliEvzFS.png" alt="" loading="lazy"/>
          </div>
          <div data-aos="fade-left "data-aos-delay="500">
            <img src="./img/Hung.png" alt=""loading="lazy"/>
          </div>
        </div>
        <section className="content-our-right">
          <div data-aos="fade-left" data-aos-delay="300">
            <img src="./img/aaaa.png" alt="" loading="lazy"/>
          </div>
          <div data-aos="fade-left" data-aos-delay="400">
            <img src="./img/mzmliEvzFS.png" alt="" loading="lazy"/>
          </div>
          <div data-aos="fade-left" data-aos-delay="500">
            <img src="./img/Hung.png" alt="" loading="lazy"/>
          </div>
        </section>
      </div>
    </div>
  </div>
</section>



    </>
  )
}

export default page