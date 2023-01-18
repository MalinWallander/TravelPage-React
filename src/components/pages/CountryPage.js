import FilteredCity from "../home/destinations/FilteredCity.js";
import "./CountryPage.css";
import locations from "../../assets/locations.json";
import { useParams, Link } from "react-router-dom";

const CountryPage = () => {
  const params = useParams();
  const country = params.country;
  const countryObject = locations.filter(
    (location) => country === location.countryName
  )[0];
  const imgPath = "../" + countryObject.imgPath;

  return (
    <div className="page">
      <img className="imgCountryPage" src={imgPath} alt="" />
      <div className="infoCountryPage">
        <div className="countryBigNamePage">{country}</div>
      </div>
      <div className="citiesContainerCityPage">
        {countryObject.cities.map((city) => (
          <Link
            className="link"
            to={`/location/${country}/${city.cityName}`}
            key={city.cityName}
          >
            <FilteredCity
              key={city.cityName}
              city={city.cityName}
              imgPath={city.imgPath}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CountryPage;
