const axios = require('axios');

// Função genérica para realizar chamadas à API SWAPI
const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`https://swapi.dev/api/${endpoint}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      return { status: error.response.status, message: error.response.statusText };
    }
    throw new Error('Erro ao conectar com a API.');
  }
};

// Funções para interagir com os endpoints da SWAPI
const getPlanets = () => fetchData('planets/');
const getStarships = () => fetchData('starships/');
const getFilms = () => fetchData('films/');
const getUnknownRoute = () => fetchData('heroes/'); // Rota inexistente
const getPlanetById = (id) => fetchData(`planets/${id}/`);
const getPeople = () => fetchData('people/');
const getSpecies = () => fetchData('species/');
const getStarshipById = (id) => fetchData(`starships/${id}/`);
const getFilmById = (id) => fetchData(`films/${id}/`);
const getNonexistentPlanet = () => fetchData('planets/999999/');

// Testes utilizando a API real
describe('SWAPI Tests', () => {
  // Teste1
  test('should fetch planets', async () => {
    const data = await getPlanets();
    expect(data.count).toBeGreaterThan(0);
    expect(data.results).toBeInstanceOf(Array);
  });

  // Teste2
  test('should fetch starships', async () => {
    const data = await getStarships();
    expect(data.count).toBeGreaterThan(0);
    expect(data.results).toBeInstanceOf(Array);
  });

  // // Teste3
  test('should fetch films', async () => {
    const data = await getFilms();
    expect(data.count).toBeGreaterThan(0);
    expect(data.results).toBeInstanceOf(Array);
  });

  // // Teste4
  test('should return 404 for an unknown route', async () => {
    const result = await getUnknownRoute();
    expect(result.status).toBe(404);
  });

  // // Teste5
  test('should fetch planet by id', async () => {
    const data = await getPlanetById(1);
    expect(data.name).toBe('Tatooine');
  });

  // // Teste6
  test('should fetch all people', async () => {
    const data = await getPeople();
    expect(data.count).toBeGreaterThan(0);
    expect(data.results).toBeInstanceOf(Array);
  });

  // // Teste7
  test('should fetch all species', async () => {
    const data = await getSpecies();
    expect(data.count).toBeGreaterThan(0);
    expect(data.results).toBeInstanceOf(Array);
  });

  // // Teste8
  // test('should fetch a starship by ID', async () => {
  //   const data = await getStarshipById(9);
  //   expect(data.name).toBe('Death Star');
  // });

  // // Teste9
  // test('should fetch a film by ID', async () => {
  //   const data = await getFilmById(1);
  //   expect(data.title).toBe('A New Hope');
  // });

  // // Teste10
  // test('should return 404 for a nonexistent planet', async () => {
  //   const result = await getNonexistentPlanet();
  //   expect(result.status).toBe(404);
  // });
});
