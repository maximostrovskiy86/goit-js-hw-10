import SlimSelect from 'slim-select'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { breedSelect, catInfoMarkup, loader } from './const/refs';
import { fetchCatByBreed } from './API/cat-api';




export function renderCats(data)  {
  const markup = data.map(cat => {
    return `<option value=${cat.id} >${cat.name}</option>`
  })

  breedSelect.insertAdjacentHTML('beforeend', markup);

  new SlimSelect({
    select: '#breed-select',
    settings: {
      placeholderText: 'Search cats',
    },
  })
}





const resetByCat = () => {
  catInfoMarkup.innerHTML = '';
}

const onLoaderFunction = () => {
  loader.classList.remove("is-hidden");
  breedSelect.classList.add('is-hidden')
}

const endLoaderFunction = () => {
  loader.classList.add("is-hidden");
  breedSelect.classList.remove('is-hidden');
}

const onHandleChangeSelectByCat = (event) => {
  resetByCat();

  const selectedOptionValue = event.currentTarget.value;

  onLoaderFunction();

  fetchCatByBreed(selectedOptionValue)
    .then(response => response.json())
    .then(catInfo =>  catByDescription(catInfo))
    .catch(error => {
      Notify.failure(`❌ Oops Rejected promise ${error}`);
    });
}

const catByDescription = (catInfo) => {
  let breed = {};
  let url = '';

 for (let markupElement of catInfo) {
    url = markupElement.url;
    breed = markupElement;
}

 const markup = breed.breeds.map(({description, name, temperament}) => {
   return `
    <figure class="card">
        <div class="thumb">
          <img class="cat-image" src=${url} alt=""/>
          <div class="wrapper">
            <h1>${name}</h1>
            <p>${description}</p>
            <h2>Temperament: ${temperament}</h2>
          </div>
      </div>
   </figure>`
    }).join("");

  catInfoMarkup.insertAdjacentHTML('beforeend', markup);

  endLoaderFunction();
}

breedSelect.addEventListener("change", onHandleChangeSelectByCat);


