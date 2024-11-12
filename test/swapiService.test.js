const {
    getPlanets,
    getStarships,
    getFilms,
    getUnknownRoute,
    getPlanetById,
    getPeople,
    getSpecies,
    getStarshipById,
    getFilmById,
    getNonexistentPlanet,
  } = require('../src/swapiService');
  
  describe('SWAPI Tests', () => {
    test('should fetch planets', async () => {
      const data = await getPlanets();
      expect(data.count).toBeGreaterThan(0);
      expect(data.results).toBeInstanceOf(Array);
      expect(data.results.length).toBeGreaterThan(0); // Garantir que há planetas
    });
  
    test('should fetch starships', async () => {
      const data = await getStarships();
      expect(data.count).toBeGreaterThan(0);
      expect(data.results).toBeInstanceOf(Array);
      expect(data.results.length).toBeGreaterThan(0); // Garantir que há naves
    });
  
    test('should fetch films', async () => {
      const data = await getFilms();
      expect(data.count).toBeGreaterThan(0);
      expect(data.results).toBeInstanceOf(Array);
      expect(data.results.length).toBeGreaterThan(0); // Garantir que há filmes
    });
  
    test('should return 404 for an unknown route', async () => {
      const result = await getUnknownRoute();
      expect(result.status).toBe(404);
    });
  
    test('should fetch planet by id', async () => {
      const data = await getPlanetById(1);
      expect(data.name).toBe('Tatooine'); // Certifique-se de que o nome do planeta é Tatooine
    });
  });
  
  describe('Additional SWAPI Tests', () => {
    test('should fetch all people', async () => {
      const data = await getPeople();
      expect(data.count).toBeGreaterThan(0);
      expect(data.results).toBeInstanceOf(Array);
      expect(data.results.length).toBeGreaterThan(0); // Garantir que há pessoas
    });
  
    test('should fetch all species', async () => {
      const data = await getSpecies();
      expect(data.count).toBeGreaterThan(0);
      expect(data.results).toBeInstanceOf(Array);
      expect(data.results.length).toBeGreaterThan(0); // Garantir que há espécies
    });
  
    test('should fetch a starship by ID', async () => {
      const data = await getStarshipById(9); // ID da nave pode variar
      expect(data.name).toBe('Death Star'); // Nome esperado para o ID 9
    });
  
    test('should fetch a film by ID', async () => {
      const data = await getFilmById(1); // ID do filme pode variar
      expect(data.title).toBe('A New Hope'); // Título esperado para o ID 1
    });
  
    test('should return 404 for a nonexistent planet', async () => {
      const result = await getNonexistentPlanet();
      expect(result.status).toBe(404);
    });
  });
  