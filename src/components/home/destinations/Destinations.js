import React from "react";
import locations from "../../../assets/locations.json";
import Location from "./Location";
import './Destinations.css'

const Destinations = () => {
  return (
    <div className="popularDestinations">
      <h2 className="title">Popular Destinations</h2>
      <div className="destinationsContainer">
        <Location
          city={locations[0].cities[0].cityName}
          country={locations[0].countryName}
          imgPath={locations[0].cities[0].imgPath}
        />
        <Location
          city={locations[1].cities[0].cityName}
          country={locations[1].countryName}
          imgPath={locations[1].cities[0].imgPath}
        />
        <Location
          city={locations[2].cities[1].cityName}
          country={locations[2].countryName}
          imgPath={locations[2].cities[1].imgPath}
        />
        <Location
          city={locations[6].cities[0].cityName}
          country={locations[6].countryName}
          imgPath={locations[6].cities[0].imgPath}
        />
        <Location
          city={locations[3].cities[1].cityName}
          country={locations[3].countryName}
          imgPath={locations[3].cities[1].imgPath}
        />
        <Location
          city={locations[4].cities[0].cityName}
          country={locations[4].countryName}
          imgPath={locations[4].cities[0].imgPath}
        />
      </div>
    </div>
  );
};

export default Destinations;
