import "./constants.js"
function addStyle(url) {
  var result = await fetch(url);
  var content = await result.text();
  var element = document.createElement('style');
  element.textContent = content;
  element.setAttribute('type', 'text/css');
  document.head.appendChild(element);
}
function addScript(url) {
  var element = document.createElement('script');
  element.setAttribute('src', url);
  element.setAttribute('type', 'text/javascript');
  document.head.appendChild(element);
}
window.addEventListener('load', async function() {
  addStyle(sitePath + "styles/global.css");
  addStyle(sitePath + "styles/error.css");
  addScript(sitePath + "lib/gsap.js");
  addScript(sitePath + "scripts/global.js");
  document.querySelector('.error-back-button').addEventListener('click', function() {
    window.history.go(-1);
  });
  document.querySelector('.error-home-button').addEventListener('click', function() {
    window.location.href = sitePath;
  });
});
