import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  omnifood,
  udemy,
  destination,
  book,
  bharatestate,


  insta,
  linkedin,
  twitter,
  github,

  tt,
  ttz,
  szz

} from "../assets";

const services = [
  {
    title: "@utkarsh032",
    icon: github,
    link: "https://github.com/utkarsh032"
  },
  {
    title: "@utkarshraz",
    icon: insta,
    link: "https://www.instagram.com/utkarshraz/"
  },
  {
    title: "@utkarshraj032",
    icon: linkedin,
    link: "https://www.linkedin.com/in/utkarsh-raj032/"
  },
  {
    title: "@UTKARSHRAZ1",
    icon: twitter,
    link: "https://twitter.com/UTKARSHRAZ1"
  },
];





const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
];

const statics = [
  {
    name: "Problem Solving",
    eff: tt,
  },
  {
    name: "Coding hours",
    eff: ttz,
  },
  {
    name: "Hours of Soft Skill",
    eff: szz,
  }
];




const projects = [
  {
    name: "Omnifood",
    description:
      "your premier destination for convenient and delicious food ordering. Designed for the modern food  Omnifood seamlessly connects you delights, right at your fingertips",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: omnifood,
    source_code_link: "https://github.com/utkarsh032/omnifood",
  },
  {
    name: "destination",
    description:
      "Destination is a modern travel app designed to simplify hotel bookings and trip planning for travelers. Built with React and SCSS, it offers a responsive and user-friendly interface. Explore and organize your journeys effortlessly with seamless integration of REST APIs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: destination,
    source_code_link: "https://github.com/utkarsh032/destination-app-",
  },
  {
    name: "Udemy-Clone",
    description:
      "It is an online learning platform that mimics the core features of Udemy. It includes a video player for course content, detailed course data, and user authentication with email validation. Additional features like Udemy Business and course posting enhance the platform, offering a comprehensive learning and teaching experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: udemy,
    source_code_link: "https://github.com/utkarsh032/Udemy/tree/main/client",
  },
  {
    name: "bharate-state",
    description:
      "Bharat-Estate is a modern real estate platform for buying, selling, and renting properties in India. It features secure user authentication, real-time updates, and a responsive design for a seamless experience. Powered by a robust backend, it ensures efficiency and scalability for property management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongoose",
        color: "pink-text-gradient",
      },
    ],
    image: bharatestate,
    source_code_link: "https://github.com/utkarsh032/Bharat-Estate",
  },
  {
    name: "book",
    description:
      "The Book Store App is a comprehensive platform designed to enhance the book-buying and selling experience. This application offers features such as browsing best-seller books, managing seller accounts, accessing promotional offers, and engaging with blog content.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: book,
    source_code_link: "https://github.com/utkarsh032/book-store-app",
  },
];

export { technologies, projects, services, statics };
