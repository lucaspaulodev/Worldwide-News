const btn = document.querySelector('button')
const topic = document.querySelector('input')

function createCard(news){
    const card = document.createElement('div')
    card.classList.add('new')
    const img = document.createElement('img')
    img.src = `${news.urlToImage}`
    card.appendChild(img)
    const title = document.createElement('a')
    title.href = `${news.url}`
    title.innerHTML = `${news.title}`
    card.appendChild(title)
    const source = document.createElement('div')
    source.classList.add('source')
    source.innerHTML = `${news.source.name}`
    card.appendChild(source)
    document.querySelector('.news').appendChild(card)
}

function getNews(url){
    fetch(url,{mode: 'cors'}).then((res)=>{
        if(res.ok){
            return res.json()
        }
        else{'Network response was not ok.'}
    }).then((data)=>{
        const news = data.articles.slice(0, 10)
        news.map(nw => createCard(nw))
    }).catch(err => {console.log(err)})
}

btn.addEventListener('click', ()=>{
    const apiKey = 'f127fddc29c24f2b8618a28cc8718d93'
    let url = `https://newsapi.org/v2/top-headlines?q=${topic.value}&apiKey=${apiKey}`
    if(topic.value !== ''){
        document.querySelector('.search').classList.add('up')
        document.querySelector('.news').innerText = ''
        getNews(url)
    }    
})