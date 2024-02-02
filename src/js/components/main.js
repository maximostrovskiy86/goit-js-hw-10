import SlimSelect from 'slim-select'

import { breedSelect } from "../const/refs";
import { fetchBreeds } from "../API/api-service";


fetchBreeds().then(dataCats => renderCatsName(dataCats))
    // .catch((error) => console.log(error)));




const renderCatsName = (data) =>  {
  const markup = data.map(cat => {
    return new SlimSelect({
      // select: '.breed-select'
      select: breedSelect,
      data: [{ text: cat.name, value: cat.id }],
    })
    // return `<option value=${cat.id}>${cat.name}</option>`
  })
  // }).join("");

  breedSelect.insertAdjacentHTML("beforeend", markup);
}




