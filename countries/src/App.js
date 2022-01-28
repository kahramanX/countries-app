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
                    <SearchCountry/>
                <div className="country-list">
                    <ul>
                    <CountryList/>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default App;