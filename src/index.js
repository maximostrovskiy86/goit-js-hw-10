import { fetchBreeds } from './js/API/cat-api';
import { renderCats } from './js/main';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

fetchBreeds()
  .then(response => response.json())
  .then(result => renderCats(result))
  .catch(error => Notify.failure(`❌ Oops Rejected promise ${error}`));
