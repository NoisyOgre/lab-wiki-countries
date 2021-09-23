import React, { useState } from 'react';
import countries from '../countries.json';
import { NavLink } from 'react-router-dom';

function CountriesList() {
  const [countriesList] = useState(countries);
  return (
      <div class="col-5">
        <div>
    <>
      <h3>Countries List</h3>
      <ul class="list-group">
        {countriesList.map((country, index) => {
          return (
            <li class="list-group-item list-group-item-action" key={index}>
              <NavLink exact to={`/${country.alpha3Code}`}>
                <img
                  src={`https://www.countryflags.io/${country.alpha2Code}/flat/32.png`}
                />
                {country.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
        </div>
    </div>
  );
}

export default CountriesList;
