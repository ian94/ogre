(function() {
  'use strict';

  const endpoint = 'https://api.quotable.io/random'
  //'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

  function getQuote() {
  fetch(endpoint)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        // data.message
      displayQuote( `“${data.content}” \n -- ${data.author}`);
    })
    .catch(function () {
      console.log("An error occurred");
    });
}

function getSentence() {

var phrases = [
//"I have been thinking about you for",
//"I have been missing you for",
// "We have known each other for",
"Happy Birthday! You have been in the world with us for",
//"I have been falling for you for",
];
return phrases[Math.floor(Math.random() * phrases.length)];
}

function displayQuote(quote) {
  const quoteText = document.querySelector('.quote-text');
  quoteText.textContent = quote;
}

  function hexClock() {
    // var clock = new Date();

    var now = new Date(); 
    var theDate = new Date('Dec 9, 1989 08:00:00'); 

    // get total seconds between the times
    var delta = Math.abs(now - theDate) / 1000;

    // calculate (and subtract) whole days
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;

    // calculate (and subtract) whole hours
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    // calculate (and subtract) whole minutes
    var mins = Math.floor(delta / 60) % 60;
    delta -= mins * 60;

    // what's left is seconds
    var secs = delta % 60;  // in theory the modulus is not required
    secs = parseInt(secs);

    // var hours = clock.getHours(),
    //     mins = clock.getMinutes(),
    //     secs = clock.getSeconds();

    if(hours <= 9) hours = '0' + hours;
    if(mins <= 9) mins = '0' + mins;
    if(secs <= 9) secs = '0' + secs;


    var time = parseInt(days) + ' days ' + hours + ' hours ' + mins + ' minutes ' + secs + ' seconds ';


    var color = '#' + hours + mins + secs;
    document.body.style.background = color;
    document.getElementById('time').innerHTML = time;
    document.getElementById('hexColor').innerHTML = color;


    setTimeout(hexClock, 1000);
  }

  hexClock();

  getQuote();
  document.getElementById('sentence').innerHTML = getSentence();
}());
