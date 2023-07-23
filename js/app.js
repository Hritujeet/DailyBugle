console.log("Welcome to DailyBugle")

const newsContainer = document.querySelector("#cards");

const source = 'the-times-of-india';
const apiKey = 'f0d7b07f32d04649a7dabb042e28f8b8'
const API = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`

// console.log(API)

const getHeadlines = (api)=>{
    let xhr = new XMLHttpRequest();
    newsContainer.innerHTML = `<span class="md:text-xl font-medium text-lg"><strong>Fetching News ...</strong></span>`
    xhr.open("GET", api, true);
    xhr.onload = ()=>{
        const obj = JSON.parse(xhr.responseText);
        const articles = obj.articles;
        console.log(articles);
        let newsHtml = "";
        Array.from(articles).forEach(newsItem => {
            let news = `<div class="card bg-indigo-100 px-5 py-3 rounded-md shadow-lg flex space-x-4" id="newsCard">
            <img class="w-auto h-32 rounded-md" src="${newsItem.urlToImage}" alt="" srcset="">
            <div class="content">
                <span id="heading" class="text-xl md:text-2xl">${newsItem.title}</span>
            <p id="content" class="my-3 md:text-sm text-xs">${newsItem.description}</p>
            </div>
        </div>`
        newsHtml += news;
        });
        newsContainer.innerHTML += newsHtml;
    }
    xhr.send()
    console.log("Done");
}

getHeadlines(API);
