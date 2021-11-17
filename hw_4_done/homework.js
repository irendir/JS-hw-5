// console.table(countries);

function getAvaragePopulation() {
    //в каждой стране есть поле population, вернуть из функции среднее арифм.
    return sumAvarage = +(countries.reduce(function(acc, country) {
        return acc + country.population;
    }, 0)/countries.length).toFixed(2);
}

function getNames() {
    //вернуть список (массив) имен стран (поле name)
    return names = countries.map(function(country) {
        return country.name;
    })
}

function findCountry() {
    var names = getNames();
    var countryInput = prompt('Введите название страны');
    if(names.indexOf(countryInput) > -1) {
        return true;
    }
    return false;
    //ввод через prompt название страны, вернуть true если такая страна нашлась по имени, false если не нашлась. можно использовать для этого getNames выше + indexOf
}

function getCountryByCode() {
    //пользователь вводит через prompt трехбуквенный код. если введенная строка не 3 символа длиной - выдать сообщение о неправильном вводе.
    //по введенной строке (трехбуквенный код) найти страну (должно совпадать с alpha3Code, которое есть у каждой страны).
    //и вернуть из функции либо объект с найденной страной, либо false
    var inputCode = prompt('Введите трехзначный код');
    if(inputCode.trim().length !== 3) {
        alert("Неправильный ввод");
        return false;
    }
    return result = countries.filter(function(country) {
        return inputCode.trim().toLowerCase() === country.alpha3Code.toLowerCase();
    })
    return false;
}