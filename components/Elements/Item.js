import ItemStyle from "../../styles/Elements/Item.module.scss";

import { useState, useEffect } from "react";

import Image from "next/image";

const Item = ({ img, title, description, price, available, go }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    go === true ? setVisible(true) : null;
  }, [go]);

  return (
    <div
      className={`${ItemStyle.container} ${visible ? ItemStyle.visible : ""}`}
    >
      <div className={ItemStyle.img}>
        <Image
          preload="true"
          loading="eager"
          src={img}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={ItemStyle.info}>
        <div className={ItemStyle.title_description}>
          <h3>{title}</h3>
          <span>{description}</span>
        </div>
        <div className={ItemStyle.price_available}>
          <span>
            {price} {available ? "Disponible" : "Indisponible"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Item;
