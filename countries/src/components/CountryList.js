import {useEffect, useState} from "react";

function CountryList(props) {

    const [countries,
        setCountries] = useState([]);

    //uygulama mount edildikten sonra çalışır
    useEffect(() => {
        console.log("uygulama yüklendi");

        fetch("https://restcountries.com/v3.1/all").then((res) => res.json()).then(response => setCountries(response));

        console.log("bitiş")
    }, [])
    // herhangi bir değişken kontrol edilmediğinden dolayı [] boş bırakıldı

    return (
        countries
        .filter(country => country.name.common.toLowerCase().includes(props.search.toLowerCase()))
        .map(country => {

            return <li key={country.name.common} className="country-container">
                <img src={country.flags.png} width="40"/>
                <h3>{country.name.common}</h3>

                <button className="select-btn">
                    <i className="fas fa-expand-alt"></i>
                </button>
            </li>
        })
    )
}

export default CountryList;