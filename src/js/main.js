import $ from 'jquery';

var url = 'http://api.randomuser.me/?results=12&nat=us';

var info = $('.info');
var photo = $('.photo');
var dataReq = $.getJSON(url);

dataReq.then (function (res){
  console.log(res.results);
  res.results.forEach(function(person){
    console.log(person.email);

    console.log(person.picture.medium)

    // res.results.forEach(function (person){
    //   var photo= person.picture.medium;
    //   console.log(person.picture.medium);
    // })

info.append(person.email);
info.append(person.picture.medium);
  });

});
