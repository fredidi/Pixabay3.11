const API_KEY = '25560072-709e2be31011a4ece715ca1f6';

let appliedColor;
let myUrl;
let pageCount;
const perPage = 10;
let pages;

function changeColorOnClick(selectedColor) {
  console.log('Color chosen: ' + selectedColor)
  appliedColor = selectedColor;
  document.querySelector("#text-value").textContent = appliedColor;
  return appliedColor;
}


document.body.addEventListener('keypress', (eventHandler) => {
  if (eventHandler.key == "Enter") {
    eventHandler.preventDefault();
    try {
      if (input.value != '') {
        console.log('Input log: ' + input.value);

        let url = new URL('https://pixabay.com/api/?key=' + API_KEY + '&image_type=photo&per_page=' + perPage + '');
        let search_params = url.searchParams;
        search_params.set('q', input.value);
        search_params.set('colors', appliedColor);
        search_params.set('page', '1')
        myUrl = url.toString();
        pageCount = 1;
        console.log(myUrl)

        fetchURL(myUrl);
      }
      else {
        console.log('Empty input');
        document.querySelector("#img-show").textContent = '❌ Invalid text. Please try again!'
        document.getElementsByName("active")[0].setAttribute('class', 'inactive');
        document.getElementsByName("inactive")[0].setAttribute('class', 'inactive');
      }
    } catch (error) {
      console.log(error);
    }
  }
})


document.querySelector("#search-button").addEventListener('click', (searchClick) => {
  if (input.value != '') {
    console.log('Input log: ' + input.value);

    let url = new URL('https://pixabay.com/api/?key=' + API_KEY + '&image_type=photo&per_page=' + perPage + '');
    let search_params = url.searchParams;
    search_params.set('q', input.value);
    search_params.set('colors', appliedColor);
    search_params.set('page', '1')
    myUrl = url.toString();
    pageCount = 1;
    console.log('New Url: ' + myUrl)
    console.log(myUrl)
    fetchURL(myUrl);

  }
  else {
    console.log('Empty input');
    document.querySelector("#img-show").textContent = '❌ Invalid text. Please try again!'
    document.getElementsByName("active")[0].setAttribute('class', 'inactive');
    document.getElementsByName("inactive")[0].setAttribute('class', 'inactive');
  }
})

let data;

const fetchURL = async (new_url) => {
  try {
    const res = await fetch(new_url);
    data = await res.json();
    loadImages(data);
  }
  catch (error) {
    console.log(error);
  }
}


const loadImages = async (data) => {
  document.querySelector("#img-show").textContent = ''

  for (let i = 0; i < data.hits.length; i++) {

    let container = document.createElement("div")
    let image = document.createElement("img");
    let userTag = document.createElement("h4");

    container.className = "content-wrapper"
    image.className = "load-Img";
    userTag.className = "load-User-Tag";

    image.style.backgroundImage = "url(" + data.hits[i].largeImageURL + ")";
    image.addEventListener("click", function () {
      window.open(data.hits[i].pageURL, '_blank');
    })
    userTag.setAttribute('style', 'white-space: pre;');
    userTag.textContent = "Photographer: " + data.hits[i].user + "\r\nTags: " + data.hits[i].tags;

    document.querySelector("#img-show").appendChild(container);
    container.append(image);
    container.append(userTag);
  }

  pages = data.totalHits / perPage
  if (data.hits.length >= 1) {
    if (pageCount < pages) {
      document.getElementsByName("active")[0].setAttribute('class', 'active');
      console.log('next load log pages' + pages)
    }

    if (pageCount == 1) {
      document.getElementsByName("inactive")[0].setAttribute('class', 'inactive');
      console.log('prev load log pages' + pages)
    }
  }
  else {
    document.querySelector("#img-show").textContent = '❌ Invalid text. Please try again!'
    document.getElementsByName("active")[0].setAttribute('class', 'inactive');
    document.getElementsByName("inactive")[0].setAttribute('class', 'inactive');
  }

}
function nextBtn() {

  pages = data.totalHits / perPage

  if (pageCount < pages) {
    console.log('next log pages' + pages)
    document.getElementsByName("inactive")[0].setAttribute('class', 'active');
    pageCount++

    let url = new URL(myUrl);
    let search_params = url.searchParams;
    search_params.set('page', pageCount)
    myUrl = url.toString();

    fetchURL(myUrl)
    console.log(myUrl)
    if (pageCount >= pages) {
      document.getElementsByName("active")[0].setAttribute('class', 'inactive');
    }
  }
}

function prevBtn() {
  console.log('prev log pages' + pages)

  pageCount--;
  let url = new URL(myUrl);
  let search_params = url.searchParams;
  search_params.set('page', pageCount)
  myUrl = url.toString();

  fetchURL(myUrl)
  console.log(myUrl)
}