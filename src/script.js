var btn = document.querySelector('button')
var topic = document.querySelector('input')

async function createCard(news){
    var card = document.createElement('div')
    card.classList.add('new')
    var imagebox = document.createElement('div')
    imagebox.classList.add('imagebox')
    var img = document.createElement('img')
    img.src = `${news.urlToImage}`
    imagebox.appendChild(img)
    card.appendChild(imagebox)
    var title = document.createElement('a')
    title.href = `${news.url}`
    title.innerHTML = `${news.title}`
    card.appendChild(title)
    document.querySelector('.news').appendChild(card)
}

async function getNews(url){
    await fetch(url,{mode: 'cors'}).then((res)=>{
        if(res.ok){
            return res.json()
        }
        else{'Network response was not ok.'}
    }).then(async (data)=>{
        var news = data.articles.slice(0, 3)
        news.map(nw => createCard(nw))
    }).catch(err => {console.log(err)})
}

topic.addEventListener('click', ()=>{
    btn.disabled = false;
})

btn.addEventListener('click', ()=>{
    const apiKey = 'f127fddc29c24f2b8618a28cc8718d93'
    let url = `https://newsapi.org/v2/everything?q=${topic.value}&apiKey=${apiKey}`
    if(topic.value !== ''){getNews(url)}    
})