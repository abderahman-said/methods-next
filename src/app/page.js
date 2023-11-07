"use client"
import React, { createContext, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Navbar  from '../Components/navbar';
import Slider from "react-slick";
import Link from 'next/link';
import FancyVideo from "react-videojs-fancybox";
import { Image } from 'antd';
import AOS from 'aos';

const App = () => { 
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
    slidesToScroll: 3,
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
      
{/*  section home  */}
  <section className="home">
  <Navbar />

    {/*  home img  */}
    <div className="position-relative mt-4 "  >
      <div className="logo_home ">
       <div  data-aos="fade-down" data-aos-delay="100">
        <img src="./img/Group 5733.png"   alt=""  loading="lazy" />
       </div> 
        <h2 className="d-flex align-items-center writeit justify-content-center mt-2"  ></h2> 
      </div>
      <div className="h_img">
        <img alt="home" className="home_img" src="./img/DSC05559.png" />
      </div>
    </div>
    {/* <!-- A B O U T U S  --> */}
    <div className="container">
      <div className="row about align-items-center " >
        <div className="col-md-6 col-sm-12">
          <p className="font-reto" data-aos="fade-right" data-aos-delay="0">ABOUT US</p>
          <h2  data-aos="fade-right" data-aos-delay="100">What About
            <br/>
            Methods Brand?</h2>
            <p  data-aos="fade-right" data-aos-delay="200">Michods Café For Specialty Coffee Was Opened In 2018 In Jubail 
              Industrial City, And It Is Considered One Of The Unique Brands 
              In Its Field, As It Always Aims To Advance In The World Of Coffee, 
              From The Kingdom Of Saudi Arabia To The Global Markets.</p>
              <Link href={"/about"}>
                <h6 data-aos="fade-right" className="font-reto" data-aos-delay="300">
                READ More    
                <i className="fa-solid fa-arrow-right"></i>
              </h6></Link>
        </div>
        <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center "  data-aos="fade-left">
          <img src="./img/Group-6.png" alt=""  loading="lazy"/>
        </div>
      </div>
    </div>

  </section>



  
  {/*   Time Line   */}
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
{/* num */}
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


<img src="./img/logo-methods-back.png" alt="" className="logo-methods-back"/>

{/* <!-- OUR PRODUCTS --> */}
<section className="mobile row align-items-center "   >
  <div className="col-sm-12 col-md-6 " data-aos="fade-right">
    <p data-aos="fade-right" data-aos-delay="0"  className="font-reto">OUR PRODUCTS</p>
    <h2 data-aos="fade-right" data-aos-delay="100">Just A Taste With
      Methods Menu.</h2>
      <p data-aos="fade-right" data-aos-delay="200">Lorem Ipsum is siimply dummmy texxt of the printingg andd typesetting industry. Lorem Ipsum haas beeen the industry's standdard dummmy texxt ever sinnce the 1500s, whenn ann unknown printer took a galley of typee and scrammbled it to make a type specimen book.</p>
       <Link href={"/products"}> 
       <h6   className="font-reto" data-aos="fade-right" data-aos-delay="300">
          Explore Our Menu
          <i className="fa-solid fa-arrow-right"></i>
        </h6></Link>
  </div>
  <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center " data-aos="fade-left">
    <img  alt=""  loading="lazy" src="./img/g1.png" />
  </div>
</section>
{/* <!--  --> */}

<section className="caros mt-4" >
 
<Slider {...settings}>
        <div>
          <Link href={"/product"}>
    <div data-aos="fade-up" data-aos-delay="700" className="product-card-content" > 
      <img src="./img/MaskGroup4.png" alt="" loading="lazy"/>
      <h6>Drip Coffee</h6>
      <p>small description of one or two lines</p>
    </div>
  </Link>
        </div>
        <div>
          <Link href={"/product"}>
    <div data-aos="fade-up" data-aos-delay="700" className="product-card-content" > 
      <img src="./img/MaskGroup4.png" alt="" loading="lazy"/>
      <h6>Drip Coffee</h6>
      <p>small description of one or two lines</p>
    </div>
  </Link>
        </div>
        <div>
         <Link href={"/product"}>
    <div data-aos="fade-up" data-aos-delay="700" className="product-card-content" > 
      <img src="./img/MaskGroup4.png" alt="" loading="lazy"/>
      <h6>Drip Coffee</h6>
      <p>small description of one or two lines</p>
    </div>
  </Link>
        </div>
        <div>
          <Link href={"/product"}>
    <div data-aos="fade-up" data-aos-delay="700" className="product-card-content" > 
      <img src="./img/MaskGroup4.png" alt="" loading="lazy"/>
      <h6>Drip Coffee</h6>
      <p>small description of one or two lines</p>
    </div>
  </Link>
        </div>
        <div>
          <Link href={"/product"}>
    <div data-aos="fade-up" data-aos-delay="700" className="product-card-content" > 
      <img src="./img/MaskGroup4.png" alt="" loading="lazy"/>
      <h6>Drip Coffee</h6>
      <p>small description of one or two lines</p>
    </div>
  </Link>
        </div>
        <div>
          <Link href={"/product"}>
    <div data-aos="fade-up" data-aos-delay="700" className="product-card-content" > 
      <img src="./img/MaskGroup4.png" alt="" loading="lazy"/>
      <h6>Drip Coffee</h6>
      <p>small description of one or two lines</p>
    </div>
  </Link>
        </div>
        <div>
          <Link href={"/product"}>
    <div data-aos="fade-up" data-aos-delay="700" className="product-card-content" > 
      <img src="./img/MaskGroup4.png" alt="" loading="lazy"/>
      <h6>Drip Coffee</h6>
      <p>small description of one or two lines</p>
    </div>
  </Link>
        </div>
        <div>
          <Link href={"/product"}>
    <div data-aos="fade-up" data-aos-delay="700" className="product-card-content" > 
      <img src="./img/MaskGroup4.png" alt="" loading="lazy"/>
      <h6>Drip Coffee</h6>
      <p>small description of one or two lines</p>
    </div>
  </Link>
        </div>
        <div>
          <Link href={"/product"}>
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


<section className="carrd">
    <p  className="font-reto">OUR SERVICES</p>
    <h2  >Check Our Services</h2>
    <div className="cardd row align-items-center ">
        <div className="col-md-4 col-sm-12 card-content"   >
         <img src="./img/ge.png" alt="" loading="lazy" />
           <h6>Franchise</h6>
            <h5>(Franchise)</h5>
                <p className="p_colo_r">Lorem Ipsum is siimply dummmy texxt of the 
          printingg andd typesetting industry.</p>
         </div>
        <div className="col-md-4 col-sm-12 card-content"  >

        <img src="./img/applications.png" alt="" loading="lazy"/> 
        <h6>Nugttah Services</h6> 
         <h5> (Loyalty Points)</h5>  
        <p className="p_colo_r">Lorem Ipsum is siimply dummmy texxt of the 
          printingg andd typesetting industry.</p>
      </div>
       <div className="col-md-4 col-sm-12 card-content"  >
   
        <img src="./img/food-tray.png" alt="" loading="lazy"/>
         <h6>Catering Services</h6> 
          <h5>(Catering Services)</h5>
       
           <p className="p_colo_r">Lorem Ipsum is siimply dummmy texxt of the 
          printingg andd typesetting industry.</p>
  </div>
  </div>
</section>
{/* <!-- N E W S  A N D E V E N T S --> */}
 

<div className="news position-relative">
    <h6 className="text-center our_productsp font-reto"  >NEWS AND EVENTS</h6>
    <h2>News & Events</h2>
    <Tabs>
    <TabList>
      <Tab>Photo</Tab>
      <Tab>Video</Tab>
    </TabList>

    <TabPanel>
    <div className="row  justify-content-center gap">
 
      <div className="col-md-4 hv col-sm-12 hover01 news_img_padding"data-aos="fade-up" data-aos-delay="0">
       <Link href={"/news-events"}> <figure> <img src="./img/waffles-with-chocolate-sauce-wooden-plate.png" alt="" loading="lazy"/></figure></Link>
      </div>
      <div className="col-md-4 hv col-sm-12 hover01 news_img_padding"data-aos="fade-up" data-aos-delay="100">
      <Link href={"/news-events"}>
        <figure>
          <img src="./img/1-1465726.png" alt="" loading="lazy"/>
        </figure>
      </Link>
      </div>
      <div className="col-md-4 hv col-sm-12 hover01 news_img_padding" data-aos="fade-up" data-aos-delay="200">
      <Link href={"/news-events"}>
        <figure>
          <img src="./img/2.png" alt="" loading="lazy"/>
        </figure>
      </Link>
      </div>
      <div className="col-md-6 col-sm-12 position-relative news_img_padding hv hover01" data-aos="fade-right" >
      <Link href={"/news-events"}> 
      <figure>
        <img src="./img/DSC-3.png" alt="" loading="lazy"/>
      </figure>
      </Link>
        <section className="di_img position-absolute" >
          <div className="">
            <h6>demo title of the news of one or teo lines</h6>
            <h6>Apr 17, 2023</h6>
          </div>
        </section>
      </div>
      <div className="col-md-6 col-sm-12 position-relative hv hover01 news_img_padding" data-aos="fade-left" >
      <Link href={"/news-events"}>
        <figure>
        <img src="./img/so.png" alt="" loading="lazy"/>
      </figure>
      </Link>
        <section className="position-absolute di_img " >
          <div className="">
            <h6>demo title of the news of one or teo lines</h6>
            <h6>Apr 17, 2023</h6>
          </div>
        </section>
      </div>
    </div>
    </TabPanel>
    <TabPanel>
    <div className="row  justify-content-center pb-3 gap" >
    <div className="col-md-6 news_img_padding col-sm-12 position-relative hv hover01"  data-aos="fade-right" >
    <div className="promo-video">
             <div className="waves-block">
                <div className="waves wave-1"></div>
                <div className="waves wave-2"></div>
                <div className="waves wave-3"></div>
              </div>
          </div> 
      <FancyVideo
        source="./img/animation_lnjzaan7.mp4"
        poster="./img/page8 (4).png"
        id={"sintel"} >
        </FancyVideo>
      <section className="di_img position-absolute" id="di_img">
        <div className="">
          <h6>Demo Title</h6>
          <p>One of the existing branches of the Methods .</p>
        </div>
      </section>
    </div>
    <div className="col-md-6 news_img_padding col-sm-12 position-relative hv"  data-aos="fade-left" >
      <div className="promo-video">
             <div className="waves-block">
                <div className="waves wave-1"></div>
                <div className="waves wave-2"></div>
                <div className="waves wave-3"></div>
              </div>
          </div> 
      <FancyVideo
        source="./img/animation_lnjzaan7.mp4"
        poster="./img/DSC05559.png"
        id={"sintel1"} >
        </FancyVideo>
      <section className="di_img position-absolute" id="di_img">
        <div className="">
          <h6>Demo Title</h6>
          <p>One of the existing branches of the Methods .</p>
        </div>
      </section>
    </div>
    <div className="col-md-4 news_img_padding col-sm-12 position-relative hv hover01"  data-aos="fade-right" >
    <div className="promo-video">
             <div className="waves-block">
                <div className="waves wave-1"></div>
                <div className="waves wave-2"></div>
                <div className="waves wave-3"></div>
              </div>
          </div> 
      <FancyVideo
        source="./img/animation_lnjzaan7.mp4"
        poster="./img/page8 (4).png"
        id={"sintel2"} >
        </FancyVideo>
      <section className="di_img position-absolute" id="di_img">
        <div className="">
          <h6>Demo Title</h6>
          <p>One of the existing branches of the Methods .</p>
        </div>
      </section>
    </div>
    <div className="col-md-4 news_img_padding col-sm-12 position-relative hv"  data-aos="fade-left" >
    <div className="promo-video">
             <div className="waves-block">
                <div className="waves wave-1"></div>
                <div className="waves wave-2"></div>
                <div className="waves wave-3"></div>
              </div>
          </div> 
      <FancyVideo
        source="./img/animation_lnjzaan7.mp4"
        poster="./img/DSC05559.png"
        id={"sintel3"} >
        </FancyVideo>
      <section className="di_img position-absolute" id="di_img">
        <div className="">
          <h6>Demo Title</h6>
          <p>One of the existing branches of the Methods .</p>
        </div>
      </section>
    </div>
    <div className="col-md-4 news_img_padding  col-sm-12 position-relative hv"  data-aos="fade-left" >
    <div className="promo-video">
             <div className="waves-block">
                <div className="waves wave-1"></div>
                <div className="waves wave-2"></div>
                <div className="waves wave-3"></div>
              </div>
          </div> 
      <FancyVideo
        source="./img/animation_lnjzaan7.mp4"
        poster="./img/DSC05559.png"
        id={"sintel4"} >
        </FancyVideo>
      <section className="di_img position-absolute" id="di_img">
        <div className="">
          <h6>Demo Title</h6>
          <p>One of the existing branches of the Methods .</p>
        </div>
      </section>
    </div>
  </div>
    </TabPanel>
  </Tabs>
 
 
   <Link href={"/news-events"}>
     <h5 data-aos="zoom-in"  className="font-reto">
      READ More 
      <i className="fa-solid fa-arrow-right"></i>
    </h5>
    </Link>
  </div>
  <img src="./img/resha2.png" alt="" className="position-absolute  end-0 resha2" loading="lazy"/>
</div>

{/* </div> */}

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

export default App;