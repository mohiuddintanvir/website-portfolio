import React, { useEffect } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { DiDoctrine } from "react-icons/di";
import homeimg from "../../../image/home-img.png";
import About from "../About/About";
import Work from "../Work/Work";
import Contact from "../Contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import Marquee from "react-fast-marquee";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { DiNodejs } from "react-icons/di";
import { SiMongodb, SiTailwindcss, SiBootstrap } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

const socilaLink = [
  { name: "logo-linkedin" },
  { name: "logo-github" },
];

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="bg-white h-screen w-screen flex justify-center items-center">
        <div className="lg:flex lg:justify-center lg:items-center  h-screen w-screen lg:mt-0 mt-[20rem]" id="/">
          <div className="box flex lg:hidden"></div>
          <div className="lg:z-10 lg:justify-end  lg:flex lg:items-center ">
            <div className=" lg:mt-40">
              <div className="">
                 <p
                className="font-PlayfairDisplaySC font-[400] lg:font-[700] lg:text-[5rem] md:ms-10 md:font-[700] md:text-[3rem] flex justify-center lg:ml-2 "
                data-aos="fade-up"
                data-aos-duration="1200"
              >
             Mern Stack Developer
              </p>
              <h1
                className="lg:text-[1.25rem] md:flex md:justify-center font-Lato lg:font-[300] lg:ms-0 ms-3 "
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                Hello and welcome! I'm Mohiuddin Molla, a passionate MERN stack
                developer based in Germany.
              </h1>
               <div className="">
                <div className="" data-aos="fade-up" data-aos-duration="2000">
                  
                  <div className="lg:flex   lg:mt-20  mt-10 gap-3">
                    <div className="md:ms-[13rem]">
                      <h1 className="font-PlayfairDisplaySC text-[.75rem] lg:font-[500] md:text-xl  lg:text-[1.25rem] lg:ms-[0rem] ms-[8rem] lg:mb-[0rem] mb-3">
                        Development Stack
                      </h1>
                    </div>
                    <div className="lg:w-[40rem] md:w-[50rem] w-[23.5rem]">
                      <Marquee>
                        <ul className="lg:gap-5 flex text-[1rem] md:text-[3rem] md:gap-10 gap-5  lg:text-[2rem]">
                          <li className="text-[#E5532D]">
                            <FaHtml5 />
                          </li>
                          <li className="text-[#2E52E4]">
                            <FaCss3Alt />
                          </li>
                          <li className="text-[#F7E025]">
                            <TbBrandJavascript />
                          </li>
                          <li className="text-[#11DAFF]">
                            <FaReact />
                          </li>
                          <li className="text-[#2E52E4]">
                          <SiTypescript />
                          </li>
                          <li className="text-[#8FC708]">
                            <DiNodejs />
                          </li>
                          <li className="text-[#0D3937]">
                            <SiMongodb />
                          </li>
                          <li className="text-[#8E1AFC]">
                            <SiBootstrap />
                          </li>
                          <li className="text-[#1DC0CD]">
                            <SiTailwindcss />
                          </li>
                        </ul>
                      </Marquee>
                    </div>
                  </div>
                </div>
              </div>
              </div>
             
             
            </div>
          </div>
          <div className="box hidden lg:flex"></div>
        </div>
      </div>
      <About />
      <Work />
      <Contact />
    </>
  );
};

export default Home;
