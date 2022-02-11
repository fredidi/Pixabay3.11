//https://pixabay.com/api/?key=25560072-709e2be31011a4ece715ca1f6&q=dog&image_type=photo&per_page=10&page=2

let API_KEY = '25560072-709e2be31011a4ece715ca1f6';

  function changeColorOnClick(value) {

    if( value ) {
      console.log('will evaluate to true if value is not: null, "", undefine');
      console.log('Color chosen: ' +value)
      document.querySelector("#input").addEventListener("keydown", (keyPressed) => {
        if (keyPressed.key == "Enter")
        {
          console.log('Key pressed: ' + keyPressed.key);
          console.log('Enter pressed: ' + value)
          console.log('Input value on enter press: ' + input.value);
        }
        
      });
      // document.querySelector("#input").addEventListener("keydown", (keyPressed) => {
//     if (keyPressed.key == "Enter")
//       apiRequest();
//   });

      
      // else{
      //   console.log('Brad Pitt says: Life goes on')
      // }
      // color = value;
      // // console.log(color.value)
      // if(color === isNull){
      //   console.log('null')
      //   // let test = document.getElementById("#any-color")
      //   // test.defaultValue = 'any-color';
      //   // console.log(test)
      // }
      // else{
      //   console.log('fel')
      //   // clickSearchButton(color);
      // }
    // let newColor = value;
    //   console.log(newColor);
    //   let url = new URL('https://pixabay.com/api/?key='+API_KEY+'&q='+input.value+'&image_type=photo&per_page=10');
    // let search_params = url.searchParams;
    // search_params.set('colors', value);
    // let new_url = url.toString();
    // if(search_params == value) {

    // }
  }
}

  // .then(response => {
  //   if (!response.ok) throw Error(response.statusText);
  //     return response.json();
  //  })

  //  .then(data => {
  //     console.log('Images successfully loaded');
  //     document.querySelector("#img-show").textContent = "";
  //     for(let i = 0;i < data.hits.length;i++){
  //         let container = document.createElement("div")
  //         let image = document.createElement("img");
  //         let userTag = document.createElement("h4");

  //         container.className = "content-wrapper"
  //         image.className = "load-Img";
  //         userTag.className = "load-User-Tag"; 

  //         image.style.backgroundImage = "url("+data.hits[i].previewURL +")";
  //         image.addEventListener("click", function(){
  //         window.open(data.hits[i].pageURL, '_blank');
  //         })
  //         userTag.setAttribute('style', 'white-space: pre;');
  //         userTag.textContent = "Photographer: "+ data.hits[i].user +"\r\nTags: " + data.hits[i].tags;

  //         document.querySelector("#img-show").appendChild(container);
  //         container.append(image);
  //         container.append(userTag);
  //     }
      

  //  })
  // }



// --------------------------------------------------------
// document.querySelector("#input").addEventListener("keydown", (keyPressed) => {
//     if (keyPressed.key == "Enter")
//       apiRequest();
//   });

// document.querySelector("#search-button").addEventListener("click", () => {  

//   });

  
  apiRequest = () => {

    document.querySelector("#img-show").textContent = "";
    
   const url = 'https://pixabay.com/api/?key='+API_KEY+'&q='+input.value+'&image_type=photo&per_page=10';
  
    fetch(url)
  
    .then(response => {
      if (!response.ok) throw Error(response.statusText);
        return response.json();
     })
  
     .then(data => {
        loadImages(data);
     })
  
     .catch(error => console.log(error));   
  }
  
  loadImages = (data) => {
    console.log('Images successfully loaded');
    for(let i = 0;i < data.hits.length;i++){
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


// function showInfo(s) {
// if(s.type == 'mouseover') {
//   document.getElementById('img-wrapper').style.h
// }
// else if(s.type =='mouseout') {
//   document.getElementById('img-wrapper').style.display = 'flex';
// }
// }

// document.getElementById('img-wrapper').addEventListener('mouseover',showInfo)
// document.getElementById('img-wrapper').addEventListener('mouseout',showInfo)