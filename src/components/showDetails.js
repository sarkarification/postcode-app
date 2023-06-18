import React from "react";
import Nearby from "./nearby";
import PostCodeDetails from "./postCodeDetails";

const ShowDetails = (props) => {
  return (
    <>
      <PostCodeDetails {...props} />
      <Nearby {...props} />
    </>
  );
};

export default ShowDetails;
