import React, { useEffect } from "react";
import "./home.css";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { DiNodejs } from "react-icons/di";
import { SiMongodb, SiTailwindcss, SiBootstrap, SiTypescript } from "react-icons/si";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "../About/About";
import Work from "../Work/Work";
import Contact from "../Contact/Contact";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="content-wrapper">
          {/* Animated Shape Box */}
          <div className="box"></div>

          {/* Text Content */}
          <div className="text-content">
            <p
              className="font-PlayfairDisplaySC font-bold text-4xl lg:text-6xl"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              Mern Stack Developer
            </p>
            <h1
              className="text-lg lg:text-2xl font-light mt-4"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Hello and welcome! I'm Mohiuddin Molla, a passionate MERN stack developer based in Germany.
            </h1>
            <div className="stack-section mt-10" data-aos="fade-up" data-aos-duration="2000">
              <h2 className="font-medium text-xl lg:text-2xl">Development Stack</h2>
              <div className="stack-icons mt-4 lg:w-[600px] md:w-[500px] w-80">
                <Marquee>
                  <ul className="flex gap-6 text-2xl lg:text-3xl">
                    <li className="text-[#E5532D]"><FaHtml5 /></li>
                    <li className="text-[#2E52E4]"><FaCss3Alt /></li>
                    <li className="text-[#F7E025]"><TbBrandJavascript /></li>
                    <li className="text-[#11DAFF]"><FaReact /></li>
                    <li className="text-[#2E52E4]"><SiTypescript /></li>
                    <li className="text-[#8FC708]"><DiNodejs /></li>
                    <li className="text-[#0D3937]"><SiMongodb /></li>
                    <li className="text-[#8E1AFC]"><SiBootstrap /></li>
                    <li className="text-[#1DC0CD]"><SiTailwindcss /></li>
                  </ul>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About></About>
      <Work></Work>
      <Contact></Contact>
    </>
  );
};

export default Home;
