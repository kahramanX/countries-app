// SCSS files
import "./Assets/style/index.scss";
import './Assets/style/header.scss';
import './Assets/style/footer.scss';

// components
import SearchCountry from "./components/SearchCountry";
import CountryList from "./components/CountryList";

function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="search-container">
                    <SearchCountry/>
                </div>
                <div className="country-list">
                    <CountryList/>
                </div>

            </div>
        </div>
    );
}

export default App;