import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="bg-black text-white min-h-screen w-screen">
      <div className=" relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to ExZ
        </p>

        <AnimatedTitle
          title="Disc<b>o</b>ver the most <br /> Awaiting Cultural fest <b>EUPHONIOUS</b>x ZYZZVA"
          containerClass="mt-5 text-center"
        />

        <div className="about-subtext">
          <p>EUPHONIOUSxZYZZVA the most awaiting cultural fest</p>
          <p className="text-gray-500">
            We are back with more energy and enthusiasm.To make the year more memorable</p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="College.gif"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
