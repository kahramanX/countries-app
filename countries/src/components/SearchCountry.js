function SearchCountry(props) {
// input verileri child componentten parent componente aktarmak için lifting state up kullanıldı

console.log(props)
    return (
        <div className="search-container">
            <input 
            value={props.search} 
            onChange={props.setSearchChange} type="text" placeholder="search..."/>
        </div>
    );
}

export default SearchCountry;
