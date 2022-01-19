let btn = document.querySelector('.btn-country');
let countriesContainer = document.querySelector('.countries')


function getCountryData(country, currencyCode) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();
    // console.log(request.responseText)

    request.addEventListener('load', function () {
        // console.log(this.responseText)
        let [data] = JSON.parse(this.responseText);
        console.log(data,country);

        let lang = data.languages;
        for (let i in lang) {
            var value = i;
            break;
        }

        let currency = data.currencies;
        let cuuencyObj = Object.keys(currency)
        let data1 = currency[currencyCode].name

        let html = `
    <article class="country">
            <img class="country__img" src="${data.flags.png}" />
            <div class="country__data">
              <h3 class="country__name">${data.name.common}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${data.population}</p>
              <p class="country__row"><span>🗣️</span>${value}</p>
              <p class="country__row"><span>💰</span>${data1}</p>
            </div>
          </article>
    `;

        countriesContainer.insertAdjacentHTML('beforeend', html);

        countriesContainer.style.opacity = 1;

    });
}
getCountryData('india', 'INR');
getCountryData('portugal', 'EUR');
getCountryData('usa', 'USD');
getCountryData('germany', 'EUR');



// console.log(request1)

// const getCountryData = function(country){
//     fetch(`https://restcountries.com/v3.1/name/${country}`).then(function(response){
//         console.log(response)
//         return response.json();
//     })
//     .then(function(data){
//         console.log(data)
//     })

// }
// getCountryData('portugal')