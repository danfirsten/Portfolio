import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Online Marketplace",
    img: "/onlinemarketplace.png",
    desc: "This project includes user authentication, enabling users to securely register, log in, and manage their accounts. Users can communicate with each other through an integrated messaging system, enhancing the interactive experience. Additionally, each user has access to a personalized dashboard where they can manage their listings, track their transactions, and view their profile information. Form handling and customization are also key aspects, ensuring that the forms are intuitive and meet the needs of the users. This project has been a comprehensive exercise in building a full-featured web application with Django, focusing on both back-end functionality and front-end user experience.",
    github: "https://github.com/danfirsten/Online-Marketplace",
  },
  {
    id: 2,
    title: "Self Driving Car - No Libraries",
    img: "/selfdrivingcar.png",
    desc: "This project demonstrates a basic self-driving car simulation built from scratch using JavaScript without any external libraries. The simulation includes car driving mechanics, artificial sensors for environment detection, collision detection, a custom neural network, and a genetic algorithm for evolving the car's driving abilities.",
    github: "https://github.com/danfirsten/SelfDriving-Car",
  },
  {
    id: 4,
    title: "ListenUp: Music Social Media App",
    img: "/musicapp2.png",
    desc: "ListenUp is an innovative social media app designed for music enthusiasts who love to share, discover, and engage in musical duels. With ListenUp, users can easily share their favorite tracks, challenge friends to music duels, and explore new music curated by a vibrant community. Whether you're a casual listener or a hardcore music aficionado, ListenUp provides a dynamic platform to connect with others through the universal language of music. Dive into your musical journey with ListenUp!",
    github: "https://github.com/ListenUp-Dev",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.github} target="_blank" rel="noopener noreferrer">
              <button>Navigate GitHub</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
