globalThis.hooks = globalThis.hooks || new Object();
globalThis.hooks['header-init'] = function() {
  document.querySelectorAll('.header-menu-dropdown-button').forEach(function(element) {
    element.addEventListener('click', function(evt) {
      evt.preventDefault();
    });
  });
};
