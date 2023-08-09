const acessKey = 'PI3HD6RuLSBBiSEEXOI5ssTYu76iFpLHuSLVhlI9h_w';
const form = document.querySelector('form');
const search = document.querySelector('#Image-search');
const Maindiv = document.querySelector('.search-results');
const button = document.querySelector('#btn2');


let inputdata = '';
let page = 1;

async function searchImage() {
    inputdata = search.value;

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${acessKey}`;
    const res = await fetch(url);
    const data = await res.json();
    if (page === 1) {
        Maindiv.innerHTML = ''
    }
    const results = data.results;
  
    results.map((result) => {
        const imagewrapper = document.createElement('div');
        imagewrapper.classList.add('search-result');
        const image = document.createElement('img')
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imagelink = document.createElement('a');
        imagelink.href = result.links.html;
        imagelink.textContent = result.alt_description;

        imagewrapper.appendChild(image);
        imagewrapper.append(imagelink);
        Maindiv.appendChild(imagewrapper);
    })
    page++
    console.log(page);

    if (page > 1) {
        button.style.display = 'block';
    }

}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    searchImage()
});
button.addEventListener('click',()=>{
    searchImage()
})