let API_KEY = '25560072-709e2be31011a4ece715ca1f6';

let appliedColor;
let myUrl;
let pageCount;

function changeColorOnClick(selectedColor) {
    // if (selectedColor) {
    console.log('will evaluate to true if value is not: null, "", undefine');
    console.log('Color chosen: ' + selectedColor)
    appliedColor = selectedColor;
    console.log('applied color: ' + appliedColor)
    document.querySelector("#text-value").textContent = appliedColor;
    return appliedColor;
}


document.body.addEventListener('keypress', (eventHandler) => {
    if (eventHandler.key == "Enter") {
        eventHandler.preventDefault();
        try {
            if (input.value != '') {
                console.log('Log: ' + input.value);

                let url = new URL('https://pixabay.com/api/?key=' + API_KEY + '&image_type=photo&per_page=10');
                let search_params = url.searchParams;
                search_params.set('q', input.value);
                search_params.set('colors', appliedColor);
                search_params.set('page', '1')
                myUrl = url.toString();
                pageCount = 1;
                console.log('New Url: ' + myUrl)

                console.log('string?: ' + typeof myUrl)
                fetchURL(myUrl);


            }
            else {
                console.log('Empty input');
            }
        } catch (error) {
            console.log(error);
        }
    }
})


document.querySelector("#search-button").addEventListener('click', (searchClick) => {
    if (input.value != '') {
        console.log('Log: ' + input.value);

        let url = new URL('https://pixabay.com/api/?key=' + API_KEY + '&image_type=photo&per_page=10');
        let search_params = url.searchParams;
        search_params.set('q', input.value);
        search_params.set('colors', appliedColor);
        search_params.set('page', '1')
        myUrl = url.toString();
        pageCount = 1;
        console.log('New Url: ' + myUrl)

        console.log('string?: ' + typeof myUrl)
        fetchURL(myUrl);

    }
    else {
        console.log('Empty input');
    }
})

let data;

const fetchURL = async (new_url) => {
    try {
        const res = await fetch(new_url);
        console.log(res)
        data = await res.json();
        console.log(data);
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

        image.style.backgroundImage = "url(" + data.hits[i].previewURL + ")";
        image.addEventListener("click", function () {
            window.open(data.hits[i].pageURL, '_blank');
        })
        userTag.setAttribute('style', 'white-space: pre;');
        userTag.textContent = "Photographer: " + data.hits[i].user + "\r\nTags: " + data.hits[i].tags;

        document.querySelector("#img-show").appendChild(container);
        container.append(image);
        container.append(userTag);
    }
}

// Function of Next & Previous Button
function nextBtn() {
  
  const pages = data.totalHits / 10
  console.log('Origin url from search: ' + myUrl)
 
  console.log('next button get input: ' + input.value);
  console.log('next button get color: ' + appliedColor);
  console.log('data totalhits: ' + data.totalHits);
  console.log('PAGES: ' + pages)

  if (pageCount < pages ) {
    console.log('previous page count on next button click: ' + pageCount);
    document.getElementsByName("inactive")[0].setAttribute('class', 'active');
    document.getElementsByName("active")[0].setAttribute('class', 'active');
    pageCount++

    let url = new URL(myUrl);
    let search_params = url.searchParams;
    search_params.set('page', pageCount)
    let pageUrl = url.toString();
    console.log(pageUrl)
    fetchURL(pageUrl)
    
    console.log('current page count on next button click: '+ pageCount);
  }
  else {
    document.getElementsByName("active")[0].setAttribute('class', 'inactive');
  }
}

function prevBtn() {

  if (pageCount == 1 ) {
    document.getElementsByName("inactive")[0].setAttribute('class', 'inactive');
    document.getElementsByName("active")[0].setAttribute('class', 'active');
    
    
  } else {
    document.getElementsByName("active")[0].setAttribute('class', 'active');
    console.log('previous page count on previous button click: '+ pageCount);
    pageCount--;
    let url = new URL(myUrl);
    let search_params = url.searchParams;
    search_params.set('page', pageCount)
    let pageUrl = url.toString();
    console.log(pageUrl)
    fetchURL(pageUrl)
    console.log('current page count on previous button click: '+ pageCount);
  }
}
