import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";

export default function Footer() {
  const [animationData, setAnimationData] = useState(null);
  const lottieRef = useRef();

  useEffect(() => {
    // Load the Lottie JSON animation
    fetch("/lottie/Anima-Bot.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load Lottie animation:", err));
  }, []);

  return (
    <footer
      className="footer"
      style={{
        width: "100%",
        height: "200px", // increased height for bigger animation
        overflow: "hidden",
        background: "transparent", // merge with root background
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      {animationData && (
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop
          autoplay
          style={{ width: "80%", maxWidth: "275px", height: "auto" }} // bigger & responsive
        />
      )}
    </footer>
  );
}
