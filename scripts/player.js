import "./constants.js"
globalThis.createPlayer = function(id, target, width, height) {
  var element = document.createElement('iframe');
  var playerURL = sitePath + "player/index.html?id=" + id;
  element.setAttribute('src', playerURL);
  element.setAttribute('class', 'player-frame');e
  element.setAttribute('width', width);
  element.setAttribute('height', height);
  target.appendChild(element);
}
