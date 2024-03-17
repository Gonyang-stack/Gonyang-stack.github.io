import { useEffect, useRef } from "react";
import "./MainContents.css"
import TechStack from "./TechStack";
import Title from "./Title";
import Contact from "./Contact";
import AboutMe from "./AboutMe";

function MainContents() {

  const titleRef = useRef(null);
  const aboutMeRef = useRef(null);
  const techStackRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const divRefs = [titleRef, aboutMeRef, techStackRef, contactRef];

  useEffect(() => {
    
    const handleTransitionEnd = (index) => {
      return () => {
        const divRef = divRefs[index].current;
        if (divRef.style.opacity === '0') {
          divRef.style.zIndex = -1;
        }
      }
    };

    divRefs.forEach((divRef, index) => {
      divRef.current.addEventListener('transitionend', handleTransitionEnd(index));
    })

    return () => {
      divRefs.forEach((divRef, index) => {
        divRef.current.removeEventListener('transitionend', handleTransitionEnd(index));
      })
    }
  }, [])

  const handleClick = (inputIndex) => {
    divRefs.forEach((divRef, index) => {
      if (inputIndex != index) {
        divRef.current.style.opacity = 0;
      }
      else {
        divRef.current.style.opacity = 1;
        divRef.current.style.zIndex = 0;
      }
    })
  }

  return (
    <>
      <nav className="Navbar">
        <ul>
          <li onClick={() => handleClick(0)}><strong>Home</strong></li>
          <li onClick={() => handleClick(1)}><strong>About me</strong></li>
          <li onClick={() => handleClick(2)}><strong>Tech stack</strong></li>
          <li><strong>Project</strong></li>
          <li onClick={() => handleClick(3)}><strong>Contact</strong></li>
        </ul>
      </nav>
      <Title ref={titleRef} />
      <AboutMe ref={aboutMeRef} />
      <TechStack ref={techStackRef} />
      <Contact ref={contactRef} />
    </>
  );
}

export default MainContents;
