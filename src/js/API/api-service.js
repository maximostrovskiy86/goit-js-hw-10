import { URL_1, URL_2, KEY_API } from "../const/base";

// const URL = 'https://api.thecatapi.com/v1/images/search?api_key=YOUR_API_KEY'

// export const fetchGetCats = () => {
//   return fetch(URL_1).then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//   })
// }

export const fetchBreeds = () => {
  return fetch(URL_2, {
    headers: {
      'x-api-key': KEY_API
    }
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
  })
}