import React from "react";
import hero from "../assets/images/hero.png";
const Hero = () => {
  const setScroll = (e) =>{
    const gotoItem = e.target.dataset.goto;
    const getElem = document.getElementsByClassName(`${gotoItem}`)[0];
    if(!getElem) return ;
    getElem.scrollIntoView({behavior: "smooth"});
  }
  const social_media = [
    "logo-dribbble",
    "logo-behance",
    "logo-linkedin",
  ];
  return (
    <section
      id="home"
      className="min-h-screen py-5 pt-16 flex md:flex-row flex-col items-center  gap-6 "
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-[80%] h-full object-cover" />
      </div>
      <div className="flex-1">
        <div onClick={setScroll} className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-black font-bold">
            <span className="md:text-cyan-600 md:text-6xl text-5xl ">
              Hello!
              <br />
            </span>
            My name is <span>Ismail Nisar</span>
          </h1>
          <h4 className="md:text-2xl text-lg  md:leading-normal leading-5 mt-5 font-bold text-gray-600">
            UI/UX Designer
          </h4>
          <button data-goto="contact-me" className="btn-primary mt-4">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div key={icon} className="text-gray-600 hover:text-white">
                <ion-icon name={icon}></ion-icon>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
