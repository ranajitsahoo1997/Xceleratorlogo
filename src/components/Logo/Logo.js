import React, { useEffect, useRef } from "react";
import "./Logo.css";

function Logo() {

  const divRefs = useRef([]); // Array to hold references for all divs
  const nameRef = useRef(null); // Ref for the .name section
  const titleRef = useRef(null); // Ref for the .title in .name
  const taglineRef = useRef(null); 

  useEffect(() => {
    const animateDivs = () => {
      let currentIndex = 0;

      const triggerNextAnimation = () => {
        // if (currentIndex >= divRefs.current.length) return; // Stop when all divs are animated
        console.log(currentIndex)
        console.log(">>>"+divRefs.current.length);
        
        if (currentIndex!==0 && currentIndex >= divRefs.current.length-9) {
          
          titleRef.current.classList.remove("hidden");
          titleRef.current.classList.add("hello");
          
          titleRef.current.addEventListener('animationend',()=>{
            taglineRef.current.classList.remove("hidden");
          taglineRef.current.classList.add("animate");
          })
          
          return  () => {
            titleRef.removeEventListener("animationend", ()=>{
              taglineRef.current.classList.remove("hidden");
          taglineRef.current.classList.add("animate");
            });
          };
        }
        const currentDiv = divRefs.current[currentIndex];
        
        currentDiv.classList.remove("hidden");

        currentDiv.classList.add("animate");

        currentDiv.addEventListener(
          "animationend",
          () => {
            currentIndex += 1; // Move to the next div
            triggerNextAnimation(); // Trigger the next div's animation
          },
          { once: true } // Ensure the listener only fires once
        );
      };

      // Start the animation sequence with the first div
      triggerNextAnimation();
    };

    animateDivs();
  }, []);

  console.log('hello');
  

  return <>
    <div className="logo">
      {/* <div ref={div1Ref} className="div1"></div>
      <div ref={div2Ref} className="div2 hidden"></div>
      <div ref={div3Ref} className="div3 hidden"></div>
      <div ref={div4Ref} className="div4 hidden"></div>
      <div ref={div5Ref} className="div5 hidden"></div>
      <div ref={div6Ref} className="div6 hidden"></div>
      <div ref={div7Ref} className="div7 hidden"></div>
      <div ref={div8Ref} className="div8 hidden"></div>
      <div ref={div9Ref} className="div9 hidden"></div> */}
      {["div1", "div2", "div3", "div4","div5","div9","div6","div7","div8"].map((text) => (
        <div
          key={text}
          ref={(el) => el && divRefs.current.push(el)} // Dynamically add refs for each div
          className={`${text} hidden`}
        >
        </div>
      ))}
    </div>
    <div ref={nameRef} className='name '>
        <h1 ref={titleRef} className='title hidden'>XCELERATOR</h1>
        <i><h1 ref={taglineRef} className='tagline hidden'>accelerate your career</h1></i>
    </div>
    
    </>
}

export default Logo;
