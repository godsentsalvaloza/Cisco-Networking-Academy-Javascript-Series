const images = [
  {
    title: "Mona Lisa",
    artist: "Leonardo da Vinci",
    date: 1503,
  },
  {
    title: "The Last Supper",
    artist: "Leonardo da Vinci",
    date: 1495,
  },
  {
    title: "Starry Night",
    artist: "Vincent Van Gogh",
    date: 1889,
  },
  {
    title: "The Scream",
    artist: "Edvard Munch",
    date: 1893,
  },
  {
    title: "Guernica",
    artist: "Pablo Picasso",
    date: 1937,
  },
  {
    title: "The Kiss",
    artist: "Gustav Klimt",
    date: 1907,
  },
  {
    title: "Girl With a Pearl Earring",
    artist: "Johannes Vermeer",
    date: 1665,
  },
  {
    title: "The Birth of Venus",
    artist: "Sandro Botticelli",
    date: 1485,
  },
  {
    title: "Las Meninas",
    artist: "Diego Velázquez",
    date: 1656,
  },
  {
    title: "The Creation of Adam",
    artist: "Michealangelo",
    date: 1512,
  },
];

for (const element of images) {
  console.log(`${element.title}, ${element.artist}, ${element.date}`);
}
