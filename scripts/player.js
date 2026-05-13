import "./constants.js"
function createPlayer(id, target) {
  var element = document.createElement('iframe');
  var playerURL = sitePath + "player/index.html?id=" + id;
  element.setAttribute('src', playerURL);
  element.setAttribute('class', 'player-frame');
  target.appendChild(element);
}
