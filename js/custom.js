// const squaresBox = document.getElementById('squaresBox');
// const dinosaurBox = document.getElementById('dinosaurBox');
// const eelslapBox = document.getElementById('eelslapBox');
// const iframeContainer = document.getElementById('iframeContainer');
// const contentIframe = document.getElementById('contentIframe');
// const closeButton = document.getElementById('closeButton');

// Créez un tableau d'objets contenant les id et les URLs correspondantes
const sites = [
    { id: 'squaresBox', url: 'https://gameaboutsquares.com/' },
    { id: 'dinosaurBox', url: 'https://www.trex.com/' },
    { id: 'eelslapBox', url: 'http://eelslap.com' },
    { id: 'shorttripBox', url: 'https://alexanderperrin.com.au/paper/shorttrip/' },
    { id: 'weavesilkBox', url: 'http://weavesilk.com/' },
    { id: 'zoomquiltBox', url: 'https://zoomquilt.org/' },
    { id: 'donothingBox', url: 'http://www.donothingfor2minutes.com/' },
    { id: 'pacmanBox', url: 'https://freepacman.org/' },
    { id: 'flappy2048Box', url: 'https://flappy-2048.com/' },
    { id: 'polkaBox', url: 'https://www.polkadotgame.com/' },
    { id: 'twentyBox', url: 'http://twenty.frenchguys.net/' },
    { id: 'koalasBox', url: 'https://www.koalastothemax.com/' },
    { id: 'smashthewallsBox', url: 'https://smashthewalls.com/' },
    { id: 'fallingfallingBox', url: 'https://www.fallingfalling.com/' },
    { id: 'chihuahuaBox', url: 'https://chihuahuaspin.com/' },
    { id: 'buildshruggieBox', url: 'http://www.buildshruggie.com/' },
    { id: 'patienceBox', url: 'http://www.patience-is-a-virtue.org/' },
    { id: 'skulltrumpetBox', url: 'https://skulltrumpet.com/' },
    { id: 'salamancaBox', url: 'https://www.hectorsalamanca.com/' },
    { id: 'blobBox', url: 'https://oimo.io/works/blob/' },
    { id: 'pentrisBox', url: 'https://www.pentris.net/' },
    { id: 'mazetoysBox', url: 'https://maze.toys/mazes/medium/daily/' },
    { id: 'sandcastlesBox', url: 'https://vectorpark.com/sandcastles/' },
    { id: 'fractaljigsawBox', url: 'http://thatmichaelpark.github.io/fractal-jigsaw-puzzle/fractaljigsaw.html' },
    { id: 'ring4Box', url: 'http://shapesmania.com/rings4n' },
    { id: 'goldrunBox', url: 'http://weirdly.net/webgames/goldRun/' },
    { id: 'grenouilleBox', url: 'http://weirdly.net/webgames/GourmandGrenouille/' },

    // { id: 'Box', url: '' },

  ];
  
  

squaresBox.addEventListener('click', () => {
    contentIframe.src = 'https://gameaboutsquares.com/';
    iframeContainer.style.display = 'block';
});

dinosaurBox.addEventListener('click', () => {
    contentIframe.src = 'https://trex-runner.com/';
    iframeContainer.style.display = 'block';
});

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