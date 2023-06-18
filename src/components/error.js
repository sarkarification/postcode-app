import { Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ErrorHandler = (props) => {
  const navigate = useNavigate();
  return (
    <Alert variant="danger">
      <Alert.Heading>Postcode not found!</Alert.Heading>
      <p>{props.showError.message}</p>
      <Button
        className="m-2"
        variant="danger"
        onClick={() => {
          props.setShowError({ ...props.showError, error: false });
          navigate(`/`);
        }}
      >
        Retry?
      </Button>
    </Alert>
  );
};

export default ErrorHandler;
