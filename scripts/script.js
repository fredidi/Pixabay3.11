//https://pixabay.com/api/?key=25560072-709e2be31011a4ece715ca1f6&q=dog&image_type=photo&per_page=10&page=2

let API_KEY = '25560072-709e2be31011a4ece715ca1f6';

//let url = 'https://pixabay.com/api/?key='+API_KEY+'&image_type=photo&per_page=10';



function changeColorOnClick(selectedColor) {
  if (selectedColor) {
    console.log('will evaluate to true if value is not: null, "", undefine');
    console.log('Color chosen: ' + selectedColor)

    document.body.addEventListener('keypress', (eventHandler) => {
      if (eventHandler.key == "Enter") {
        eventHandler.preventDefault();
        try {
          if (input.value != '') {
            console.log('Log: ' + input.value);

            let url = new URL('https://pixabay.com/api/?key=' + API_KEY + '&image_type=photo&per_page=10');
            let search_params = url.searchParams;
            search_params.set('q', input.value);
            search_params.set('colors', selectedColor);
            let new_url = url.toString();

            console.log('New Url: ' + new_url)

            fetchURL(new_url);
          }
          else {
            console.log('Empty input');
          }
        } catch (error) {
          console.log(error);
        }
      }
    })
  }
  if (selectedColor) {
    document.querySelector("#search-button").addEventListener('click', (searchClick) => {
      let teest = selectedColor
      console.log('teest color on click ' + teest)
      if (input.value != '') {
        console.log('Log: ' + input.value);

        let url = new URL('https://pixabay.com/api/?key=' + API_KEY + '&image_type=photo&per_page=10');
        let search_params = url.searchParams;
        search_params.set('q', input.value);
        search_params.set('colors', selectedColor);
        let new_url = url.toString();

        console.log('New Url: ' + new_url)

        fetchURL(new_url);
      }
      else {
        console.log('Empty input');
      }
    })
  }
}


 
  
  

  // let clickColorSearch = document.querySelector(newColor)
  // console.log(clickColorSearch.value)

  // console.log(color);
  






// --------------------------------------------------------
// document.querySelector("#input").addEventListener("keydown", (keyPressed) => {
//     if (keyPressed.key == "Enter")
//       apiRequest();
//   });

// document.querySelector("#search-button").addEventListener("click", () => {  

//   });

  
  // apiRequest = () => {

  //   document.querySelector("#img-show").textContent = "";
    
  //  const url = 'https://pixabay.com/api/?key='+API_KEY+'&q='+input.value+'&image_type=photo&per_page=10';
  
  //   fetch(url)
  
  //   .then(response => {
  //     if (!response.ok) throw Error(response.statusText);
  //       return response.json();
  //    })
  
  //    .then(data => {
  //       loadImages(data);
  //    })
  
  //    .catch(error => console.log(error));   
  // }


// document.body.addEventListener('keypress', (eventHandler) => {
//   if (eventHandler.key == "Enter") {
//       eventHandler.preventDefault();
//       try {
//           if (input.value != '') {
//               console.log(input.value);
//               fetchURL();
//           }
//           else{
//               console.log('Empty input');
//           }
//       } catch (error) {
//           console.log(error);
//       }
//   }
// })


const fetchURL = async (new_url) => {
  try {
      const res = await fetch(new_url);
      console.log(res)
      const data = await res.json();
      console.log(data);
      loadImages(data);
  }
  catch (error) {
      console.log(error);
  }
}


const loadImages = async (data) => {
  for(let i = 0; i < data.hits.length; i++){
    document.querySelector("#img-show").textContent = ''
    let container = document.createElement("div")
    let image = document.createElement("img");
    let userTag = document.createElement("h4");

    container.className = "content-wrapper"
    image.className = "load-Img";
    userTag.className = "load-User-Tag"; 

    image.style.backgroundImage = "url("+data.hits[i].previewURL +")";
    image.addEventListener("click", function(){
    window.open(data.hits[i].pageURL, '_blank');
    })
    userTag.setAttribute('style', 'white-space: pre;');
    userTag.textContent = "Photographer: "+ data.hits[i].user +"\r\nTags: " + data.hits[i].tags;

    document.querySelector("#img-show").appendChild(container);
    container.append(image);
    container.append(userTag);
  }
}