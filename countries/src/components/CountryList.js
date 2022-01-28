import {useEffect, useState} from "react";

function CountryList() {

    let [countries, setCountries] = useState([]);

    //uygulama mount edildikten sonra çalışır
    useEffect(() => {
        console.log("uygulama yüklendi");

        fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then(response => setCountries(response));

        console.log("bitiş")
    }, [])
    // herhangi bir değişken kontrol edilmediğinden dolayı [] boş bırakıldı

    console.log(countries[0])

    return (
        <>
    {countries.map(country => {
        return <li key={country.name.common} className="country-container">
                <img src={country.flags.png} width="40"/>
                <h3>{country.name.common}</h3>

                <button className="select-btn">
                    <i class="fas fa-expand-alt"></i>
                </button>
                </li>
    })}
    </>
    );
}

export default CountryList;