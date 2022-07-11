const searchform = document.querySelector('form');
const searchResult = document.querySelector('.search__result');
const container = document.querySelector('.container')
let searchQue = '';
const API_ID = 'e848ebb5';
const API_key = '92665e3b83be901bf129fb9c75ee97bf';

searchform.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQue = e.target.querySelector('input').value;
    // console.log(searchQue)
    fetchAPI();
});

async function fetchAPI (){
    const API_URL = 'https://api.edamam.com/api/recipes/v2?q=${searchQuery}&app_id=${API_ID}&app_key=${APP_key}&to=12';
    const reponse = await fetch(API_URL);
    const data = await reponse.json();
    generateHTML(data.hits);
    console.log(data);
    
}

function generateHTML(result) {
    let GNHTML ='';
    result.map(result=> {
        GNHTML += 
        `
        <div class="item">
                    <img src="${result.recipe.image}" alt="">
                    <div class="flex__container">
                        <h1 class="title"> ${result.recipe.label}</h1>
                        <a class="view__btn" href="${result.recipe.url}"> View Recipe</a>
                    </div>
                    <p class="item__data">${result.recipe.calories.toFixed(2)}</p>
        </div>
        `
    })
    searchResult.innerHTML = GNHTML;
}