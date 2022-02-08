var API_KEY = '25560072-709e2be31011a4ece715ca1f6';

//https://pixabay.com/api/?key=25560072-709e2be31011a4ece715ca1f6&q=dog&image_type=photo&per_page=10&colors=red
 //function changeColorOnClick(element) {
  //   //look up window.location.href//   
  // var url = new URL('https://pixabay.com/api/?key='+API_KEY+'&q='+input.value+'&image_type=photo&per_page=10');
  // var search_params = url.searchParams;
  // // add "colors" parameter
  // search_params.set('colors', 'red');
  // url.search = search_params.toString();
  // var new_url = url.toString();
  // // output : http://demourl.com/path?id=100&topic=main
  // console.log(new_url);
// };



//Validate userinput on tags
// const clickColor = document.getElementById("clickAnyColor");
// clickColor.addEventListener("click", validate);
// console.log(clickColor);

// const input = document.getElementById('clickAnyColor');
// input.addEventListener('click', function(itsHappening) {
//   if(itsHappening.key === 'click')
//   apiRequest();
// }
// )
// let validateClick = '';
// if(input == "clickAnyColor")
// apiRequest();

let url = 'https://pixabay.com/api/?key='+API_KEY+'&q='+input.value+'&image_type=photo&per_page=10';

//--------------------------------------------------------
document.querySelector("#input").addEventListener("keydown", (keyPressed) => {
    if (keyPressed.key == "Enter")
      apiRequest();
  });
  
document.querySelector("#red").addEventListener("click", () => {
      let test = url + '&colors=red'
      fetch(test)
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
  }
  );




// document.querySelector("#red").addEventListener("click", () => {
//     apiRequest();
// });
document.querySelector("#orange").addEventListener("click", () => {
  apiRequest();
});
  
  // apiRequest = () => {
  
  //   document.querySelector("#img-wrapper").textContent = "";
    
  //  let url = 'https://pixabay.com/api/?key='+API_KEY+'&q='+input.value+'&image_type=photo&per_page=10';
  
  //   fetch(url)
  
  //   .then(response => {
  //     if (!response.ok) throw Error(response.statusText);
  //       return response.json();
  //    })
  
  //    .then(data => {
  //       console.log(data);
  //       loadImages(data);
  //    })
  
  //    .catch(error => console.log(error));   
  // }
  
  // loadImages = (data) => {
  //   console.log('Images successfully loaded');
  //   for(let i = 0;i < data.hits.length;i++){
  //     let image = document.createElement("div");
  //     image.className = "load-Img";
  //     image.style.backgroundImage = "url("+data.hits[i].previewURL +")";
  //     image.addEventListener("click", function(){
  //       window.open(data.hits[i].pageURL, '_blank');
  //     })    
  //   document.querySelector("#img-wrapper").appendChild(image); 
  //   }
  // }

//   let sd = 'https://pixabay.com/api/?key='+API_KEY+'&q='+input.value+'&image_type=photo'
// document.querySelector("#img-wrapper").addEventListener("mouseover", function() {
//         fetch(sd)
//         .then(res =>{
//           console.log(res)

//         })
        
// })


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