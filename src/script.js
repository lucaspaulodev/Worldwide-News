const btn = document.querySelector('button')
const topic = document.querySelector('input')
//Creating and rendering the image
//Criando e renderizando a imagem
function getImage(news){
    var image = document.createElement('img')
    image.src = `${news.urlToImage}`
    return image
}
//Creating and rendering the link to the news
//Criando e renderizando o link para a noticia
function getLink(news){
    var title = document.createElement('a')
    title.href = `${news.url}`
    title.innerHTML = `${news.title}`
    return title
}
//Creating and rendering the news source name block
//Criando e renderizando o bloco do nome da fonte da noticia
function getSource(news){
    var source = document.createElement('div')
    source.classList.add('source')
    source.innerHTML = `${news.source.name}`
    return source
}
//Creating the card where the image, link and source will be displayed on screen
//Criando o card onde a imagem, link e fonte serão exibidos em tela
function createCard(news){
    var card = document.createElement('div')
    card.classList.add('new')
    card.appendChild(getImage(news))
    card.appendChild(getLink(news))
    card.appendChild(getSource(news))
    document.querySelector('.news').appendChild(card)
}
//Consuming the Google News API and obtaining the "articles" data
//Consumindo a Google News API e obtendo os dados "articles"
async function getNews(url){
    const response = await fetch(url,{mode: 'cors'})
    const newsData = await response.json()
    return newsData.articles
}
//Receiving the topic to be researched and activating the entire code execution to display the news
//Recebendo o topico a ser pesquisado e ativando toda a execução do código para exibir as noticias
btn.addEventListener('click', async ()=>{
    const apiKey = 'f127fddc29c24f2b8618a28cc8718d93'
    let url = `https://newsapi.org/v2/everything?q=${topic.value}&apiKey=${apiKey}`
    if(topic.value !== ''){
        
        document.querySelector('.news').innerText = ''
        var news = await getNews(url)
        if(news.length === 0){
            alert('The searched subject does not have enough results to be shown');
        }else{
            document.querySelector('.search').classList.add('up')
            document.querySelector('.footer').classList.add('down')
            news.forEach( topic => createCard(topic))
        }
    }    
})