import { useRef, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Page1.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Page1 = () => {
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: h1Ref.current,
        scroller: ".main",
        markers: false,
        start: "top 27%",
        end: "top 0",
        scrub: 3,
      },
    });

    tl.to(
      h1Ref.current,
      {
        x: -100,
      },
      "unity"
    );

    tl.to(
      h2Ref.current,
      {
        x: 100,
      },
      "unity"
    );

    tl.to(
      videoRef.current,
      {
        width: "90%",
      },
      "unity"
    );

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="page1">
      <Navbar />
      <h1 ref={h1Ref}>A design studio made</h1>
      <h2 ref={h2Ref}>to elevate your brand</h2>
      <p>
        We build brand identities, creative websites, and visual narratives that
        showcase the full extent of your potential. Based in Washington DC,
        working with clients world-wide.
      </p>
      <video ref={videoRef} autoPlay loop muted src="/MainVideo.mp4"></video>
    </div>
  );
};

export default Page1;
