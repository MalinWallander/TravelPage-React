import { Link } from "react-router-dom";

const Hotel = ({ imgPath, city, country, nameHotel }) => {
  return (
    <Link className="link" to={`/location/${country}/${city}/${nameHotel}`}>
      <div className="hotelBox">
        <img className="imageHotel" src={imgPath} alt="hotel" />
        <div className="hotelInfo">
          <div className="name">{nameHotel}</div>
          <Link className="link" to={`/location/${country}/${city}`}>
            <div className="location">
              <img src="../Images/map-pin-line.png" alt="" />
              {city}, {country}
            </div>
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default Hotel;
