// function validate() {
//     if(search === true || enter === true)
//     apiRequest();
// }




function clickSearchButton() {

    let clickSearch = document.querySelector("#input")
    console.log('Not implemented yet on button press');
    console.log('Search button pressed with input value: ' +clickSearch.value)
   
    

    // let clickColorSearch = document.querySelector(newColor)
    // console.log(clickColorSearch.value)

    // console.log(color);
    
}

//     let url = 'https://pixabay.com/api/?key='+API_KEY+'&q='+clickSearch.value+'&image_type=photo&per_page=10';


//   let search_params = url.searchParams;

// //   search_params.set('colors', value);

//   let new_url = url.toString();
  
//   fetch(new_url)
  

//   .then(response => {
//     if (!response.ok) throw Error(response.statusText);
//       return response.json();
//    })

//    .then(data => {
//       console.log('Images successfully loaded');
//       document.querySelector("#img-show").textContent = "";
//       for(let i = 0;i < data.hits.length;i++){
//           let container = document.createElement("div")
//           let image = document.createElement("img");
//           let userTag = document.createElement("h4");

//           container.className = "content-wrapper"
//           image.className = "load-Img";
//           userTag.className = "load-User-Tag"; 

//           image.style.backgroundImage = "url("+data.hits[i].previewURL +")";
//           image.addEventListener("click", function(){
//           window.open(data.hits[i].pageURL, '_blank');
//           })
//           userTag.setAttribute('style', 'white-space: pre;');
//           userTag.textContent = "Photographer: "+ data.hits[i].user +"\r\nTags: " + data.hits[i].tags;

//           document.querySelector("#img-show").appendChild(container);
//           container.append(image);
//           container.append(userTag);
//       }
//     }
//    )}



// var enterKey = document.getElementById('#input');
// enterKey.addEventListener('keydown', (event) => {
//       if(event.key == "Enter") {
//             console.log('dsa');
//       document.getElementById('search-button').click();
//       }
// })

