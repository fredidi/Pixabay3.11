var API_KEY = '25560072-709e2be31011a4ece715ca1f6';



document.querySelector("#input").addEventListener("keydown", (keyPressed) => {
    if (keyPressed.key == "Enter")
      apiRequest();
  });
  
document.querySelector("#search").addEventListener("click", () => {
      apiRequest();
  });
  
  apiRequest = () => {
  
    document.querySelector("#img-wrapper").textContent = "";
  
    const url = 'https://pixabay.com/api/?key='+API_KEY+'&q='+input.value+'&image_type=photo&per_page=10&colors='+validateClick+'';
  
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
      image.className = "loadImg";
      image.style.backgroundImage = "url("+data.hits[i].previewURL +")";
      image.addEventListener("click", function(){
        window.open(data.hits[i].pageURL, '_blank');
       
      
    })
    document.querySelector("#img-wrapper").appendChild(image);
  }
}

validateClick = {
  if (==clickAnycolor)

  else if(== clickGrayscale)
  else if(== clickTransparent)
  else if(== clickRed)

}
