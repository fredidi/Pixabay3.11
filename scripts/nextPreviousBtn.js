
var API_KEY = '25560072-709e2be31011a4ece715ca1f6';
url = 'https://pixabay.com/api/?key='+API_KEY+'&q='+input.value+'&image_type=photo&per_page=10&';
page = '1';


function changePageOnClick(url, page) {
    pageFetch(url,page);
 }

 function getParameter(parameterName) {

    const url = 'https://pixabay.com/api/?key='+API_KEY+'&q='+input.value+'&image_type=photo&per_page=10&';

    let parameters = new URLSearchParams(url)
    return parameters.get(parameterName);

 }


function pageFetch(url, page){
  return fetch(`${url}&page=${page}`)
  .then(res => res.json())
  .then(newRes => {

    
    console.log(newRes)

    if(page <= 1){
      page++
    }

    console.log(url)
    return url, page;
  })
}




















 

