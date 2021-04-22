const request = require('request')
const news = (country,category,callback)=>{
    const newsUrl = 'http://newsapi.org/v2/top-headlines?country='+country+'&category='+category+'&apiKey=e53a263a5ec041bd87043a92ff7f1397'

    request({url:newsUrl,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect to news',undefined)
        }
        else if(response.body.message){
            callback('Your Token is invalid',undefined)
        }
        else if(response.body.articles.length == 0){
            callback('Unable to find articles',undefined)
        }
        else{
            callback(undefined,{
                articles:response.body.articles

            })

        }
    })
}



module.exports = news