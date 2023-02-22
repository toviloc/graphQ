const resolvers = {
  Query: {
    books: () => [
      { id: 1, name: "de men phieu luu ky", genre: "Adventure" },
      { id: 2, name: "lam giau khong kho", genre: "education" },
    ],
  },
};

module.exports = resolvers;
