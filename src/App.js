import "./App.css";
import Post from "./components/Post";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import React, { useState, useEffect } from "react";

const App = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(1);

  const handleScroll = () => {
    // find current scroll position

    const currentScrollPos = window.pageYOffset;

    // set state based on location info (explained in more detail below)
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <div className="App">
      <header visible={visible === false ? 0 : 1}>
        <Navigation  />
      </header>
      <Post />
      <Footer />
    </div>
  );
};

export default App;
