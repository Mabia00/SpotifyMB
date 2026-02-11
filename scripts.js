document.addEventListener('DOMContentLoaded', () => {
    const artistsGrid = document.querySelector('.artists-grid');
    const albumsGrid = document.querySelector('.albums-grid');

    const artistsData = [
  { name: 'Buck-Tick', image: './img/buck-tick.jpg' }, 
  { name: 'Calcinha Preta', image: './img/calcinha-preta.jpg' },
  { name: 'Cocteau Twins', image: './img/cocteau-twins.jpg' },
  { name: 'Duran Duran', image: './img/duran-duran.jpg' },
  { name: 'INXS', image: './img/inxs-kick.jpg' },
  { name: 'Lionel Richie', image: './img/lionel-richie.jpg' },
];

const albumData = [
  { name: 'Eyes Without a Face', artist: 'Billy Idol', image: './img/billy-idol.jpg' },
  { name: 'Heroes', artist: 'David Bowie', image: './img/david-bowie.jpg' },
  { name: 'Purple Rain', artist: 'Prince', image: './img/prince.jpg' },
  { name: 'Submarine', artist: 'The Marías', image: './img/the-marias.jpg' },
  { name: 'Ultraviolence', artist: 'Lana Del Rey', image: './img/lana-del-rey.jpg' },
  { name: 'Make It Big', artist: 'Wham!', image: './img/wham.jpg' }
];
    artistsData.forEach(artist => {
        const artistCard = document.createElement('div');
        artistCard.classList.add('artist-card');

        artistCard.innerHTML = `
            <img src="${artist.image}" alt="Imagem de ${artist.name}">
            <h3>${artist.name}</h3>
            <p>Artista</p>
        `;

        artistsGrid.appendChild(artistCard);
    });

    albumData.forEach(album => {
        const albumCard = document.createElement('div');
        albumCard.classList.add('album-card');

        albumCard.innerHTML = `
            <img src="${album.image}" alt="Capa do álbum ${album.name}">
            <h3>${album.name}</h3>
            <p>${album.artist}</p>
        `;

        albumsGrid.appendChild(albumCard);
    });
});