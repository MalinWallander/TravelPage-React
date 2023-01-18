import FilteredHotel from "../home/destinations/FilteredHotel";
import hotels from "../../assets/hotels.json";
import "./CityPage.css";
import { useParams, Link } from "react-router-dom";
import locations from "../../assets/locations.json";

const CityPage = () => {
  const params = useParams();
  const city = params.city;
  const country = params.country;

  const countryObject = locations.filter(
    (location) => country === location.countryName
  )[0];
  const cityObject = countryObject.cities.filter(
    (location) => city === location.cityName
  )[0];
  const imgPath = "../" + cityObject.imgPath;

  return (
    <div className="page">
      <img className="imgCityPage" src={imgPath} alt="" />
      <div className="infoCityPage">
        <div className="cityNamePage">{city}</div>
        <div className="countrySmallNamePage">{country}</div>
      </div>
      <div className="hotelsContainerCityPage">
        {hotels
          .filter((hotel) => hotel.cityName === city)
          .map((hotel) => (
            <Link
              className="link"
              key={hotel.nameHotel}
              to={`/location/${country}/${city}/${hotel.nameHotel}`}
            >
              <FilteredHotel
                nameHotel={hotel.nameHotel}
                city={hotel.cityName}
                country={hotel.countryName}
                imgPath={"../" + hotel.imgPath}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default CityPage;
