import { KEY_API, CAT_ID_URL } from '../const/base';


export const fetchBreeds = () => {
  return fetch('https://api.thecatapi.com/v1/breeds/', {
    headers: {
      'x-api-key': KEY_API
    }
  })
}

export const fetchCatByBreed = (id) =>  {
  return fetch(`${CAT_ID_URL}?breed_ids=${id}`, {
    headers: {
      'x-api-key': KEY_API
    }
  });
}