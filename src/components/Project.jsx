import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.jpg";
import project5 from "../assets/images/project5.png";
import land1 from "../assets/images/land.png";
import land2 from "../assets/images/land1.png";
import land3 from "../assets/images/land2.png";
import { Dialog } from "@mui/material";

// ... (import statements)

const Project = () => {
  const [openStates, setOpenStates] = React.useState([
    false, // Open state for Slide 1
    false, // Open state for Slide 2
    false, // Open state for Slide 3
    // ... add more open states for each slide as needed
  ]);

  const handleOpen = (index) => {
    const updatedOpenStates = [...openStates];
    updatedOpenStates[index] = true;
    setOpenStates(updatedOpenStates);
  };

  const handleClose = (index) => {
    const updatedOpenStates = [...openStates];
    updatedOpenStates[index] = false;
    setOpenStates(updatedOpenStates);
  };

  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl text-black font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">
          My Awesome Work
        </p>
      </div>
      <div className=" pt-20">
      <Swiper
  breakpoints={{
    1024: {
      slidesPerView: 2,
    },
  }}
  slidesPerView={1}
  spaceBetween={30}
  pagination={{
    clickable: true,
  }}
  modules={[Pagination]}
  className="mySwiper w-[80%]"
>
          <SwiperSlide>
            <Button onClick={() => handleOpen(0)}>
              <img src={project1} alt="" />
            </Button>
            <Dialog open={openStates[0]} onClose={() => handleClose(0)} maxWidth={""}>
              <img src={land1} alt="" />
            </Dialog>
          </SwiperSlide>

          <SwiperSlide>
            <Button onClick={() => handleOpen(1)}> {/* Change to handleOpen(1) */}
              <img src={project2} alt="" />
            </Button>
            <Dialog open={openStates[1]} onClose={() => handleClose(1)} maxWidth={""}> {/* Change to openStates[1] */}
              <img src={land2} alt="" />
            </Dialog>
          </SwiperSlide>

          <SwiperSlide>
            <Button onClick={() => handleOpen(2)}> {/* Change to handleOpen(2) */}
              <img src={project3} alt="" />
            </Button>
            <Dialog open={openStates[2]} onClose={() => handleClose(2)} maxWidth={""}> {/* Change to openStates[2] */}
              <img src={land3} alt="" />
            </Dialog>
          </SwiperSlide>

          {/* ... Repeat for other slides */}
        </Swiper>
      </div>
    </section>
  );
};

export default Project;
