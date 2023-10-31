import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000', // URL base de tu API de Rails
});

// Otras configuraciones, interceptores, etc., si los necesitas...

export default instance;
