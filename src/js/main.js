import $ from 'jquery';

var url = 'http://api.randomuser.me/?results=12&nat=us';

var info = $('.info');
var dataReq = $.getJSON(url);

dataReq.then (function (res){
  console.log(res.results);
  res.results.forEach(function(person){
    console.log(person.email);

info.append(person.email);


  });
});
