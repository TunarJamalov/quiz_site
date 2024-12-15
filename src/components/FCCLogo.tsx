import React from "react";
import fCClogo from "../images/au3.webp";

const FCCLogo: React.FC = () => {
  return <img className="fcc-logo" src={fCClogo} alt="freeCodeCamp logo" />;
};
export default React.memo(FCCLogo);
