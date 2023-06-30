import { Component } from "react";
import { useParams } from "react-router-dom";
import React from "react";

function WithParam(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

export default WithParam;
