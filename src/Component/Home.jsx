import React from "react";
import Navbar from "../Pages/Navbar";
import Foto from "../Assets/img/Foto Profil.png";
import P1 from "../Assets/Icon/NgajiYuk__3_-removebg-preview.png";
import P2 from "../Assets/Icon/github2-removebg-preview.png";
import { FaLaravel } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { FaPhp } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import "./Home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="wrap">
        <div className="decoration1"></div>
        <div className="wrap1">
          <section className="home" id="home">
            <div className="home1">"HELLO!"</div>
            <div className="home2">
              My Name is Asror Alva
              <br />I am a Fullstack Developer
            </div>
          </section>
        </div>
        <div className="wrap2">
          <section className="about" id="about">
            <div className="about1">
              <h1>My Profile</h1>
            </div>
            <div className="about-content">
              <div className="about2">
                <div className="bg-image-keren">
                  <img src={Foto} alt="Profile" />
                </div>
              </div>
              <div className="about3">
                <p>
                  Hello, I am Muhammad Asror Alva, currently studying
                  Informatics Engineering at Sebelas Maret University. As a
                  passionate and dedicated student, I am very interested in the
                  world of technology, especially in the fields of software
                  development and data analysis I have a special interest in web
                  application development and data analysis. During my academic
                  journey, I have developed a solid foundation in programming
                  languages such as Python, JavaScript, PHP, and Flutter, and
                  have experience in web development and database management. I
                  enjoy solving complex problems and am always eager to learn
                  new technologies and methods that can enhance my skills and
                  knowledge.
                </p>
                <div class="icon-icon">
                  <div className="icon-icon">
                    <FaPhp className="icon php" style={{ color: "#777BB4" }} />
                    <FaPython
                      className="icon python"
                      style={{ color: "#3776AB" }}
                    />
                    <SiJavascript
                      className="icon javascript"
                      style={{ color: "#F0DB4F" }}
                    />
                    <SiFlutter
                      className="icon flutter"
                      style={{ color: "#02569B" }}
                    />
                    <FaLaravel
                      className="icon laravel"
                      style={{ color: "#FF2D20" }}
                    />
                    <FaReact
                      className="icon react"
                      style={{ color: "#61DAFB" }}
                    />
                    <FaNodeJs
                      className="icon nodejs"
                      style={{ color: "#68A063" }}
                    />
                    <SiMysql
                      className="icon mysql"
                      style={{ color: "#4479A1" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="box-about"></div>
          </section>
        </div>
        <div className="wrap3">
          <section className="portfolio" id="portfolio">
            <div className="wrap-porto">
              <h1>My Project</h1>
            </div>
            <div className="content-porto">
              <div className="container-porto1">
                <a href="https://github.com/AsrorAlva/AdaKost.git">
                  <img src={P2} alt="Ada Kost" />
                </a>
                <a href="https://github.com/AsrorAlva/AdaKost.git">Ada Kost</a>
              </div>
              <div className="container-porto1">
                <a href="https://project-ngajiyuk.vercel.app/">
                  <img src={P2} alt="Ngaji yuk" />
                </a>
                <a href="https://project-ngajiyuk.vercel.app/">Ngaji yuk</a>
              </div>
              <div className="container-porto1">
                <a href="https://github.com/tripplanerUNS/FE-FIX.git">
                  <img src={P2} alt="Trip Planner" />
                </a>
                <a href="https://github.com/tripplanerUNS/FE-FIX.git">
                  Trip Planner
                </a>
              </div>
            </div>
          </section>
        </div>
        <div className="wrap4">
          <section className="contact" id="contact">
            <div className="wrap-contact">
              <h1>Contact</h1>
            </div>
            <div className="content-contact">
              <p>
                If you'd like to get in touch, feel free to reach out via {" "}
                <a href="https://www.instagram.com/asroralva/">Instagram</a> {" "}
                or connect with me on {""}
                <a href="https://www.linkedin.com/in/asroralva/">LinkedIn</a>.
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className="decoration2"></div>
    </div>
  );
}

export default Home;
