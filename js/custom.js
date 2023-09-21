// const squaresBox = document.getElementById('squaresBox');
// const dinosaurBox = document.getElementById('dinosaurBox');
// const eelslapBox = document.getElementById('eelslapBox');
// const iframeContainer = document.getElementById('iframeContainer');
// const contentIframe = document.getElementById('contentIframe');
// const closeButton = document.getElementById('closeButton');

// Créez un tableau d'objets contenant les id et les URLs correspondantes
const sites = [
    { id: 'dinosaurBox', url: 'https://www.trex-game.skipser.com/' },
    { id: 'shorttripBox', url: 'https://alexanderperrin.com.au/paper/shorttrip/' },
    { id: 'zoomquiltBox', url: 'https://zoomquilt.org/' },
    { id: 'pacmanBox', url: 'https://freepacman.org/' },
    { id: 'flappy2048Box', url: 'https://flappy-2048.com/' },
    { id: 'polkaBox', url: 'https://www.polkadotgame.com/' },
    { id: 'koalasBox', url: 'https://www.koalastothemax.com/' },
    { id: 'smashthewallsBox', url: 'https://smashthewalls.com/' },
    { id: 'fallingfallingBox', url: 'https://www.fallingfalling.com/' },
    { id: 'chihuahuaBox', url: 'https://chihuahuaspin.com/' },
    { id: 'skulltrumpetBox', url: 'https://skulltrumpet.com/' },
    { id: 'salamancaBox', url: 'https://www.hectorsalamanca.com/' },
    { id: 'blobBox', url: 'https://oimo.io/works/blob/' },
    { id: 'pentrisBox', url: 'https://www.pentris.net/' },
    { id: 'mazetoysBox', url: 'https://maze.toys/mazes/medium/daily/' },
    { id: 'sandcastlesBox', url: 'https://vectorpark.com/sandcastles/' },
    { id: 'remojiBox', url: 'https://remoji.com/' },
    { id: 'lacquerlacquerBox', url: 'https://www.lacquerlacquer.com/' },
    { id: 'drumsoundBox', url: 'https://drumsound.net/' },
    { id: 'astroalpacaBox', url: 'https://www.astroalpaca.com/' },
    { id: 'collideBox', url: 'https://www.dontcollide.com/' },
    { id: 'babadumBox', url: 'https://babadum.com/' },
    { id: 'insertcoinBox', url: 'https://coin.playables.net' },
    { id: 'jumpsagaBox', url: 'https://www.jumpsaga.com/' },
    { id: 'sharkbeatBox', url: 'https://www.sharkbeat.com/' },
    { id: 'angrybirdsBox', url: 'https://sandstormdev.indie.af/' },
    // { id: 'xxxBox', url: '' },

  ];

closeButton.addEventListener('click', () => {
    contentIframe.src = '';
    // Cacher le fond flou et l'iframe lorsque le bouton de fermeture est cliqué
    iframeBackground.style.display = 'none';
    iframeContainer.style.display = 'none';
});

// document.addEventListener('click', (event) => {
//     if (event.target !== contentIframe && event.target !== squaresBox && event.target !== wikipediaBox && event.target !== eelslapBox) {
//         iframeContainer.style.display = 'none';
//         contentIframe.src = '';
//     }
// });

// Parcourez le tableau et ajoutez les écouteurs d'événements
sites.forEach(site => {
  const box = document.getElementById(site.id);

  if (box) {
    box.addEventListener('click', () => {
      contentIframe.src = site.url;
       // Afficher le fond flou et l'iframe
       iframeBackground.style.display = 'block';
       iframeContainer.style.display = 'block';
    });
  }
});