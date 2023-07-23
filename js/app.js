console.log("Welcome to DailyBugle")

const newsContainer = document.querySelector("#cards");
const API = "https://newsdata.io/api/1/news?apikey=pub_26613250b269bc15c8ed5c256eba44c402cc7&domain=bbc"

// console.log(API)

const getHeadlines = (api)=>{
    let xhr = new XMLHttpRequest();
    newsContainer.innerHTML = `<span class="md:text-xl font-medium text-lg"><strong>Fetching News ...</strong></span>`
    xhr.open("GET", api, true);
    xhr.onload = ()=>{
        const obj = JSON.parse(xhr.responseText);
        const articles = obj.results;
        let newsHtml = "";
        articles.forEach(newsItem => {
            let news = `<div class="card bg-indigo-100 px-5 py-3 rounded-md shadow-lg flex space-x-4" id="newsCard">
            <div class="content">
                <span id="heading" class="text-xl md:text-2xl">${newsItem.title}</span>
            <p id="content" class="my-3 md:text-sm text-xs">${newsItem.description}</p>
            </div>
        </div>`
        newsHtml += news;
        });
        newsContainer.innerHTML = newsHtml;
    }
    xhr.send()
    console.log("Done");
}

getHeadlines(API);
