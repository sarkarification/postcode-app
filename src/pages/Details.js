import React from "react";
import API from "../util/postCodeUtil";
import { useParams } from "react-router-dom";
import ShowDetails from "../components/showDetails";
import ErrorHandler from "../components/error";

import "./Details.css";

const Details = (props) => {
  const { postCode } = useParams();
  const [detailsApi, setDetailsApi] = React.useState({
    postcode: {},
    nearest: [],
  });
  const [loading, setLoading] = React.useState(true);
  const [showError, setShowError] = React.useState({
    error: false,
    message: "",
  });

  React.useEffect(() => {
    setLoading(true);
    const services = [
      API.getPostCode(postCode),
      API.getNearestPostCodes(postCode),
    ];

    Promise.all(services)
      .then(([getPostCodeResponse, getNearestPostCodesResponse]) => {
        let newData = Object.assign({}, detailsApi);

        if (getPostCodeResponse.status === 200)
          newData = { ...newData, postcode: getPostCodeResponse.data.result };
        else newData = { ...newData, postcode: {} };
        if (getNearestPostCodesResponse.status === 200)
          newData = {
            ...newData,
            nearest: getNearestPostCodesResponse.data.result,
          };
        else newData = { ...newData, nearest: {} };
        setLoading(false);
        setDetailsApi(newData);
      })
      .catch((e) => {
        setShowError({ ...showError, message: e.message, error: true });
        setLoading(false);
      });
  }, [postCode]);

  return (
    <div className="container d-flex flex-column justify-content-around align-items-center mt-5 pt-2 h-100">
      {!showError.error && !loading && (
        <ShowDetails
          details={detailsApi.postcode}
          nearby={detailsApi.nearest}
        />
      )}
      {!showError.error && loading && (
        <div className="spinner-grow text-light" role="status">
          <span className="sr-only"></span>
        </div>
      )}
      {showError.error && (
        <ErrorHandler showError={showError} setShowError={setShowError} />
      )}
    </div>
  );
};

export default Details;
