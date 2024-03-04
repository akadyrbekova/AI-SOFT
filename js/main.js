document.addEventListener('DOMContentLoaded', function() {
  const burgerMenu = document.querySelector('.burger-menu');
  const mobileMenu = document.querySelector('.mobile-menu');

  burgerMenu.addEventListener('click', function() {
      this.classList.toggle('open');
      mobileMenu.classList.toggle('open');
  });
});



var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '315',
    width: '560',
    videoId: '', // Пустой ID, чтобы начать
    playerVars: {
      'autoplay': 0,
      'controls': 1,
      'rel': 0,
      'showinfo': 0
    }
  });
}

function loadVideo(videoId) {
  player.loadVideoById(videoId);
}
