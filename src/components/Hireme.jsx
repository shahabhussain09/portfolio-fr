import React from "react";
import hireMe from "../assets/images/hireMe.png"
const Hireme = () => {
  const info = [
    { text: "Years Experiance", count: "04" },
    { text: "Completed Projects", count: "26" },
    { text: "Companies Work", count: "06" },
  ];
  return (
    <section id="about" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl text-black font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">
          My Intoduction
        </p>
      </div>
      <div className=" bg-gray-200 relative px-8 rounded-2xl py-5 max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row  flex-col-reverse items-center ">
      <div className="flex md:flex-row flex-col-reverse md:gap-6 gap-12  max-w-6xl mx-auto items-center">
          <div className="">
            <div className="text-black ">
              <p className="text-justify leading-7 text-[13px] w-11/12 lg:pr-52 ">
              I am a dedicated Figma UI/UX designer who thrives on intricate details and possesses a fervent
commitment to crafting seamless digital experiences. My journey commenced with six months of
intense self-study, during which I honed my skills in UI/UX design from the comfort of my own
home. Building upon this strong foundation, I embarked on an enriching internship at Apptex
Software Solutions. Under the guidance of seasoned industry professionals, I not only gained
invaluable practical experience but also refined my design abilities to a higher degree.

Currently, I am ecstatic to be contributing as a full-time employee, utilizing my creativity and
expertise to deliver design solutions that surpass expectations. Alongside my commitment to my
primary role, I've also taken on freelance projects, further diversifying my experience and
expanding my horizons
              </p>
              <div className="flex mt-10 items-center gap-4  ">
                {info.map((content) => (
                  <div key={content.text}>
                    <h4 className="md:text-4xl text-2xl font-semibold text-black">
                      {content.count}
                      <span className="text-cyan-600">+</span>
                    </h4>
                    <span className="md:text-base text-sm">{content.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
           <img src={hireMe} alt="" className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover" />
      </div>
      </div>
    </section>
  );
};

export default Hireme;
