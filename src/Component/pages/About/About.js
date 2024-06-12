import React, { useEffect } from "react";
import aboutimg from "../../../image/about-img.png";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { BiLogoMongodb } from "react-icons/bi";
import { FaNode } from "react-icons/fa";
import { SiFirebase, SiTailwindcss } from "react-icons/si";
import { DiCss3, DiJavascript1, DiReact, DiMongodb } from "react-icons/di";
import { FaSuitcaseRolling } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./about.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Marquee from "react-fast-marquee";
import gif from "../../../image/coading gif.gif"

const About = () => {






  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  document.addEventListener("DOMContentLoaded", function () {
    AOS.init();
  });

  return (
    <div className="bg-white lg:flex lg:justify-center lg:items-center lg:mb-20  h-screen w-screen" id="about">
   
      <section className="grid lg:grid-cols-2">
      
        <div className=" bg-white">
               {/* section title */}
      <h3 className=" lg:font-PlayfairDisplaySC md:mt-40 lg:ms-40 lg:text-4xl text-2xl flex justify-center">
              ABOUT ME
             
            </h3>
            <hr className="w-40 text-[#c28639] lg:hidden md:hidden ms-[7rem]"/>
          <div className="lg:flex  lg:float-right justify-center " data-aos="fade-right">
            <img
              src={gif}
              className="lg:h-[50rem] lg:w-[40rem] md:w-[12rem] md:h-[12rem] h-[15rem] w-[15rem] lg:ms-0  ms-20"
              alt=""
            />
          </div>


          {/* projects info  */}
        </div>

        <div className=" flex items-center  ">
          <div
            className=" lg:w-[60rem]  lg:h-96  "
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            
          

            <p className="lg:text-2xl ">
              Hi, I'm  a passionate junior MERN stack developer with a love for coding and JavaScript. I specialize in building dynamic and efficient web applications .
            </p>


            <div className="flex lg:gap-5 lg:mt-10 gap-3">
              <ul className="lg:leading-[3rem] leading-10 lg:font-[400] lg:text-xl font-PlayfairDisplaySC  ">
                <li>Name:</li>
                <li>birthDay:</li>
                <li>Address:</li>
                <li>Zipcode:</li>
                <li>Email:</li>
                <li>Phone:</li>
              </ul>
              <ul className="lg:leading-[3rem] leading-10  lg:font-[300] lg:text-lg font-Lato     ">
                <li>Mohiuddin Molla</li>
                <li>March-10-1999</li>
                <li>Ransbachstraße 18,Güglingen</li>
                <li>74363</li>
                <li>mohiuddin.tanvir.mollah@gmail.com</li>
                <li>+491739425426</li>
              </ul>
            </div>
            <div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <button className="bg-yellow-500 px-10 lg:py-2 text-white mt-5 mb-2 ">
                <a href="resume.pdf" download="resume.pdf">
                  Download CV
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* skill section */}
    </div>
  );
};

export default About;
