window.addEventListener('load', function() {
  createPlayer('gallery', document.querySelector('.gallery-player'), 600, 375);
  document.querySelector('.abiotic-factors-button').addEventListener('click', function() {
    window.location.href = 'abiotic-factors.html';
  });
});
