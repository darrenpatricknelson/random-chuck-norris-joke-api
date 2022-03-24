// require('isomorphic-fetch');

// connect to the html
let container = document.getElementById('container');
let jokes = [];

//  create a function to get information
const fetchChuchNorrisJoke = async () => {
  const call = await fetch('http://api.icndb.com/jokes/random/3');
  const response = await call.json();

  return response;
};

fetchChuchNorrisJoke().then((data) => {
  for (let i = 0; i < 3; i++) {
    container.innerHTML += `<p>${data.value[i].joke}</p>`;
  }
});

// I took inspiration from he walkthrough video provided by HyperionDev
