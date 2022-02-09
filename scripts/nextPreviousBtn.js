
let APIKEY = '25560072-709e2be31011a4ece715ca1f6';
let pageCount = 1;

function changePageOnClick() {
  let url = new URL('https://pixabay.com/api/?key='+APIKEY+'&q='+input.value+'&image_type=photo&per_page=10&page=${countPage}');
  let search_params = url.searchParams;

  pageCount +=1
  search_params.set('page', pageCount)
  let new_url = url.toString();
  console.log(new_url);

  fetch(new_url)

  
 
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




















 

