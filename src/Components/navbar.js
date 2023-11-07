"use client"
 import Link from 'next/link'
import { Offcanvas, Button } from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      
      <Modal.Body>
      <form action="" id="searchBox-nav">
        <div className="searchBox-nav">
            <input className="searchInput-nav" type="text" name="search" placeholder="Search..." />
            <button className="searchButton-nav" type="button">
                <i className="fa-solid fa-magnifying-glass fa-lg"></i>
            </button>
        </div>
        </form>
      </Modal.Body>
      
    </Modal>
  );
}

const navbar = (props) => {
  const [modalShow, setModalShow] = React.useState(false);


  useEffect(() => {
    const scrollThreshold = 300;

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const targetElement = document.querySelector(".submenu");
      const navSection = document.querySelector(".nav_padding");
      const navbarElement = document.querySelector(".navbar");
      const bord = document.querySelector(".bord");

      if (scrollY > scrollThreshold) {
        targetElement.classList.add("shadowed");
      } else {
        targetElement.classList.remove("shadowed");
      }

      if (scrollY >= 300) {
        navSection.classList.add("nav_active");
        navbarElement.classList.add("no-border");
        bord.style.display = "none";
      } else {
        navSection.classList.remove("nav_active");
        navbarElement.classList.remove("no-border");
        bord.style.display = "block";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const [scrolled, setScrolled] = useState(0);

  const scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = `${(scrollPx / winHeightPx) * 100}%`;


    setScrolled(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollProgress);

    return () => {
      window.removeEventListener("scroll", scrollProgress);
    };
  }, []);

  const progressContainerStyle = {
    background: "var(--unnamed-color-8e8e8e)",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    height: "5px",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 9999,
  };

  const progressBarStyle = {
    height: "5px",
    background: "#000",
    width: scrolled,
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
  
  <div className="progress-container" style={progressContainerStyle}>
        <div className="progress-bar" style={progressBarStyle} />
      </div>

 
<nav className="nav_padding" >
      <section className="navbar">
		  <div className="search-navbar lap_nav " onClick={() => setModalShow(true)}>
      <i className="fa-solid fa-magnifying-glass fa-lg"></i>
			</div>
        <div className="d-flex justify-content-center align-items-center " >
         <Link  href="/"> <img src="./img/logoo.png" alt="" loading="lazy" /></Link>
          <h6 className="lap_nav"><Link href={"/about"} >About Us</Link> </h6>
          <h6  className="lap_nav"><Link  href={"/products"}>Products</Link></h6>
          <h6  className="lap_nav"><Link  href={"/catering-services"}>Catering Services </Link></h6>
          <h6  className="lap_nav"><Link  href={"/news-events"}>News & Events</Link></h6>
          <h6  className="lap_nav"><Link  href={"/find-store"}>Find a Store </Link></h6>
          <Link  href=""   className="lap_nav"> <h6 className="d-flex flex-nowrap g justify-content-center align-items-center justify-content-center align-items-center">  
            <i className="fa-solid fa-earth-americas" ></i>  AR
          </h6>
          </Link>
          <Link  href={"/franchises"} className="lap_nav" > 
          <button className="nav_butt">
            <span>Franchises</span>
          </button>
          </Link>
          </div>
          <div className="y">
        
              <div variant="primary" onClick={handleShow}>
                <img src="./img/Group -4.png" alt=""  loading="lazy" />
              </div>
              <div className="search-navbar " onClick={() => setModalShow(true)}>
      <i className="fa-solid fa-magnifying-glass fa-lg"></i>
			</div>
          </div>
          <ul className="dropdownmenu lap_nav lap_nav" >
            <li>
              <img src="./img/Group -4.png" alt=""  loading="lazy" />
              <div className="bord"></div>
              <ul className="submenu">
                <Link href={"/hiring"}> 
                  <li className="one_li">Hiring</li>
                </Link>
                <Link  href={"/loyality-point"}> 
                  <li>Loyalty Program</li>
                </Link>
              </ul>
            </li>
          </ul>
      </section>
    </nav>





 
  {/* <!--  --> */}
  <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src="./img/logoo.png" alt="" loading="lazy" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex justify-content-center align-items-center">
            <h6 className="">
              <Link href={"/about"}>About Us</Link>
            </h6>
            <h6 className="">
              <Link href={"/products"}>Products</Link>
            </h6>
            <h6 className="">
              <Link href={"/catering-services"}>Catering Services</Link>
            </h6>
            <h6 className="">
              <Link href={"/news-events"}>News & Events</Link>
            </h6>
            <h6 className="">
              <Link href={"/find-store"}>Find a Store</Link>
            </h6>
            <h6>
              <Link href={"/contact-us"}>CONTACT US</Link>
            </h6>
            <h6>
              <Link href={"/hiring"}>join us</Link>
            </h6>
            <Link href="">
              <h6 className="d-flex flex-nowrap g justify-content-center align-items-center">
                <i className="fa-solid fa-earth-americas"></i> AR
              </h6>
            </Link>
            <Link href={"/franchises"}>
              <button className="nav_butt">
                <span>Franchises</span>
              </button>
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>














 

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />


    </div>
  )
}

export default navbar