globalThis.hooks = globalThis.hooks || new Object();
function hideHeaderDropdowns() {
  document.body.classList.remove('dropdown-active');
  document.querySelectorAll('.header-menu-dropdown-content').forEach(function(element) {
    element.classList.add('hidden');
  });
}
globalThis.hooks['header-init'] = function() {
  document.querySelectorAll('.header-menu-dropdown-button').forEach(function(element) {
    element.addEventListener('click', function(evt) {
      evt.preventDefault();
      evt.target.closest('.header-menu-dropdown-button').parentElement.querySelector('.header-menu-dropdown-content').classList.remove('hidden');
      document.body.classList.add('dropdown-active');
    });
  });
  document.body.addEventListener('click', function(evt) {
    var allowedClasses = [ 'header-menu-dropdown-content', 'header-menu-dropdown-button' ];
    var shouldHide = true;
    allowedClasses.forEach((function(allowedClass) {
      var allowedElement = evt.target.closest('.' + allowedClass);
      if(allowedElement) {
        shouldHide = false;
      }
    }).bind(this));
    if(shouldHide) {
      hideHeaderDropdowns();
    }
  });
};
