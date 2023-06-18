import React from "react";
import PostForm from "../components/postForm";
import ErrorHandler from "../components/error";

import "./Home.css";

const Home = (props) => {
  const [error, setError] = React.useState(false);
  const [showError, setShowError] = React.useState({
    error: false,
    message: "",
  });

  return (
    <div className="container home">
      {!showError.error && <PostForm error={error} setError={setError} />}
      {showError.error && (
        <ErrorHandler showError={showError} setShowError={setShowError} />
      )}
    </div>
  );
};

export default Home;
