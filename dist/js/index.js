import {API_KEY} from './secrets.js';

const request = async url => {
    const response = await fetch(url);
    return response.ok ? response.json() : Promise.reject({error: 500});
};

const getWeatherInfo = async (element, form) => {
    try {
        const q = form.querySelector('#q').value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${API_KEY}`;
        const response = await request(url);
        //element.innerText = JSON.stringify(response);
        element.innerText = "Actuellement, il fait " + to_degree(response.main.temp) + " à " + q + '.'; //+ response.coord.lat + response.coord.lon;
        console.log(response);
    } catch(err) {
        console.log(err);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#form');
    form.addEventListener('submit', e => {
        e.preventDefault();
        getWeatherInfo(document.querySelector('#results'), form);
    }, false);
});

///////////

function to_degree(temp) {
    temp -= 273.15;
    return temp;
}
