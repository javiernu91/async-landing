const API = "https://youtube-v31.p.rapidapi.com/search?q=javaScript&part=snippet%2Cid&regionCode=US&maxResults=50&order=date"

const content = null || document.getElementById('content');
const body = document.querySelector('body');

const options = {
	method: 'GET',
  headers: {
    'X-RapidAPI-Key': '1304bcb796mshd384b80ccd3201bp11b6a0jsn874a3664d5c5',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};





async function fetchData(urlApi){
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
};

(async () => {
  try { 
    const videos = await fetchData(API);

    let view = `
    ${videos.items.map(video => `
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
    `).slice(10,22).join('')}
    `;
    content.innerHTML = view;
  } catch (error) {

    let errorView = `

    <div class="h-screen max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 bg-[#1e293b] flex flex-col items-center ">
      <h2 class="text-4xl font-bold text-[#11B66D]">Oooops!</h2>
      <h2 class="text-6xl font-black text-[#11B66D] drop-shadow-lg p-6"> 404</h2>
      
      <img class="sm:h-32 md:h-64 lg:h-96  w-auto rounded-sm mt-2" src="https://img.freepik.com/vector-gratis/fondo-plano-diseno_23-2147729621.jpg?w=826&t=st=1667960762~exp=1667961362~hmac=e640cb8d3e4282bc5109fb7182cb47414434974992b831125530e605ee71d8af">

      <h2 class="text-2xl font-bold text-[#11B66D] mt-4">Page Not Found</h2>


        
    </div>
    
    `

    body.innerHTML = errorView;
    console.error(error);
  }
})();




