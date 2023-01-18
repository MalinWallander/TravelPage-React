import { Link } from "react-router-dom";

const Location = ({ imgPath, city, country }) => {
  return (
    <Link className="link" to={`/location/${country}/${city}`}>
      <div className="destinationBox">
        <img
          className="imageDestination"
          src={imgPath}
          alt="destination"
        />
        <div className="destinationInfo">
          <div className="city">{city}</div>
          <div className="country">{country}</div>
        </div>
      </div>
    </Link>
  );
};

export default Location;
