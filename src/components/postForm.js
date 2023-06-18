import React from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import API from "../util/postCodeUtil";

const PostForm = (props) => {
  const navigate = useNavigate();
  const [autoFillData, setAutoFillData] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  const getData = (e) => {
    if (e.length === 0) {
      setAutoFillData([]);
    } else if (e.target.value.length === 0) {
      setAutoFillData([]);
    } else {
      API.autoFillPostCodes(e.target.value)
        .then((response) => {
          setAutoFillData(response.data.result);
        })
        .catch((e) => {
          props.setShowError({
            ...props.showError,
            error: true,
            message: e.message,
          });
        });
    }
  };

  const debounce = (fn, delay) => {
    let timer;
    return function () {
      let context = this,
        args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    };
  };

  const getAutoFill = debounce(getData, 400);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value.length <= 0) props.setError(true);
    else {
      API.validatePostCodes(e.target[0].value).then((response) => {
        if (!response.data.result) {
          props.setError(true);
          setAutoFillData([]);
        } else {
          props.setError(false);
          setAutoFillData([]);
          navigate(`/${e.target[0].value}`);
        }
      });
    }
  };

  return (
    <Form className="searchContainer" onSubmit={handleSubmit}>
      <div className="inputContainer">
        <input
          className="inputbox"
          type="text"
          id="postcode"
          aria-describedby="postCodeExample"
          onKeyUp={(e) => getAutoFill(e)}
          placeholder={"Type postcode here"}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            if (e.target.value === "") {
              props.setError(false);
            }
          }}
        />
        <div
          className="clear"
          onClick={() => {
            setInputValue("");
            getAutoFill("");
            props.setError(false);
          }}
        >
          <span>X</span>
        </div>
      </div>
      {autoFillData && autoFillData.length != 0 && (
        <div
          className="autoFill"
          data-testid="autoFill"
          style={{
            opacity: `${autoFillData && autoFillData.length != 0 ? "1" : "0"}`,
          }}
        >
          {autoFillData.slice(0, 15).map((value, index) => {
            return (
              <Link key={index} to={`/${value}`}>
                {value}
              </Link>
            );
          })}
        </div>
      )}

      {props.error && (
        <p className="text-danger mt-2 pt-2">
          Invalid Input Provided! Please Select from Dropdown
        </p>
      )}

      {
        <button
          type="submit"
          className="submitBtn"
          style={{
            display: `${
              autoFillData && autoFillData.length != 0 ? "none" : "block"
            }`,
          }}
        >
          SEARCH
        </button>
      }
    </Form>
  );
};

export default PostForm;
