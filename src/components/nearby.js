import { Link } from "react-router-dom";

const Nearby = (props) => {
  const nearbyRows = props.nearby.map((postcode, index) => {
    return (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>
          <Link to={`/${postcode.postcode}`}>{postcode.postcode}</Link>
        </td>
        <td>{postcode.country}</td>
        <td>{postcode.region}</td>
      </tr>
    );
  });
  return (
    <div className="nearbycontainer">
      <h5>Nearby Postcodes </h5>
      <hr />
      <table>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">PostCode</th>
            <th scope="col">Country</th>
            <th scope="col">Region</th>
          </tr>
        </thead>
        <tbody>{nearbyRows}</tbody>
      </table>
    </div>
  );
};

export default Nearby;
