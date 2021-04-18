import ContactBtnStyle from "../../styles/Elements/ContactBtn.module.scss";

const ContactBtn = () => {
  return (
    <div className={ContactBtnStyle.container}>
      <a href="https://www.instagram.com/danielbrndt/" target="_blank">
        <button>CONTACT</button>
      </a>

      <h4>
        Website by{" "}
        <a href="https://kolocagency.com/" target="_blank">
          Koloc Agency
        </a>
      </h4>
    </div>
  );
};

export default ContactBtn;
