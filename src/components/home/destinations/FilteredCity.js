const FilteredCity = ({ imgPath, city }) => {
  return (
    <div className="cityBoxCountryPage">
      <img className="imageCityCountryPage" src={imgPath} alt="hotel" />
      <div className="cityInfoCountryPage">
        <div className="nameCityCountryPage">{city}</div>
      </div>
    </div>
  );
};

export default FilteredCity;
