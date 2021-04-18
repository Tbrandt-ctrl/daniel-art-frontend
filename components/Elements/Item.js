import ItemStyle from "../../styles/Elements/Item.module.scss";

import Image from "next/image";

const Item = ({ img, title, description, price, available }) => {
  return (
    <div className={ItemStyle.container}>
      <div className={ItemStyle.img}>
        <Image src={img} layout="fill" objectFit="cover" />
      </div>
      <div className={ItemStyle.info}>
        <div className={ItemStyle.title_description}>
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        <div className={ItemStyle.price_available}>
          <h4>{price}</h4>
          <span>{available ? "Disponible" : "Indisponible"}</span>
        </div>
      </div>
    </div>
  );
};

export default Item;
