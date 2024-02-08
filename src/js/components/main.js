// import SlimSelect from 'slim-select'

import { breedSelect, breedCatId } from "../const/refs";
import { fetchBreeds, fetchCatByBreed } from "../API/api-service";


// const select = new SlimSelect({
//   select: '#breed-select',
  // option: {
  //   text: cat.name,
  //   value: cat.id,
  // select: breedSelect,
  // data: { text: cat.name, value: cat.id },
  // }
// })

fetchBreeds().then(dataCats => renderCatsName(dataCats))
  .catch((error) => console.log(error));

const renderCatsName = (data) =>  {
  const markup = data.map(cat => {
    return `<option value=${cat.id}>${cat.name}</option>`
  }).join("");

  breedSelect.insertAdjacentHTML("beforeend", markup);
}

function renderCatDescriptions(dataResult) {
  const markup = dataResult.map(({url, breeds}) => {
    // console.log("CAT", cat);
    return `<div>
        <img src=${url} alt="">
        <h2>${breeds[0].name}</h2>
        <p>${breeds[0].description}</p>
    </div>`
  }).join("");

  breedCatId.insertAdjacentHTML("beforeend", markup);
}

const  onHandleChangeSelectByCat = (e) => {
  const target = e.target;
  console.log("target", target);

  fetchCatByBreed(target.value).then(dataResult => renderCatDescriptions(dataResult));
}

breedSelect.addEventListener("change", onHandleChangeSelectByCat)









