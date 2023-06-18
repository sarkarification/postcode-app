import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "../App.css";

const Header = () => {
  const location = useLocation();
  const [pathName, setPathName] = useState("/");

  useEffect(() => {
    setPathName(location.pathname);
  }, [location.pathname]);

  return (
    <div className="headerContainer">
      <Link className="notLink" to={`/`}>
        <h5>Postcodes for the UK</h5>
      </Link>
      {pathName !== "/" && (
        <Link to={`/`}>
          <h5>Home</h5>
        </Link>
      )}
    </div>
  );
};

export default Header;
