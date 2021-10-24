import React, { useState } from "react";
import Image from "next/image";
import style from "../styles/card.module.css";

export const Card = ({ image }: card_props_interface) => {
  return (
    <section className={style.slideshowSlider}>
      <Image src={image} className={style.displayedImage} />
      <div>
          <Image
            src={image}
          />
      </div>
    </section>
  );
};

interface card_props_interface {
  image: StaticImageData;
}
