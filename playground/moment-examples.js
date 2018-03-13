var moment = require("moment");

console.log(moment().format());


var now = moment();

console.log("Current timestamp", now.unix());

var timestamp = 1520932597;
var currentMoment = moment.unix(1520932597);

console.log("current moment" ,currentMoment.format("MMMM Do, YYYY @ hh:mm A"))
