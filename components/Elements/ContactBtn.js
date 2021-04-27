import ContactBtnStyle from "../../styles/Elements/ContactBtn.module.scss";

const ContactBtn = () => {
  return (
    <div className={ContactBtnStyle.container}>
      <a href="https://www.instagram.com/danielbrndt/" target="_blank">
        <span>contact me</span>
      </a>
      <h4>Website designed by Koloc Agency</h4>
    </div>
  );
};

export default ContactBtn;
