#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2];
const characterId = 18;

request(apiUrl, function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }
  const movies = JSON.parse(body).results;
  let count = 0;

  for (const movie of movies) {
    if (movie.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)) {
      count++;
    }
  }

  console.log(count);
});
