function renderCountries(countries) {
    console.table(countries);
    var htmlTable = `<table class="table table-striped table-bordered">
    <thead>
        <tr><th>#</th>
            <th>Name</th>
            <th>Capital</th>
            <th>Population</th>
            <th>Flag</th>
        </tr>
    </thead>
    <tbody>`;
    // for(var item in countries) {
    //     var country = countries[item];
    //     htmlTable += `<tr>
    //                 <td>${item}</td>
    //                 <td>${country.name}</td>
    //                 <td>${country.capital}</td>
    //                 <td>${country.population}</td>
    //                 <td><img src="${country.flag}" width="200px"></td>
    //             </tr>`;
    // }

    return table = countries.reduce(function(acc, country) {
        return acc + `<tr>
                        <td>${item}</td>
                        <td>${country.name}</td>
                        <td>${country.capital}</td>
                        <td>${country.population}</td>
                        <td><img src="${country.flag}" width="200px"></td>
                    </tr>`;
    }, htmlTable)
    table += '</tbody></table>';
    document.body.innerHTML = table;
}

window.onload = function() {
    fetch('https://restcountries.com/v2/all').then(res => res.json()).then(function(data) {
        var countries = data.map(function(country) {
            return {
                alpha3Code: country.alpha3Code,
                name: country.name,
                capital: country.capital,
                population: country.population,
                flag: country.flag
            }
        })
        renderCountries(countries);
    });
}