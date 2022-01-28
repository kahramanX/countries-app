// SCSS files
import "./Assets/style/index.scss";
import './Assets/style/header.scss';
import './Assets/style/footer.scss';

// components
import SearchCountry from "./components/SearchCountry";
import CountryList from "./components/CountryList";
import { useState } from "react";

function App() {

    // Lifting state up kullanılıyor
const [search, setSearch] = useState("");

//props'tan fonksiyon göndermek için böyle yap
function handleChange(event) {
    setSearch(event.target.value);
}
    return (
        <div className="App">
            <div className="container">
                    <SearchCountry search={search} setSearchChange={handleChange}/>
                <div className="country-list">
                    <ul>
                    <CountryList search={search}/>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default App;