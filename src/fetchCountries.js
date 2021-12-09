export { fetchCountries };

const BASE_URL = `https://restcountries.com/v3.1`;


function fetchCountries(name) {
    return fetch(`${BASE_URL}/name/${name}?fields=name,capital,population,flags,languages`)
        .then(response => {
        //    console.log(response);
           if (response.ok) {
               return response.json();
            } else {
                onFetchError();
            }
        });
};