import $ from 'jquery';

var url = 'http://api.randomuser.me/?results=12&nat=us';

var user = $('.user');

var dataReq = $.getJSON(url);

var userTemplate = function(user) {
  return `
  <div class=user>
  <img src=${user.picture.large}>

    <h2>${user.name.first} ${user.name.last}</h2>
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
  
