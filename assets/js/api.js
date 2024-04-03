'use strict';

const api_key = 'cdb64b4e3e5787b0aee1173f0cfa7f9e';
const imageBaseURL = 'http://image.tmdb.org/t/p/';

/* Fetch data from a server using the 'url' and passes the result in JSON data to a callback function
along with an optional parameter if has 'optionalParam' */

const fetchDataFromServer = function(url, callback, optionParam){
    fetch(url)
    .then(response => response.json())
    .then(data => callback(data, optionParam));
}

export{ imageBaseURL, api_key, fetchDataFromServer}