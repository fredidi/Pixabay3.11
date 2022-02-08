function clearLoadImg () {
    document.getElementById("#img-wrapper").innerHTML = "";
}

let urlBtn = 'https://pixabay.com/api/?key='+API_KEY+'&q='+input.value+'&image_type=photo&per_page=10';

document.querySelector("#pink").addEventListener("click", () => {
    let colorClickedBtn = urlBtn + '&colors=pink'
    clearLoadImg();
    fetch(colorClickedBtn)
    .then(response => {
      if (!response.ok) throw Error(response.statusText);
        return response.json();
     })
  
     .then(data => {
        console.log(data);
        
        loadImages(data);
     })
  
     .catch(error => console.log(error));    
  
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
});
document.querySelector("#brown").addEventListener("click", () => {
    let colorClickedBtn = urlBtn + '&colors=brown'
    fetch(colorClickedBtn)
    .then(response => {
      if (!response.ok) throw Error(response.statusText);
        return response.json();
     })
  
     .then(data => {
        console.log(data);
        loadImages(data);
     })
  
     .catch(error => console.log(error));    
  
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
});
