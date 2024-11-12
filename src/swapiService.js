const axios = require('axios');

const BASE_URL = 'https://swapi.dev/api';

// Função genérica para requisições GET
const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    // Se a requisição falhar, retornar o status e a mensagem do erro
    if (error.response) {
      return { status: error.response.status, message: error.response.statusText };
    } else if (error.request) {
      // Se a requisição foi feita mas sem resposta, indicar o erro
      return { status: 500, message: 'Nenhuma resposta recebida do servidor.' };
    } else {
      // Erro desconhecido
      throw new Error(`Erro ao realizar a requisição: ${error.message}`);
    }
  }
};

// Funções específicas para cada endpoint
const getPlanets = async () => await fetchData('planets/');
const getStarships = async () => await fetchData('starships/');
const getFilms = async () => await fetchData('films/');
const getUnknownRoute = async () => await fetchData('heroes/'); // Rota inexistente
const getPlanetById = async (id) => await fetchData(`planets/${id}/`);
const getPeople = async () => await fetchData('people/');
const getSpecies = async () => await fetchData('species/');
const getStarshipById = async (id) => await fetchData(`starships/${id}/`);
const getFilmById = async (id) => await fetchData(`films/${id}/`);
const getNonexistentPlanet = async () => await fetchData('planets/999999/'); // Planeta inexistente

// Exportando as funções
module.exports = {
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
};
