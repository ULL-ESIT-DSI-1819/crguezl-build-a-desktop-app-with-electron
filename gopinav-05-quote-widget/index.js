const request = require("request");
const quote = document.getElementById('quote');

request("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
  (err, response, body) => {
    let bodyJson = JSON.parse(body)[0];
    console.log(bodyJson);
    let randomQuote = bodyJson.content;
    quote.innerHTML = randomQuote;
  }
);

setInterval(
  () => {
    request("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
      (err, response, body) => {
        let bodyJson = JSON.parse(body)[0];
        console.log(bodyJson);
        let randomQuote = bodyJson.content;
        quote.innerHTML = randomQuote;
      }
    );
  },
  6000 // 6 seconds
);
