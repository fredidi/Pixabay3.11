//https://pixabay.com/api/?key=25560072-709e2be31011a4ece715ca1f6&q=dog&image_type=photo&per_page=10&page=2

var API_KEY = '25560072-709e2be31011a4ece715ca1f6';

  function changeColorOnClick(value) {
  var url = new URL('https://pixabay.com/api/?key='+API_KEY+'&q='+input.value+'&image_type=photo&per_page=10');
  var search_params = url.searchParams;

  search_params.set('colors', value);
  var new_url = url.toString();

  fetch(new_url)

  .then(response => {
    if (!response.ok) throw Error(response.statusText);
      return response.json();
   })

   .then(data => {
      console.log('Images successfully loaded');
      document.querySelector("#img-wrapper").textContent = "";
      for(let i = 0;i < data.hits.length;i++){
      let image = document.createElement("div");
      let tag = document.createElement("div");
      image.className = "load-Img";
      tag.className = "load-Tag";
      image.style.backgroundImage = "url("+data.hits[i].previewURL +")";
      tag.textContent="Tags: "+data.hits[i].tags;
      image.addEventListener("click", function(){
      window.open(data.hits[i].pageURL, '_blank');
      })    
    document.querySelector("#img-wrapper").appendChild(image);
    document.querySelector("#img-wrapper").appendChild(tag);
    }
   })
};


//--------------------------------------------------------
document.querySelector("#input").addEventListener("keydown", (keyPressed) => {
    if (keyPressed.key == "Enter")
      apiRequest();
  });

  
  apiRequest = () => {
  
    document.querySelector("#img-wrapper").textContent = "";
    
   const url = 'https://pixabay.com/api/?key='+API_KEY+'&q='+input.value+'&image_type=photo&per_page=10';
  
    fetch(url)
  
    .then(response => {
      if (!response.ok) throw Error(response.statusText);
        return response.json();
     })
  
     .then(data => {
        console.log(data);
        loadImages(data);
     })
  
     .catch(error => console.log(error));   
  }
  
  loadImages = (data) => {
    console.log('Images successfully loaded');
    for(let i = 0;i < data.hits.length;i++){
      let image = document.createElement("div");
      image.className = "load-Img";
      image.style.backgroundImage = "url("+data.hits[i].previewURL +")";
      image.addEventListener("click", function(){
        window.open(data.hits[i].pageURL, '_blank');
      })    
    document.querySelector("#img-wrapper").appendChild(image); 
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