document.addEventListener("DOMContentLoaded", function() {
});

function remove() {
  var listItem = document.querySelector('li:last-child');
  listItem.parentElement.removeChild(listItem);
}

function add() {
  var listItem = document.querySelector('li:last-child');
  listItem.parentElement.addChild(listItem);
}
