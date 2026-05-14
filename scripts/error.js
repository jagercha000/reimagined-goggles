import "./constants.js"
window.addEventListener('load', async function() {
  var result = await fetch(sitePath + "styles/error.css");
  var content = await result.text();
  var element = document.createElement('style');
  element.textContent = content;
  element.setAttribute('type', 'text/css');
  document.head.appendChild(element);
  document.querySelector('.error-back-button').addEventListener('click', function() {
    window.history.go(-1);
  });
  document.querySelector('.error-home-button').addEventListener('click', function() {
    window.location.href = sitePath;
  });
});
