const PostCodeDetails = (props) => {
  return (
    <div className="postCodeDetails">
      <h4> {props.details.postcode}</h4>
      <div className="separator"></div>
      <div className="postCodeRegion">
        <p> {`${props.details.region}, ${props.details.country}`} </p>
        <p>{props.details.parliamentary_constituency}</p>
      </div>
    </div>
  );
};

export default PostCodeDetails;
