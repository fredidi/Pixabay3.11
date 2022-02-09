
let APIKEY = '25560072-709e2be31011a4ece715ca1f6';
let pageCount = 1;

function changePageOnClick(value) {
  let url = new URL('https://pixabay.com/api/?key='+APIKEY+'&q=dog&image_type=photo&per_page=10&page=${countPage}');
  let search_params = url.searchParams;
  if(value === 'next'){
    console.log('next')
    if(pageCount <= 10){
      pageCount +=1;
    search_params.set('page', pageCount)
    let new_url = url.toString();
    console.log(new_url);

    fetch(new_url)
    .then(response => {
      if (!response.ok) throw Error(response.statusText);
        return response.json();
     })
    .then(data => {
    
      console.log('Images successfully loaded');
      document.querySelector("#img-show").textContent = "";
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
    )}
  }

  else {
    if(pageCount > 1)
    console.log('prev')
    pageCount -=1;
    search_params.set('page', pageCount)
    let new_url = url.toString();
    console.log(new_url);

    fetch(new_url)
    .then(response => {
      if (!response.ok) throw Error(response.statusText);
        return response.json();
     })
    .then(data => {
    
      console.log('Images successfully loaded');
      document.querySelector("#img-show").textContent = "";
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
  
    )}
}
  




// function changePageOnClick(url, page) {
//     pageFetch(url,page);
//  }

//  function getParameter(parameterName) {

//     let url = 'https://pixabay.com/api/?key='+API_KEY+'&q='+input.value+'&image_type=photo&per_page=10&';

//     let parameters = new URLSearchParams(url)
//     return parameters.get(parameterName);

//  }


// function pageFetch(url, page){
//   return fetch(`${url}&page=${page}`)
//   .then(res => res.json())
//   .then(newRes => {

    
//     console.log(newRes)

//     if(page <= 1){
//       page++
//     }

//     console.log(url)
//     return url, page;
//   })
// }