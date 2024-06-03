const legoCreatorSeries = {
  seriesName: "Lego Creator",
  sets: [
    {
      setNumber: "31090-1",
      name: "Underwater Robot",
      pieces: 207,
      releaseYear: 2019,
      themes: ["Robots", "Underwater"],
      price: 14.99,
      ratings: {
        average: 4.6,
        reviews: 2387,
      },
    },
    {
      setNumber: "10245-1",
      name: "Santa's Workshop",
      pieces: 857,
      releaseYear: 2014,
      themes: ["Winter Village", " Christmas"],
      price: 179.99,
      ratings: {
        average: 4.8,
        reviews: 1029,
      },
    },
    {
      setNumber: "31109-1",
      name: "Pirate Ship",
      pieces: 1242,
      releaseYear: 2020,
      themes: ["Pirates", "Ships"],
      price: 99.99,
      ratings: {
        average: 4.7,
        reviews: 3421,
      },
    },
    {
      setNumber: "31120-1",
      name: "Medieval Castle",
      pieces: 1408,
      releaseYear: 2021,
      themes: ["Castle", "Medieval"],
      price: 129.99,
      ratings: {
        average: 4.9,
        reviews: 1876,
      },
    },
    {
      setNumber: "40650-1",
      name: "Land Rover Classic Defender",
      pieces: 146,
      releaseYear: 2023,
      themes: ["Car", "Forest", "Traffic"],
      price: 69.99,
      ratings: {
        average: 4.7,
        reviews: 712,
      },
    },
  ],
  totalSets: 5,
  totalPieces: function () {
    return this.sets.reduce((total, set) => total + set.pieces, 0);
  },
};

console.log(
  "Total pieces in Lego Creator series:",
  legoCreatorSeries.totalPieces()
);
