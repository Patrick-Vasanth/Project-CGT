import { useNavigate } from "react-router-dom";
import React from "react";

function WithNavigation(Component) {
  return (props) => <Component {...props} navigate={useNavigate()} />;
}

export default WithNavigation;
