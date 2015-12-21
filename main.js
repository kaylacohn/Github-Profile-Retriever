$(document).ready(init);

function init() {
  $('#addCard').click(addCardHandler);
}

function addCardHandler() {
  var $usernameInput = $('#username');
  var username = $usernameInput.val();

  $.get('http://api.github.com/users/' + username)
  .done(function(data, status) {
    console.log("data:", data);
    console.log("status:", status);

    var $card = makeCard(data);
    $('#output').append($card);
  })
  .fail(function(data, status) {
    console.log('data:', data);
    console.log('status:', status)
  })
}

function makeCard(data) {
  var $card = $('<div>').addClass('card');
  var $avatar = $('<img>').attr('src', data.avatar_url);
  var $name = $('<div>').text(data.name);
  $card.append($avatar).append($name);

  return $card;
}
