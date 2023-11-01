// Loging a console log
console.log('News Nation');

// Creating a XHR Object
const xhr = new XMLHttpRequest();

// Adding it open function for setting request type
let apikey = 'fdc30bda41884f218cf30b06a1e6e432'
url = 'https://newsapi.org/v2/everything?q=Apple&from=2021-10-28&sortBy=popularity&apiKey=fdc30bda41884f218cf30b06a1e6e432';

xhr.open('GET', url, true);
// xhr.open('GET','https://newsapi.org/v2/everything?q=Apple&from=2021-10-28&sortBy=popularity&apiKey=fdc30bda41884f218cf30b06a1e6e432',true);

// Adding onload function which states what to do when content is loaded
xhr.onload = function () {
    if (this.status == '200' || this.status == "ok") {
        let response = JSON.parse(this.responseText)
        let articles = response.articles
        let str = "";
        let newsSection = document.getElementById('newsSect');
        let card = document.getElementById('card')
        let cards = document.querySelector('.card')
        articles.forEach(function (element, index) {
            let newsHtml = `
            <div class="card" id="card${index + 1}">
            <a href="${element.url}" target="_blank" class="ahead"><h3 class="newshead">${element.title}</h3></a>
            <a href="${element.url}" target="_blank" ><img src="${element.urlToImage}" alt="" class="newsimg"></a>
            <p class="newscontent">${element.content}</p>
            <a href="${element.url}" target="_blank" id="readmore">Read More</a>
            </div>
            `
            console.log(element)
            str += newsHtml;
        });
        // newsSection.innerHTML = str;
        newsSection.innerHTML = str
    }
}
// Send request to server
xhr.send()