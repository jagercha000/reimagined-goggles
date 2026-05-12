import "./header.js"
import "./footer.js"
import "./loader.js"
var sitePath = "/reimagined-goggles/";
async function loadComponents() {
  var headerResponse = await fetch(sitePath + "components/header.html");
  var footerResponse = await fetch(sitePath + "components/footer.html");
  var headerContent = await headerResponse.text();
  var footerContent = await footerResponse.text();
  document.querySelector('header').innerHTML = headerContent;
  document.querySelector('footer').innerHTML = footerContent;
}
function injectIcon() {
  var iconURL = sitePath + "assets/favicon.png";
  var element = document.createElement('link');
  element.setAttribute('rel', 'icon');
  element.setAttribute('type', 'image/png');
  element.setAttribute('href', iconURL);
  document.head.appendChild(element);
}
function hideLoader() {}
async function init() {
  await loadComponents();
  injectIcon();
  hideLoader();
}
init();
