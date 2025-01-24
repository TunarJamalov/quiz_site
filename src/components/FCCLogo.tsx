import React from "react";
import fCClogo from "../images/b.webp";

const FCCLogo: React.FC = () => {
  return <img className="fcc-logo" src={fCClogo} alt="developerquiz logo" />;
};
export default React.memo(FCCLogo);
