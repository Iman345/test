import React from "react";
import footerImg from "./img/iclogo.png";
function Footer() {
  return (
    <div
      className="footer display-flex align-center justify-space-between paddingz-10"
      style={{ padding: "10px 20px", zIndex: "100" }}
    >
      <img src={footerImg} alt="" className="footer__img pointer" />
      <span
        className="copyright"
        style={{ color: "#ffff", fontSize: "14px", opacity: "0.75" }}
      >
       Iman Raffee 1845550
      </span>
    </div>
  );
}

export default Footer;
