import type { NextPage } from "next";
import { Card } from "../components/card";
import styles from "../styles/Home.module.css";
import favicon from "../public/favicon.ico";
import React, { useEffect } from "react";
import Styles from "../styles/card.module.css";

const imageList: StaticImageData[] = [favicon, favicon, favicon, favicon];
const delay = 2500;

const Home: NextPage = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef<null | number>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();

    timeoutRef.current = window.setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className={Styles.cardMain}>
      <div className={Styles.slideshow}>
        <div
          className={Styles.slideshowSlider}
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {imageList.map(() => (
            <div className={Styles.slide}>
              <Card image={imageList[index]} />
            </div>
          ))}
        </div>

        <div className={Styles.slideshowDots}>
          {imageList.map((_, idx) => (
            <div
              key={idx}
              className={`${Styles.slideshowDot} ${
                index === idx ? Styles.active : ""
              }
            `}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
/*
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundColor }}
          ></div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}*/
