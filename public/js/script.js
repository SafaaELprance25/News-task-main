
function myNewsData(title,desc,url){
    return `
    <div class="card text-white bg-secondary mb-3 col-md-4 my-4 mx-4" style="width: 18rem;">
    <div class="card-body text-center">
    <img src="${url}" class="card-img-top" style="width:230px;height:130px">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${desc}</p>
  </div>
  </div>
  </br>
  `
}

let fun = async(country)=>{
    try{
        const res = await fetch('http://localhost:3000/products?country='+country+'&category=entertainment')
        const data = await res.json()
        let news = ""
        data.data.articles.forEach(article => {
         news+= myNewsData(article.title,article.description,article.urlToImage)
        });
        document.getElementById('myNews').innerHTML= news
    }catch(e){
        console.log(e)
    }
}

let form = document.getElementById('myForm')

form.addEventListener('submit',()=>{
   event.preventDefault()
    const country = document.getElementById('country').value
    fun(country)
})
