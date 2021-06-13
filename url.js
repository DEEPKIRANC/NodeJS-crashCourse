
const url=require('url');
const address="http://localhost:8080/default.html?year=2021&month=June";

const parsedURL=url.parse(address,true);

console.log(parsedURL);