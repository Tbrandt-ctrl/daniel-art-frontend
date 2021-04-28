import ItemStyle from "../../styles/Elements/Item.module.scss";

import Image from "next/image";

const Item = ({ img, title, description, price, available }) => {
  return (
    <div className={`${ItemStyle.container} `}>
      <div
        className={ItemStyle.img}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
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
