// Works.jsx
import React from "react";
import Tilt from "react-tilt";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ProjectCard = ({ name,link, description, tags, image, source_code_link }) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='bg-tertiary p-5 rounded-2xl w-full h-full max-w-[360px] flex flex-col'
    >
      {/* Image */}
      <div className='relative w-full h-[230px]'>
        <img
          src={image}
          alt='project_image'
          className='w-full h-full object-cover rounded-2xl'
        />
        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={github}
              alt='source code'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>
      </div>

      {/* Text content with flex grow */}
      <div className='flex flex-col justify-between flex-1 mt-5'>
        <div>
          <a href={link} target="_blank" rel="noopener noreferrer"  className='text-white font-bold text-[24px]'>{name}</a>
          <p className='mt-2 text-secondary text-[14px] min-h-[60px]'>
            {description}
          </p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </Tilt>
  );
};


const Works = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <div className='w-full flex'>
        <p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          The following projects highlight my skills and experience through practical, 
          real-world examples. Each project includes a brief description along with links to the source code and live demos. 
          These works demonstrate my problem-solving abilities, proficiency with diverse technologies, 
          and effective project management.
        </p>
      </div>

      <div className='mt-20 relative'>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          loop={true}
          navigation={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={`project-${index}`} className="flex justify-center">
              <ProjectCard {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
