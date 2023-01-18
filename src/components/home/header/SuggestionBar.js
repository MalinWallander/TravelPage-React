import "./SuggestionBar.css";
import locations from "../../../assets/locations.json";
import { Link } from "react-router-dom";

export default function SuggestionBar({
  searchState,
  setSearchState,
  maxSuggestions = 3,
}) {
  let resultArray = [];
  let regex = new RegExp("^" + searchState, "i");

  locations.forEach((country) => {
    if (country.countryName.match(regex)) {
      resultArray.push({
        name: country.countryName,
        path: `/location/${country.countryName}`,
      });
    }
    country.cities.forEach((city) => {
      if (city.cityName.match(regex)) {
        resultArray.push({
          name: city.cityName,
          path: `/location/${country.countryName}/${city.cityName}`,
        });
      }
    });
  });

  return (
    <div className="suggestion-wrapper">
      {resultArray.length === 0 ? (
        <div className="suggestion no-match">
          <span className="suggestion-text">No Destinations Match Search</span>
        </div>
      ) : (
        resultArray.map((value, index) => {
          if (index < maxSuggestions) {
            return (
              <Link key={index} className="link" to={value.path}>
                <div
                  className="suggestion"
                  onClick={() => setSearchState(value.name)}
                >
                  <span className="suggestion-text">{value.name}</span>
                </div>
              </Link>
            );
          } else return ('');
        })
      )}
    </div>
  );
}
