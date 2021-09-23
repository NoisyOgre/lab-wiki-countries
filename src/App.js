import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import { Switch, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <>
    <NavBar />
      <Switch>
      <div className="App">

  <div className="container">
    <div className="row">
      <CountriesList countries={CountriesList} />
      <Route exact path="/:id" component={CountryDetails} />
    </div>
  </div>
</div>
      </Switch>
    </>
  );
}

export default App;
