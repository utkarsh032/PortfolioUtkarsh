import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="bg-tertiary p-4 rounded-2xl sm:w-[350px] w-full">
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full rounded-2xl" />

          <div className="absolute inset-0 flex justify-end m-3 card-img-hover">
            <div onClick={() => window.open(source_code_link, "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer" rel="noopener noreferrer">
              <img src={github} alt="GitHub" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <a href="/" className="text-white font-bold text-[24px] uppercase animate-pulse">{name}</a>
          <p className="mt-2 text-secondary text-[14px] line-clamp-3">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectsPerPage, setProjectsPerPage] = useState(3);

  useEffect(() => {
    // Adjust number of projects per page based on screen size
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setProjectsPerPage(1);  // 1 project per page on small screens
      } else if (window.innerWidth < 1024) {
        setProjectsPerPage(2);  // 2 projects per page on medium screens
      } else {
        setProjectsPerPage(3);  // 3 projects per page on large screens
      }
    };

    // Initial check
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Slice the projects array to show only the projects for the current page
  const limitedProjects = projects.slice(currentIndex, currentIndex + projectsPerPage);

  // Handle the "Next" and "Previous" buttons
  const goToNext = () => {
    if (currentIndex + 1 < projects.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <div>
        <div>
          <div className="flex justify-between items-center">
            <motion.div variants={textVariant()}>
              <span className="bg-[#915EFF] uppercase text-lg font-medium px-4 py-2 rounded-t-md rounded-br-md">My work</span>
              <h2 className={`${styles.sectionHeadText} ml-2`}>Projects.</h2>
            </motion.div>

            <Link
              to="/projects"
              className="hover:underline text-[#915EFF] font-medium leading-10 text-2xl"
            >
              More ..
            </Link>
          </div>

          <div className="w-full flex">
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
              These projects showcase my skills, with brief descriptions, code repositories, and live demos, demonstrating my ability to solve problems and work with different technologies.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Project Section */}
      <div className="mt-20">
        <div className="flex justify-between items-center mb-4 ">
          {/* Previous Button */}
          <button onClick={goToPrevious} disabled={currentIndex === 0} className=" absolute z-10 btn-prev text-2xl sm:text-3xl p-2 rounded-full bg-[#915EFF] text-white disabled:bg-gray-400">
            <FaAngleLeft />
          </button>

          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {limitedProjects.map((project, index) => (
              <ProjectCard key={`project-${index}`} index={index} {...project} />
            ))}
          </div>

          {/* Next Button */}
          <button onClick={goToNext} disabled={currentIndex + 1 >= projects.length} className=" absolute z-10 right-0 btn-next text-2xl sm:text-3xl p-2 rounded-full bg-[#915EFF] text-white disabled:bg-gray-400">
            <FaAngleRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
