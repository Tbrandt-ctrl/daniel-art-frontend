import ContactBtnStyle from "../../styles/Elements/ContactBtn.module.scss";

const ContactBtn = () => {
  return (
    <div className={ContactBtnStyle.container}>
      <a href="https://www.instagram.com/danielbrndt/" target="_blank">
        <span>contact me</span>
      </a>
      <h4>
        Website designed by{" "}
        <a href="https://kolocagency.com/" targer="_blank">
          Koloc Agency
        </a>
      </h4>
    </div>
  );
};

export default ContactBtn;
