import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.googleapis.com',
});

export default api;

// https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&AIzaSyDtjsZQXaPUwmGWLJktuRWSFk53WfH_lxg
// /books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey
