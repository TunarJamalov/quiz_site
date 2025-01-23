import React from "react";
import fCClogo from "../images/b.webp";

const FCCLogo: React.FC = () => {
  return <img className="fcc-logo" src={fCClogo} alt="freeCodeCamp logo" />;
};
export default React.memo(FCCLogo);
