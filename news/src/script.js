var btn = document.querySelector('button')

btn.addEventListener('click', ()=>{
    const apiKey = 'f127fddc29c24f2b8618a28cc8718d93'
    let topic = document.querySelector('input').value;

    let proxy = 'https://cors-anywhere.herokuapp.com/'

    let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`

    fetch(proxy + url).then((res)=>{
        return res.json()
    }).then((data)=>{
       console.log(data) 
    })
})