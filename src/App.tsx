import React, { useEffect, useState } from 'react';
import './App.css';
import AutoComplete from './components/AutoComplete/AutoComplete';
import { getCountriesByNames } from './services/countries.service';


function App() {
  const [countries, setCountries] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  useEffect(() => {
    getCountriesByNames("")
      .then((countries: string[]) => {
        setCountries(countries);
      });
  }, []);
  
  const handleFilterCountriesList = async (searchTerm: string) => {
    const result = await getCountriesByNames(searchTerm);
      
    setCountries(result);
  };

  const handleSelectCountry = (country: string) => {
    setSelectedCountry(country);
  }

  return (
    <div className="App">
      <pre>selected item: {selectedCountry}</pre>
        <AutoComplete 
          listItems={countries} 
          onSearchTermChange={handleFilterCountriesList}
          onItemSelected={handleSelectCountry}
        />
    </div>
  );
}

export default App;
