import React from "react";

function Footer() {
  const currYear = new Date().getFullYear();

  return (
    <Footer className="f1">
      <p>Copyright @ {currYear}</p>
    </Footer>
  );
}
export default Footer;
