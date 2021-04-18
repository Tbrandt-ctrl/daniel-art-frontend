import ListStyle from "../../styles/Pages/List.module.scss";

import Item from "../Elements/Item";

const List = () => {
  const data = [
    {
      img:
        "/img/17042021-Tableau-no_cartel--3_symboles_marquent_le_paysage--082020-CROPPED.jpg",
      title: "3 Symboles marquent le paysage",
      description: "70x50cm, Huile sur toile",
      price: "70 €",
      available: true,
    },
    {
      img:
        "/img/17042021-Tableau-no_cartel--Bobby_Ds_Store_Hours--2020-CROPPED.jpg",
      title: "Bobby D's Store Hours",
      description: "90x60cm, Huile sur Toile",
      price: "160 €",
      available: true,
    },
    {
      img: "/img/17042021-Tableau-no_cartel--Boites_roses--2020-CROPPED.jpg",
      title: "Boites roses",
      description: "50x40cm, Huile sur Toile",
      price: "40 €",
      available: true,
    },
    {
      img:
        "/img/17042021-Tableau-no_cartel--Croix_et_maison,Lorraine--082020-CROPPED.jpg",
      title: "Croix et maison, Lorraine",
      description: "60x50cm, Huile sur Toile",
      price: "50 €",
      available: false,
    },
    {
      img:
        "/img/17042021-Tableau-no_cartel--Dennis_Rodman--16072020-CROPPED.jpg",
      title: "Dennis Rodmann",
      description: "30x24cm, Huile sur Toile",
      price: "40 €",
      available: false,
    },
    {
      img:
        "/img/17042021-Tableau-no_cartel--Paysage_Lorrain--082020-CROPPED.jpg",
      title: "Paysage Lorrain",
      description: "50x40cm, Huile sur Toile",
      price: "40 €",
      available: true,
    },
    {
      img:
        "/img/17042021-Tableau-no_cartel--Red_Monolyth_in_Desert--2020-CROPPED.jpg",
      title: "Red Monolyth in Desert",
      description: "70x50cm, Acrylique sur Toile",
      price: "30 €",
      available: true,
    },
    {
      img:
        "/img/17042021-Tableau-no_cartel--Revolver_und_eine_Kugel_Der_Mann_und_die_Gewalt--15072020-CROPPED.jpg",
      title: "Revolver und eine Kugel, Der Mann und die Gewalt",
      description: "100x70cm, Huile sur Toile",
      price: "130 €",
      available: true,
    },
    {
      img:
        "/img/17042021-Tableau-no_cartel--Terrain_Vague_Derriere_City_Stade--29062020-CROPPED.jpg",
      title: "Terrain vague derrière le City Stade",
      description: "70x50cm, Acryligque sur bois (aggloméré)",
      price: "90 €",
      available: true,
    },
  ];

  return (
    <div className={ListStyle.container}>
      {data.map((item) => {
        return (
          <Item
            img={item.img}
            title={item.title}
            description={item.description}
            price={item.price}
            available={item.available}
          />
        );
      })}
    </div>
  );
};

export default List;
