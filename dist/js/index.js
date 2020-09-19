const API_KEY = '9c08c70c211d111c1764de9691e3c902';

const request = async url => {
    const response = await fetch(url);
    return response.ok ? response.json() : Promise.reject({error: 500});
};

const getWeatherInfo = async ( element, form ) => {
    try {
        const q = form.querySelector('#q').value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${API_KEY}`;
        const response = await request(url);
        element.innerText = JSON.stringify(response);

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