import $ from 'jquery';

var url = 'http://api.randomuser.me/?results=12&nat=us';

var user = $('.user');
var photo = $('.photo');
var dataReq = $.getJSON(url);

var userTemplate = function(user) {
  return `
  <div>
  <img src=${user.picture.medium}>

    <h2>${user.name.first}${user.name.last}</h2>
    <aside>${user.email}</aside>
    <p>${user.location.street}<br>
      ${user.location.city}<br>
      ${user.location.state}<br>

      <span>${user.cell}</span>
    </p>
    <div class="ssn">${user.id.value}</div>
  </div>
  `
};

dataReq.then (function (res){
  res.results.forEach(function(user){
  var html = userTemplate(user);
  $('.container').append(html);
  })

  console.log(res.results);
});
  // res.results.forEach(function(person){
  //   console.log(person.email);
  //
  //   console.log(person.picture.medium)

    // res.results.forEach(function (person){
    //   var photo= person.picture.medium;
    //   console.log(person.picture.medium);
    // })

// user.append(person.email);
// user.append(person.picture.medium);
//   });
//
// });
