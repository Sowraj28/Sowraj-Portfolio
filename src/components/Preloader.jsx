import React, { useEffect, useState, useRef } from "react";
import Lottie from "lottie-react";

export default function Preloader({ children }) {
  const [loading, setLoading] = useState(true);
  const [animationData, setAnimationData] = useState(null);
  const lottieRef = useRef();

  useEffect(() => {
    // Load the Lottie JSON from public folder
    fetch("/lottie/Simple-Loading.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load Lottie animation:", err));

    // Simulate a loading delay
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#000",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9999,
        }}
      >
        {animationData && (
          <Lottie
            lottieRef={lottieRef}
            animationData={animationData}
            loop
            autoplay
            style={{ width: 250, height: 250 }}
          />
        )}
      </div>
    );
  }

  // Once loaded, render the app
  return <>{children}</>;
}
