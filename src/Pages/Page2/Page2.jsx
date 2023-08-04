import { useEffect } from "react";
import "./Page2.css";
import CardList from "../../Components/CardList/CardList";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Page2 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl2 = gsap.timeline({
      scrollTrigger: {
        scroller: ".main",
        markers: false,
        start: "top -120%",
        end: "top -130%",
        scrub: 3,
      },
    });

    tl2.to(".main", {
      backgroundColor: "#fff",
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="page2">
      <h1>
        <div>Featured</div>
        <div>Work</div>
      </h1>
      <CardList />
    </div>
  );
};
export default Page2;
