import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import "./styles.css";

export default function App() {
  const [replay, setReplay] = useState(true);
  // Placeholder text data, as if from API
  const placeholderText = [
    { type: "heading1", text: "Framer Motion" },
    {
      type: "heading2",
      text: "Animating responsive text!"
    }
  ];

  const container = {};

  // Quick and dirt for the example
  const handleReplay = () => {
    setReplay(!replay);
    setTimeout(() => {
      setReplay(true);
    }, 600);
  };

  return (
    <motion.div
      className="App"
      initial="hidden"
      // animate="visible"
      animate={replay ? "visible" : "hidden"}
      variants={container}
    >
      <div className="container">
        {placeholderText.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </div>
      <button onClick={handleReplay}>
        Replay <span>⟲</span>
      </button>
    </motion.div>
  );
}
